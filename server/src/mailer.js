// Optional SMTP notifications via nodemailer.
// Credentials come from server/.env only. If SMTP is not configured the API
// still stores submissions in PostgreSQL - it just skips the email.
import nodemailer from 'nodemailer'
import './env.js'

// Read from process.env (set by Render, or loaded from server/.env when not
// already set - see server/src/env.js which uses override: false).
const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  MAIL_FROM,
  NOTIFY_EMAIL,
} = process.env

// Enable only when SMTP is fully configured. `NOTIFY_EMAIL` is required so a
// submission is never "saved but never emailed".
export const smtpConfigured =
  Boolean(SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && NOTIFY_EMAIL)

// Diagnostic: prints only Boolean values - no secrets.
console.log('[mailer-check]', {
  SMTP_HOST: Boolean(SMTP_HOST),
  SMTP_PORT: Boolean(SMTP_PORT),
  SMTP_USER: Boolean(SMTP_USER),
  SMTP_PASS: Boolean(SMTP_PASS),
  NOTIFY_EMAIL: Boolean(NOTIFY_EMAIL),
})

let transport = null
if (smtpConfigured) {
  transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })
}

// Never throws - a failed notification email must not fail the API request.
export async function sendNotification(subject, text) {
  if (!transport || !NOTIFY_EMAIL) {
    console.log(
      `[mailer] SMTP not configured - skipping notification: ${subject}`,
    )
    return false
  }
  try {
    await transport.sendMail({
      from: MAIL_FROM || SMTP_USER,
      to: NOTIFY_EMAIL,
      subject,
      text,
    })
    console.log(`[mailer] Notification sent: ${subject}`)
    return true
  } catch (error) {
    // Log a useful, non-secret message; silent on credentials.
    console.error(
      '[mailer] Failed to send notification:',
      error instanceof Error ? error.message : String(error),
    )
    return false
  }
}
