import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, CircleAlert, CircleCheck, Send } from 'lucide-react'
import './RequestQuote.css'
import SEO from '../components/SEO.jsx'

// In local development the Vite dev server proxies /api to the Express
// backend, so a relative URL works. On Render the frontend is served
// separately from the API and VITE_API_URL points at it, so we use that.
const apiBase = import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/` : ''

const productCategories = [
  'O-Rings',
  'Gaskets',
  'Rubber Bushes',
  'Industrial Hoses',
  'Rubber Sheets',
  'Rubber Washers',
  'Bellows',
  'Custom Moulded Parts',
  'Other / Not sure yet',
]

const quantityOptions = [
  '1 - 50',
  '51 - 500',
  '501 - 5,000',
  '5,000+',
  'To be discussed',
]

function RequestQuote() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const payload = {
      fullName: (data.get('fullName') || '').toString().trim(),
      company: (data.get('company') || '').toString().trim(),
      email: (data.get('email') || '').toString().trim(),
      phone: (data.get('phone') || '').toString().trim(),
      productInterest: (data.get('productInterest') || '').toString().trim(),
      quantity: (data.get('quantity') || '').toString().trim(),
      message: (data.get('message') || '').toString().trim(),
    }

    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch(apiBase + 'api/contact/quote', {
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
    <>
      <SEO
        title="Request a Quote | R-Tech Solutions"
        description="Request a custom quote from R-Tech Solutions for rubber gaskets, seals, hoses and moulded parts — share product, dimensions, material and quantity."
        path="/request-a-quote"
      />
    <main className="rq-page">

      {/* ================= HERO ================= */}
      <section className="rq-hero" aria-labelledby="rq-hero-title">
        <div className="rq-hero-rules" aria-hidden="true">
          <span className="rq-rule-h" />
          <span className="rq-tick rq-tick-tl" />
          <span className="rq-tick rq-tick-br" />
        </div>
        <div className="rq-hero-inner">
          <p className="rq-eyebrow">
            <span className="rq-eyebrow-bar" aria-hidden="true" />
            Request a Quote
          </p>
          <h1 id="rq-hero-title">
            Get a <span>Custom Quote</span> for Your Requirements.
          </h1>
          <p className="rq-lede">
            Tell us the product, dimensions, material, and quantity you need.
            Our engineering team will review your request and respond with
            pricing and lead-time details.
          </p>
        </div>
      </section>

      {/* ================= QUOTE FORM ================= */}
      <section className="rq-form-section" aria-labelledby="rq-form-title">
        <div className="rq-inner rq-form-grid">
          <div className="rq-form-side">
            <p className="rq-eyebrow">
              <span className="rq-eyebrow-bar" aria-hidden="true" />
              Quote Request
            </p>
            <h2 id="rq-form-title">
              Share your <span>specifications</span>
            </h2>
            <p className="rq-form-lede">
              Fields marked with an asterisk are required. The more detail you
              provide, the more accurate your quote will be.
            </p>

            <ul className="rq-form-points">
              {[
                'Product name or category',
                'Dimensions, material, and tolerance requirements',
                'Target quantity and delivery timeline',
              ].map((point) => (
                <li key={point}>
                  <Check aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            <form className="rq-form" onSubmit={handleSubmit}>
              {status === 'error' && (
                <p className="rq-form-status is-error" role="status">
                  <CircleAlert aria-hidden="true" />
                  {errorMessage}
                </p>
              )}
              {status === 'success' && (
                <p className="rq-form-status is-success" role="status">
                  <CircleCheck aria-hidden="true" />
                  Thank you — your quote request has been received. Our team
                  will follow up shortly.
                </p>
              )}

              <div className="rq-field-row">
                <div className="rq-field">
                  <label htmlFor="rq-full-name">
                    Full name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="rq-full-name"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="rq-field">
                  <label htmlFor="rq-company">Company name</label>
                  <input
                    id="rq-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div className="rq-field-row">
                <div className="rq-field">
                  <label htmlFor="rq-email">
                    Work email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="rq-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="rq-field">
                  <label htmlFor="rq-phone">Phone</label>
                  <input
                    id="rq-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="rq-field-row">
                <div className="rq-field">
                  <label htmlFor="rq-product">
                    Product of interest <span aria-hidden="true">*</span>
                  </label>
                  <div className="rq-select-wrap">
                    <select
                      id="rq-product"
                      name="productInterest"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a product
                      </option>
                      {productCategories.map((product) => (
                        <option key={product} value={product}>
                          {product}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="rq-field">
                  <label htmlFor="rq-quantity">Estimated quantity</label>
                  <div className="rq-select-wrap">
                    <select id="rq-quantity" name="quantity" defaultValue="">
                      <option value="" disabled>
                        Select a range
                      </option>
                      {quantityOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="rq-field">
                <label htmlFor="rq-message">
                  Requirements <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="rq-message"
                  name="message"
                  required
                  placeholder="Dimensions, material, application, tolerance, and delivery timeline"
                />
              </div>

              <button
                className="rq-btn rq-btn-red rq-form-submit"
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Request Quote'}
                <Send aria-hidden="true" />
              </button>

              <p className="rq-form-disclaimer">
                Your details are sent securely to our team and stored only to
                handle your request.
              </p>
            </form>
          </div>
          <aside className="rq-aside" aria-label="What happens next">
            <h3>What happens next</h3>
            <ol className="rq-steps">
              <li>
                <strong>We review your request</strong>
                <span>
                  Our engineers check the specifications, material, and
                  feasibility.
                </span>
              </li>
              <li>
                <strong>You receive a quote</strong>
                <span>
                  Pricing, lead time, and any technical clarifications — usually
                  within one business day.
                </span>
              </li>
              <li>
                <strong>We manufacture and deliver</strong>
                <span>
                  Approved orders move into production with quality checks at
                  every stage.
                </span>
              </li>
            </ol>

            <p className="rq-aside-note">
              Prefer to speak with us first?{' '}
              <Link to="/contact">Contact our team</Link> or browse the{' '}
              <Link to="/products">product range</Link>.
            </p>
          </aside>
        </div>
      </section>
    </main>
    </>
  )
}

export default RequestQuote