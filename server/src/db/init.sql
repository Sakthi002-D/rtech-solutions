-- ---------------------------------------------------------------------------
-- R-Tech Solutions schema (PostgreSQL - dedicated R-Tech Supabase database)
-- Idempotent: safe to run multiple times (CREATE ... IF NOT EXISTS).
-- Applied via: npm run db:init  (server/src/db/migrate.js)
-- ---------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS contact_enquiries (
  id           BIGSERIAL PRIMARY KEY,
  first_name   TEXT        NOT NULL,
  last_name    TEXT        NOT NULL,
  company      TEXT,
  email        TEXT        NOT NULL,
  phone        TEXT,
  enquiry_type TEXT        NOT NULL,
  message      TEXT        NOT NULL,
  user_agent   TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_contact_enquiries_created_at
  ON contact_enquiries (created_at DESC);

CREATE TABLE IF NOT EXISTS quote_requests (
  id              BIGSERIAL PRIMARY KEY,
  full_name       TEXT        NOT NULL,
  company         TEXT,
  email           TEXT        NOT NULL,
  phone           TEXT,
  product_interest TEXT,
  quantity        TEXT,
  message         TEXT        NOT NULL,
  user_agent      TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at
  ON quote_requests (created_at DESC);
