// Safe, idempotent database initialization.
// Runs init.sql inside a transaction and records the run in
// schema_migrations, so it is safe to run repeatedly and never overwrites
// existing data. Usage: npm run db:init  (from the server/ folder).
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { pool } from './pool.js'

const here = path.dirname(fileURLToPath(import.meta.url))

async function migrate() {
  const sql = await fs.readFile(path.join(here, 'init.sql'), 'utf8')
  const client = await pool.connect()

  try {
    await client.query('BEGIN')
    await client.query(`
      CREATE TABLE IF NOT EXISTS schema_migrations (
        name       TEXT PRIMARY KEY,
        applied_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )
    `)

    const already = await client.query(
      'SELECT 1 FROM schema_migrations WHERE name = $1',
      ['001_init'],
    )

    if (already.rowCount > 0) {
      console.log('[db] Schema already initialized - nothing to do.')
    } else {
      await client.query(sql)
      await client.query(
        'INSERT INTO schema_migrations (name) VALUES ($1) ON CONFLICT DO NOTHING',
        ['001_init'],
      )
      console.log('[db] Schema initialized: contact_enquiries, quote_requests.')
    }

    await client.query('COMMIT')
  } catch (error) {
    await client.query('ROLLBACK')
    console.error('[db] Migration failed:', error.message)
    process.exitCode = 1
  } finally {
    client.release()
    await pool.end()
  }
}

migrate()
