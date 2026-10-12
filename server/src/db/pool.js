// Shared PostgreSQL connection pool (R-Tech Supabase database only).
import pg from 'pg'
import '../env.js'

const { Pool } = pg

const connectionString = process.env.DATABASE_URL

// Supabase PostgreSQL requires TLS; `sslmode=require` in the URL (or the
// explicit PG_SSL=true flag) enables it.
const useSsl =
  process.env.PG_SSL === 'true' || /sslmode=require/.test(connectionString)

export const pool = new Pool({
  connectionString,
  ssl: useSsl ? { rejectUnauthorized: false } : undefined,
  max: 10,
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 10_000,
})
