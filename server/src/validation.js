// Server-side validation for form submissions.
// Every value is trimmed, length-capped, and returned in a normalized object
// so the API never trusts anything sent by the browser.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const LIMITS = {
  firstName: 120,
  lastName: 120,
  fullName: 200,
  company: 200,
  email: 254,
  phone: 60,
  enquiryType: 120,
  productInterest: 200,
  quantity: 60,
  message: 5000,
}

function clean(value, max) {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  if (trimmed.length === 0 || trimmed.length > max) return null
  return trimmed
}

function isEmail(value) {
  return typeof value === 'string' && EMAIL_RE.test(value)
}

export function validateContact(body) {
  const errors = []
  const data = body && typeof body === 'object' ? body : {}

  const firstName = clean(data.firstName, LIMITS.firstName)
  const lastName = clean(data.lastName, LIMITS.lastName)
  const email = clean(data.email, LIMITS.email)
  const enquiryType = clean(data.enquiryType, LIMITS.enquiryType)
  const message = clean(data.message, LIMITS.message)
  const company = clean(data.company, LIMITS.company)
  const phone = clean(data.phone, LIMITS.phone)

  if (!firstName) errors.push('First name is required.')
  if (!lastName) errors.push('Last name is required.')
  if (!email || !isEmail(email)) errors.push('A valid email is required.')
  if (!enquiryType) errors.push('Enquiry type is required.')
  if (!message) errors.push('Message is required.')

  return {
    ok: errors.length === 0,
    errors,
    value: { firstName, lastName, company, email, phone, enquiryType, message },
  }
}

export function validateQuote(body) {
  const errors = []
  const data = body && typeof body === 'object' ? body : {}

  const fullName = clean(data.fullName, LIMITS.fullName)
  const email = clean(data.email, LIMITS.email)
  const message = clean(data.message, LIMITS.message)
  const company = clean(data.company, LIMITS.company)
  const phone = clean(data.phone, LIMITS.phone)
  const productInterest = clean(data.productInterest, LIMITS.productInterest)
  const quantity = clean(data.quantity, LIMITS.quantity)

  if (!fullName) errors.push('Full name is required.')
  if (!email || !isEmail(email)) errors.push('A valid email is required.')
  if (!message) errors.push('A description of your requirements is required.')

  return {
    ok: errors.length === 0,
    errors,
    value: { fullName, company, email, phone, productInterest, quantity, message },
  }
}
