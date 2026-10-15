import { useEffect, useRef } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  ClipboardCheck,
  Cog,
  Factory,
  FlaskConical,
  Gauge,
  Layers,
  Ruler,
  Scissors,
  ShieldCheck,
  Target,
  Wrench,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { materials } from '../data/materials'
import factoryVideo from '../assets/images/industries/r-tech-industries.mp4'
import customMouldedImage from '../assets/images/custom_moulded.png'
import gasketsVideo from '../assets/images/product-gaskets.mp4.mp4'
import gasketsPoster from '../assets/images/product-gasket.png'
import oRingsVideo from '../assets/images/product-o-rings.mp4.mp4'
import oRingsPoster from '../assets/images/product-o-rings.jpg'
import hosesVideo from '../assets/images/product-hoses.mp4.mp4'
import hosesPoster from '../assets/images/product-hoses.jpg'
import bellowsVideo from '../assets/images/product-bellows.mp4.mp4'
import bellowsPoster from '../assets/images/product-bellows.jpg'
import './Manufacturing.css'
import SEO from '../components/SEO.jsx'

const productIcons = {
  'rubber-gaskets': Layers,
  'o-rings': Target,
  'rubber-washers-seals': Boxes,
  'rubber-hoses': Gauge,
  'rubber-bushes': Cog,
  bellows: Scissors,
  'rubber-sheets': Ruler,
  'custom-moulded-components': FlaskConical,
}

const heroPoints = [
  'Prototype to production supply',
  'Eight rubber and polymer materials',
  'Custom-moulded components',
]

const processSteps = [
  {
    num: '01',
    title: 'Requirement & Material Selection',
    description:
      'Each application is reviewed to select the rubber or polymer suited to its service conditions.',
    icon: ClipboardCheck,
  },
  {
    num: '02',
    title: 'Design & Prototyping',
    description:
      'Custom-moulded parts are developed from drawings and dimensions through to working samples.',
    icon: Wrench,
  },
  {
    num: '03',
    title: 'Moulding & Production',
    description:
      'Components are produced to the agreed specification, from prototype runs to repeat supply.',
    icon: Factory,
  },
  {
    num: '04',
    title: 'Quality & Specification Checks',
    description:
      'Dimensions, material, and finish are verified against the required specification before dispatch.',
    icon: ShieldCheck,
  },
]

const videoShowcase = [
  { id: 'gaskets', title: 'Rubber Gaskets', video: gasketsVideo, poster: gasketsPoster },
  { id: 'o-rings', title: 'O-Rings', video: oRingsVideo, poster: oRingsPoster },
  { id: 'hoses', title: 'Rubber Hoses', video: hosesVideo, poster: hosesPoster },
  { id: 'bellows', title: 'Bellows', video: bellowsVideo, poster: bellowsPoster },
]

const sheetSpecs = [
  { label: 'Thickness', value: '0.5 – 50 mm' },
  { label: 'Hardness', value: '40 – 90 Shore A' },
  { label: 'Available finishes', value: 'Smooth, Fabric, Coin' },
  { label: 'Temperature range', value: 'Depends on the selected polymer' },
]

const standards = ['AS568', 'ISO 3601', 'BS sizes']

function Manufacturing() {
  const heroVideoRef = useRef(null)

  useEffect(() => {
    const video = heroVideoRef.current
    if (!video) return undefined

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => {
      if (media.matches) {
        video.pause()
      } else {
        video.play().catch(() => {})
      }
    }

    apply()
    media.addEventListener('change', apply)
    return () => media.removeEventListener('change', apply)
  }, [])

  return (
    <>
      <SEO
        title="Rubber Manufacturing | R-Tech Solutions"
        description="Inside R-Tech Solutions rubber manufacturing — material selection, custom moulding, prototyping, production and quality checks for precision sealing parts."
        path="/manufacturing"
      />
    <main className="mf-page">
      {/* ================= HERO ================= */}
      <section className="mf-hero" aria-labelledby="mf-hero-title">
        <div className="mf-hero-inner">
          <div className="mf-hero-copy">
            <p className="mf-eyebrow mf-eyebrow-light">
              <span className="mf-eyebrow-bar" aria-hidden="true" />
              Manufacturing
            </p>
            <h1 id="mf-hero-title">
              Precision Rubber
              <span>Manufacturing</span>
            </h1>
            <p className="mf-hero-lede">
              From material selection to finished components, R-Tech Solutions
              manufactures rubber and sealing products for demanding industrial
              applications.
            </p>
            <ul className="mf-hero-points">
              {heroPoints.map((point) => (
                <li key={point}>
                  <ShieldCheck aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mf-actions">
              <Link className="mf-btn mf-btn-red" to="/products">
                Explore Products
                <ArrowRight aria-hidden="true" />
              </Link>
              <Link className="mf-btn mf-btn-ghost" to="/request-a-quote">
                Request a Quote
              </Link>
            </div>
          </div>
          <div className="mf-hero-media">
            <video
              ref={heroVideoRef}
              className="mf-hero-video"
              src={factoryVideo}
              autoPlay
              muted
              loop
              playsInline
              aria-label="R-Tech Solutions factory and production floor"
            />
          </div>
        </div>
      </section>

      {/* ================= WHAT WE MANUFACTURE ================= */}
      <section className="mf-products" aria-labelledby="mf-products-title">
        <div className="mf-inner">
          <header className="mf-head">
            <p className="mf-eyebrow">
              <span className="mf-eyebrow-bar" aria-hidden="true" />
              Our Product Range
            </p>
            <h2 id="mf-products-title">
              What We <span>Manufacture</span>
            </h2>
            <p className="mf-head-lede">
              Rubber and sealing products engineered for sealing, fluid transfer,
              vibration control, and custom-moulded applications.
            </p>
          </header>

          <ul className="mf-products-grid">
            {products.map((product) => {
              const Icon = productIcons[product.slug]
              return (
                <li key={product.slug}>
                  <Link className="mf-product-card" to={`/products/${product.slug}`}>
                    <span className="mf-product-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span className="mf-product-body">
                      <span className="mf-product-cat">{product.category}</span>
                      <strong>{product.name}</strong>
                    </span>
                    <span className="mf-product-arrow" aria-hidden="true">
                      <ArrowUpRight />
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* ================= MATERIALS WE PROCESS ================= */}
      <section className="mf-materials" aria-labelledby="mf-materials-title">
        <div className="mf-inner">
          <header className="mf-head mf-head-light">
            <p className="mf-eyebrow mf-eyebrow-light">
              <span className="mf-eyebrow-bar" aria-hidden="true" />
              Materials
            </p>
            <h2 id="mf-materials-title">
              Materials We <span>Process</span>
            </h2>
            <p className="mf-head-lede">
              Components are produced across a range of rubber and polymer
              materials matched to each application.
            </p>
          </header>

          <ul className="mf-materials-grid">
            {materials.map((material) => (
              <li key={material.slug} className="mf-material-card">
                <span className="mf-material-mark" aria-hidden="true">
                  <FlaskConical />
                </span>
                <div>
                  <strong>{material.name}</strong>
                  <p>{material.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= FROM PROTOTYPE TO PRODUCTION ================= */}
      <section className="mf-process" aria-labelledby="mf-process-title">
        <div className="mf-inner mf-process-grid">
          <figure className="mf-process-media">
            <img
              src={customMouldedImage}
              alt="Custom-moulded rubber components produced by R-Tech Solutions"
              loading="lazy"
            />
            <figcaption className="mf-process-badge">
              <span className="mf-process-badge-icon" aria-hidden="true">
                <Wrench />
              </span>
              <span className="mf-process-badge-text">
                <strong>Custom-Moulded Components</strong>
                <span>Prototype to repeat production supply</span>
              </span>
            </figcaption>
          </figure>

          <div className="mf-process-content">
            <p className="mf-eyebrow">
              <span className="mf-eyebrow-bar" aria-hidden="true" />
              Our Process
            </p>
            <h2 id="mf-process-title">
              From Prototype <span>to Production</span>
            </h2>
            <p className="mf-process-lede">
              A structured approach that moves each requirement from initial
              specification through to reliable, repeatable supply.
            </p>

            <ol className="mf-process-list">
              {processSteps.map((step) => (
                <li key={step.num}>
                  <span className="mf-process-num">{step.num}</span>
                  <span className="mf-process-icon" aria-hidden="true">
                    <step.icon />
                  </span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ================= IN PRODUCTION ================= */}
      <section className="mf-production" aria-labelledby="mf-production-title">
        <div className="mf-inner">
          <header className="mf-head mf-head-light">
            <p className="mf-eyebrow mf-eyebrow-light">
              <span className="mf-eyebrow-bar" aria-hidden="true" />
              In Production
            </p>
            <h2 id="mf-production-title">
              Products <span>In Production</span>
            </h2>
            <p className="mf-head-lede">
              A closer look at the components we manufacture across our core
              product families.
            </p>
          </header>

          <div className="mf-production-grid">
            {videoShowcase.map((item) => (
              <figure className="mf-video-card" key={item.id}>
                <video
                  className="mf-video"
                  src={item.video}
                  poster={item.poster}
                  controls
                  muted
                  preload="metadata"
                  playsInline
                />
                <figcaption>
                  <span className="mf-video-bar" aria-hidden="true" />
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUALITY & SPECIFICATIONS ================= */}
      <section className="mf-quality" aria-labelledby="mf-quality-title">
        <div className="mf-inner mf-quality-grid">
          <div className="mf-quality-copy">
            <p className="mf-eyebrow">
              <span className="mf-eyebrow-bar" aria-hidden="true" />
              Quality &amp; Specifications
            </p>
            <h2 id="mf-quality-title">
              Built to <span>Specification</span>
            </h2>
            <p>
              Standard specification ranges for our industrial rubber sheet,
              together with the standards referenced when sizing and selecting
              sealing components.
            </p>

            <div className="mf-spec-panel">
              <div className="mf-spec-panel-head">
                <Ruler aria-hidden="true" />
                <div>
                  <h3>Rubber Sheet</h3>
                  <p>Standard specification reference</p>
                </div>
              </div>
              <table className="mf-spec-table">
                <tbody>
                  {sheetSpecs.map((spec) => (
                    <tr key={spec.label}>
                      <th scope="row">{spec.label}</th>
                      <td>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mf-standards">
            <p className="mf-standards-title">Referenced Standards</p>
            <p className="mf-standards-note">
              Used as size references when specifying O-rings and related
              sealing components.
            </p>
            <ul className="mf-standards-list">
              {standards.map((standard, index) => (
                <li key={standard}>
                  <span className="mf-standards-num">0{index + 1}</span>
                  <strong>{standard}</strong>
                  <span className="mf-standards-tag">Sizing &amp; selection</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mf-cta" aria-labelledby="mf-cta-title">
        <div className="mf-inner mf-cta-inner">
          <div className="mf-cta-copy">
            <p className="mf-eyebrow mf-eyebrow-light">
              <span className="mf-eyebrow-bar" aria-hidden="true" />
              Let&apos;s Work Together
            </p>
            <h2 id="mf-cta-title">
              Ready to manufacture <span>your components?</span>
            </h2>
            <p>
              Talk to us about your dimensions, materials, and volume
              requirements for a tailored manufacturing solution.
            </p>
          </div>
          <Link className="mf-btn mf-btn-white" to="/request-a-quote">
            Request a Quote
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
    </>
  )
}

export default Manufacturing
