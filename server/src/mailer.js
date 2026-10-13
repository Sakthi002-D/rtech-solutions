
import { Resend } from 'resend'
import './env.js'

const { RESEND_API_KEY, NOTIFY_EMAIL, MAIL_FROM } = process.env

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null

export async function sendNotification(subject, text) {
  if (!resend || !NOTIFY_EMAIL) {
    console.error('[mailer] RESEND_API_KEY or NOTIFY_EMAIL is missing')
    return false
  }

  try {
    const { data, error } = await resend.emails.send({
      from: MAIL_FROM || 'R-Tech Solutions <onboarding@resend.dev>',
      to: [NOTIFY_EMAIL],
      subject,
      text,
    })

    if (error) {
      console.error('[mailer] Resend error:', error.message)
      return false
    }

    console.log('[mailer] Email sent successfully:', data?.id)
    return true
  } catch (error) {
    console.error('[mailer] Failed:', error.message)
    return false
  }
}
