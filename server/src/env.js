// Loads server-side environment configuration.
// The .env file lives in the server/ folder ONLY - frontend code never reads
// these values (Vite exposes import.meta.env.VITE_* to the browser; nothing
// from this file is bundled into the React app).
import dotenv from 'dotenv'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const serverDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
dotenv.config({ path: path.join(serverDir, '.env') })

if (!process.env.DATABASE_URL) {
  console.error(
    '[rtech-server] DATABASE_URL is not set.\n' +
      'Copy server/.env.example to server/.env and paste the connection ' +
      'string of the dedicated R-Tech Supabase PostgreSQL database.',
  )
  process.exit(1)
}
