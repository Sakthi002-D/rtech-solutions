import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  CircleAlert,
  CircleCheck,
  Info,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'
import { contact, hasEmail, hasPhone } from '../data/contact'
import facilityImage from '../assets/images/rtech-building.png'
import './Contact.css'

// In local development the Vite dev server proxies /api to the Express
// backend, so a relative URL works. On Render the frontend is served
// separately from the API and VITE_API_URL points at it, so we use that.
const apiBase = import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/` : ''

const enquiryTypes = [
  'General enquiry',
  'Product information',
  'Request a quote',
  'Custom manufacturing',
  'Technical support',
  'Other',
]

const formPoints = [
  'Product name or category you are interested in',
  'Dimensions or measurements where available',
  'Material, quantity, and application details',
]

function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('')
  const statusRef = useRef(null)

  // The banner renders at the top of a long form while the user submits at
  // the bottom - bring it into view whenever it appears.
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      statusRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [status])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const payload = {
      firstName: (data.get('firstName') || '').toString().trim(),
      lastName: (data.get('lastName') || '').toString().trim(),
      company: (data.get('company') || '').toString().trim(),
      email: (data.get('email') || '').toString().trim(),
      phone: (data.get('phone') || '').toString().trim(),
      enquiryType: (data.get('enquiryType') || '').toString().trim(),
      message: (data.get('message') || '').toString().trim(),
    }

    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch(apiBase + 'api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const body = await response.json().catch(() => null)

      if (!response.ok) {
        throw new Error(
          body?.error ||
            (Array.isArray(body?.errors) && body.errors[0]) ||
            'Something went wrong. Please try again shortly.',
        )
      }

      form.reset()
      setStatus('success')
    } catch (error) {
      setErrorMessage(
        error instanceof Error && error.message
          ? error.message
          : 'Something went wrong. Please try again shortly.',
      )
      setStatus('error')
    }
  }

  return (
    <main className="ct-page">
      {/* ================= HERO ================= */}
      <section className="ct-hero" aria-labelledby="ct-hero-title">
        <div className="ct-hero-rules" aria-hidden="true">
          <span className="ct-rule-h" />
          <span className="ct-tick ct-tick-tl" />
          <span className="ct-tick ct-tick-br" />
        </div>
        <div className="ct-hero-inner">
          <p className="ct-eyebrow">
            <span className="ct-eyebrow-bar" aria-hidden="true" />
            Contact Us
          </p>
          <h1 id="ct-hero-title">
            Let&apos;s Build Something <span>Reliable.</span>
          </h1>
          <p className="ct-lede">
            Share your industrial or OEM requirements and our engineering team
            will help you select the right rubber and sealing solution — from
            standard products to custom-moulded components.
          </p>
        </div>
      </section>

      {/* ================= BUSINESS ENQUIRY (form + image) ================= */}
      <section className="ct-enquiry" aria-labelledby="ct-enquiry-title">
        <div className="ct-inner ct-enquiry-grid">
          <div className="ct-enquiry-form-side">
            <p className="ct-eyebrow">
              <span className="ct-eyebrow-bar" aria-hidden="true" />
              Business Enquiry
            </p>
            <h2 id="ct-enquiry-title">
              Tell us about your <span>requirements</span>
            </h2>
            <p className="ct-enquiry-lede">
              Complete the form and we will get back to you with the right
              product information for your application.
            </p>

            <ul className="ct-form-points">
              {formPoints.map((point) => (
                <li key={point}>
                  <Check aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            <form className="ct-form" onSubmit={handleSubmit}>
              {status === 'error' && (
                <p ref={statusRef} className="ct-form-status is-error" role="status">
                  <CircleAlert aria-hidden="true" />
                  {errorMessage}
                </p>
              )}
              {status === 'success' && (
                <p ref={statusRef} className="ct-form-status is-success" role="status">
                  <CircleCheck aria-hidden="true" />
                  Thank you — your enquiry has been received. Our team will get
                  back to you shortly.
                </p>
              )}

              <div className="ct-field-row">
                <div className="ct-field">
                  <label htmlFor="ct-first-name">
                    First name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="ct-first-name"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                  />
                </div>
                <div className="ct-field">
                  <label htmlFor="ct-last-name">
                    Last name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="ct-last-name"
                    name="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div className="ct-field-row">
                <div className="ct-field">
                  <label htmlFor="ct-email">
                    Work email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="ct-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="ct-field">
                  <label htmlFor="ct-phone">Phone</label>
                  <input
                    id="ct-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="ct-field-row">
                <div className="ct-field">
                  <label htmlFor="ct-company">Company name</label>
                  <input
                    id="ct-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                  />
                </div>
                <div className="ct-field">
                  <label htmlFor="ct-enquiry-type">
                    Enquiry type <span aria-hidden="true">*</span>
                  </label>
                  <div className="ct-select-wrap">
                    <select
                      id="ct-enquiry-type"
                      name="enquiryType"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      {enquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="ct-field">
                <label htmlFor="ct-message">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="ct-message"
                  name="message"
                  required
                  placeholder="Dimensions, material, quantity, and application details"
                />
              </div>

              <button
                className="ct-btn ct-btn-red ct-form-submit"
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
                <Send aria-hidden="true" />
              </button>

              <p className="ct-form-disclaimer">
                Your details are sent securely to our team and stored only to
                handle your enquiry.
              </p>
            </form>
          </div>

          <figure className="ct-enquiry-media">
            <img
              src={facilityImage}
              alt="R-Tech Solutions rubber manufacturing facility"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* ================= CONTACT DETAILS ================= */}
      <section className="ct-details" aria-labelledby="ct-details-title">
        <div className="ct-inner">
          <header className="ct-head ct-head-center">
            <p className="ct-eyebrow">
              <span className="ct-eyebrow-bar" aria-hidden="true" />
              Contact Details
            </p>
            <h2 id="ct-details-title">
              How to <span>reach us</span>
            </h2>
          </header>

          <ul className="ct-cards">
            <li className="ct-card">
              <span className="ct-card-icon" aria-hidden="true">
                <Mail />
              </span>
              <h3>Email</h3>
              {hasEmail ? (
                <p className="ct-card-value">
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </p>
              ) : (
                <p className="ct-card-note">
                  <Info aria-hidden="true" />
                  Contact details to be confirmed
                </p>
              )}
            </li>

            <li className="ct-card">
              <span className="ct-card-icon" aria-hidden="true">
                <Phone />
              </span>
              <h3>Phone</h3>
              {hasPhone ? (
                <p className="ct-card-value">
                  <a href={`tel:${contact.phoneHref || contact.phone}`}>
                    {contact.phone}
                  </a>
                </p>
              ) : (
                <p className="ct-card-note">
                  <Info aria-hidden="true" />
                  Contact details to be confirmed
                </p>
              )}
            </li>

            <li className="ct-card">
              <span className="ct-card-icon" aria-hidden="true">
                <MapPin />
              </span>
              <h3>Address</h3>
              {contact.addressLines.length > 0 ? (
                <p className="ct-card-value">
                  {contact.addressLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </p>
              ) : (
                <p className="ct-card-note">
                  <Info aria-hidden="true" />
                  Address to be confirmed
                </p>
              )}
            </li>
          </ul>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="ct-cta" aria-labelledby="ct-cta-title">
        <div className="ct-inner ct-cta-inner">
          <div className="ct-cta-copy">
            <p className="ct-eyebrow">
              <span className="ct-eyebrow-bar" aria-hidden="true" />
              Ready to Start
            </p>
            <h2 id="ct-cta-title">
              Need Rubber or Sealing <span>Products?</span>
            </h2>
            <p>
              Request a quote with your dimensions and requirements, and our
              team will follow up.
            </p>
          </div>
          <Link className="ct-btn ct-btn-white" to="/request-a-quote">
            Request a Quote
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Contact
