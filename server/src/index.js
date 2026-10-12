// R-Tech Solutions API - Express + PostgreSQL
// Runs separately from the Vite dev server; the Vite proxy forwards /api
// here during development. Database and SMTP secrets live in server/.env
// only and are never exposed to the React frontend.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import { pool } from './db/pool.js'
import { sendNotification } from './mailer.js'
import { validateContact, validateQuote } from './validation.js'

const PORT = Number(process.env.PORT) || 5175
const app = express()
app.disable('x-powered-by')
app.use(express.json({ limit: '32kb' }))

// ---------- Tiny in-memory rate limiter (per IP, per route) ----------
const WINDOW_MS = 15 * 60 * 1000
const MAX_REQUESTS = 10
const buckets = new Map()

function rateLimit(req, res, next) {
  const now = Date.now()
  const key = `${req.ip}:${req.baseUrl}`
  let bucket = buckets.get(key)
  if (!bucket || now - bucket.start >= WINDOW_MS) {
    bucket = { start: now, count: 0 }
    buckets.set(key, bucket)
  }
  bucket.count += 1
  if (bucket.count > MAX_REQUESTS) {
    return res
      .status(429)
      .json({ ok: false, error: 'Too many requests. Please try again later.' })
  }
  next()
}

// Periodically drop stale buckets so the map cannot grow unbounded.
setInterval(() => {
  const now = Date.now()
  for (const [key, bucket] of buckets) {
    if (now - bucket.start >= WINDOW_MS) buckets.delete(key)
  }
}, WINDOW_MS).unref()

// ---------- CORS (Render/deployed frontend) ----------
// Reads FRONTEND_URL (e.g. "https://rtech-solutions.onrender.com") and
// allows browser requests only from that origin. Falls back to the local
// dev origin during development so the Vite proxy works locally.
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5175'

app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    // Handle CORS preflight for the two POST endpoints.
    res.setHeader('Access-Control-Allow-Origin', FRONTEND_URL)
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    return res.status(204).end()
  }

  // Only allow cross-origin requests from the configured frontend URL.
  if (
    FRONTEND_URL !== 'http://localhost:5175' &&
    !req.headers.origin?.startsWith(FRONTEND_URL)
  ) {
    return res.status(403).json({ ok: false, error: 'Forbidden' })
  }

  res.setHeader('Access-Control-Allow-Origin', FRONTEND_URL)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

// ---------- Health ----------
app.get('/api/health', async (req, res) => {
  try {
    await pool.query('SELECT 1')
    res.json({ status: 'ok', database: 'up' })
  } catch {
    res.status(503).json({ status: 'degraded', database: 'down' })
  }
})

// ---------- Contact enquiries ----------
app.post('/api/contact', rateLimit, async (req, res) => {
  const { ok, errors, value } = validateContact(req.body)
  if (!ok) {
    return res.status(400).json({ ok: false, errors })
  }

  try {
    const { rows } = await pool.query(
      `INSERT INTO contact_enquiries
         (first_name, last_name, company, email, phone, enquiry_type, message, user_agent)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING id, created_at`,
      [
        value.firstName,
        value.lastName,
        value.company,
        value.email,
        value.phone,
        value.enquiryType,
        value.message,
        (req.get('user-agent') || '').slice(0, 500) || null,
      ],
    )

    sendNotification(
      `Website enquiry - ${value.enquiryType}`,
      [
        `Name: ${value.firstName} ${value.lastName}`,
        value.company && `Company: ${value.company}`,
        `Email: ${value.email}`,
        value.phone && `Phone: ${value.phone}`,
        `Enquiry type: ${value.enquiryType}`,
        '',
        value.message,
      ]
        .filter(Boolean)
        .join('\n'),
    )

    res.status(201).json({ ok: true, id: rows[0].id })
  } catch (error) {
    console.error('[api] /api/contact failed:', error.message)
    res
      .status(500)
      .json({ ok: false, error: 'Could not save your enquiry. Please try again.' })
  }
})

// ---------- Request a Quote ----------
app.post('/api/contact/quote', rateLimit, async (req, res) => {
  const { ok, errors, value } = validateQuote(req.body)
  if (!ok) {
    return res.status(400).json({ ok: false, errors })
  }

  try {
    const { rows } = await pool.query(
      `INSERT INTO quote_requests
         (full_name, company, email, phone, product_interest, quantity, message, user_agent)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING id, created_at`,
      [
        value.fullName,
        value.company,
        value.email,
        value.phone,
        value.productInterest,
        value.quantity,
        value.message,
        (req.get('user-agent') || '').slice(0, 500) || null,
      ],
    )

    sendNotification(
      'Website quote request',
      [
        `Name: ${value.fullName}`,
        value.company && `Company: ${value.company}`,
        `Email: ${value.email}`,
        value.phone && `Phone: ${value.phone}`,
        value.productInterest && `Product of interest: ${value.productInterest}`,
        value.quantity && `Quantity: ${value.quantity}`,
        '',
        value.message,
      ]
        .filter(Boolean)
        .join('\n'),
    )

    res.status(201).json({ ok: true, id: rows[0].id })
  } catch (error) {
    console.error('[api] /api/contact/quote failed:', error.message)
    res
      .status(500)
      .json({ ok: false, error: 'Could not save your request. Please try again.' })
  }
})

// ---------- Unknown API routes ----------
app.use('/api', (req, res) => {
  res.status(404).json({ ok: false, error: 'Not found' })
})

// ---------- Serve the built frontend (production convenience) ----------
const here = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(here, '..', '..', 'dist')
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir))
  app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(distDir, 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`[rtech-server] API listening on http://localhost:${PORT}`)
})
