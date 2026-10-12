// Optional SMTP notifications via nodemailer.
// Credentials come from server/.env only. If SMTP is not configured the API
// still stores submissions in PostgreSQL - it just skips the email.
import nodemailer from 'nodemailer'
import './env.js'

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, NOTIFY_EMAIL } =
  process.env

export const smtpConfigured = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS)

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
    console.log(`[mailer] SMTP not configured - skipping notification: ${subject}`)
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
    console.error('[mailer] Failed to send notification:', error.message)
    return false
  }
}
