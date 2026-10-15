import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { products } from '../data/products'
import gasketsImage from '../assets/images/product-gasket.png'
import customMouldedImage from '../assets/images/custom_moulded.png'
import sheetsImage from '../assets/images/product-sheets.jpg'
import oRingsImage from '../assets/images/product-o-rings.jpg'
import washersImage from '../assets/images/product-washers.jpg'
import hosesImage from '../assets/images/product-hoses.jpg'
import bushesImage from '../assets/images/product-bushes.jpg'
import bellowsImage from '../assets/images/product-bellows.jpg'
import './ProductDetails.css'
import SEO from '../components/SEO.jsx'

const productImages = {
  'rubber-gaskets': gasketsImage,
  'o-rings': oRingsImage,
  'rubber-washers-seals': washersImage,
  'rubber-hoses': hosesImage,
  'rubber-bushes': bushesImage,
  bellows: bellowsImage,
  'rubber-sheets': sheetsImage,
  'custom-moulded-components': customMouldedImage,
}

function hasItems(list) {
  return Array.isArray(list) && list.length > 0
}

function ProductDetails() {
  const { productSlug } = useParams()
  const product = products.find((item) => item.slug === productSlug)

  if (!product) {
    return (
      <>
        <SEO
          title="Product Not Found | R-Tech Solutions"
          description="The requested rubber product was not found. Browse R-Tech Solutions gaskets, seals, hoses and custom-moulded components."
          path="/products"
        />
      <main className="pd-page">
        <div className="pd-not-found">
          <p className="pd-kicker">Product details</p>
          <h1>Product not found</h1>
          <p className="pd-lede">
            The product you are looking for is unavailable. Browse the full
            range to find what you need.
          </p>
          <Link className="pd-btn pd-btn-red" to="/products">
            Back to products <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </main>
      </>
    )
  }

  const image = productImages[product.slug]

  return (
    <>
      <SEO
        title={`${product.name} | R-Tech Solutions`}
        description={product.shortDescription || `Explore ${product.name} from R-Tech Solutions — engineered rubber and sealing performance for industrial applications.`}
        path={`/products/${product.slug}`}
      />
    <main className="pd-page">
      <section className="pd-hero" aria-labelledby="pd-title">
        <div className="pd-hero-copy">
          <nav className="pd-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/products">Products</Link>
            <span aria-hidden="true">/</span>
            <span className="pd-breadcrumb-current">{product.name}</span>
          </nav>

          <p className="pd-kicker">{product.category}</p>
          <h1 id="pd-title">{product.name}</h1>
          <p className="pd-lede">{product.shortDescription}</p>

          <div className="pd-hero-actions">
            <Link className="pd-btn pd-btn-red" to="/request-a-quote">
              Request a Quote <ArrowRight aria-hidden="true" />
            </Link>
            <Link className="pd-btn pd-btn-outline" to="/contact">
              Talk to our team
            </Link>
          </div>
        </div>

        {image ? (
          <div className="pd-hero-media">
            <img
              className="pd-hero-image"
              src={image}
              alt={`${product.name} supplied by R-Tech Solutions`}
              fetchPriority="high"
            />
          </div>
        ) : null}
      </section>

      <div className="pd-container">
        {product.overview ? (
          <section className="pd-section pd-overview" aria-labelledby="pd-overview-title">
            <p className="pd-section-kicker">Overview</p>
            <h2 id="pd-overview-title">About {product.name}</h2>
            <p className="pd-body">{product.overview}</p>
          </section>
        ) : null}

        {hasItems(product.keyFeatures) ? (
          <section className="pd-section" aria-labelledby="pd-features-title">
            <p className="pd-section-kicker">Why choose it</p>
            <h2 id="pd-features-title">Key Features</h2>
            <ul className="pd-feature-grid">
              {product.keyFeatures.map((feature) => (
                <li key={feature}>
                  <span className="pd-check" aria-hidden="true">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {hasItems(product.types) ? (
          <section className="pd-section" aria-labelledby="pd-types-title">
            <p className="pd-section-kicker">Range</p>
            <h2 id="pd-types-title">Types &amp; Variants</h2>
            <ul className="pd-chip-grid">
              {product.types.map((type) => (
                <li key={type} className="pd-chip">
                  {type}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {hasItems(product.materials) ? (
          <section className="pd-section" aria-labelledby="pd-materials-title">
            <p className="pd-section-kicker">Compounds</p>
            <h2 id="pd-materials-title">Available Materials</h2>
            <ul className="pd-material-grid">
              {product.materials.map((material) => (
                <li key={material} className="pd-material-card">
                  <span className="pd-material-dot" aria-hidden="true" />
                  {material}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {hasItems(product.sizes) ? (
          <section className="pd-section" aria-labelledby="pd-sizes-title">
            <p className="pd-section-kicker">Dimensions</p>
            <h2 id="pd-sizes-title">Sizes &amp; Specifications</h2>
            <ul className="pd-list">
              {product.sizes.map((size) => (
                <li key={size}>{size}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {hasItems(product.technicalInfo) ? (
          <section className="pd-section pd-tech" aria-labelledby="pd-tech-title">
            <p className="pd-section-kicker">Data required</p>
            <h2 id="pd-tech-title">Technical Information</h2>
            <ul className="pd-list">
              {product.technicalInfo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {hasItems(product.applications) ? (
          <section className="pd-section" aria-labelledby="pd-apps-title">
            <p className="pd-section-kicker">Where it is used</p>
            <h2 id="pd-apps-title">Industrial Applications</h2>
            <ul className="pd-chip-grid">
              {product.applications.map((application) => (
                <li key={application} className="pd-chip">
                  {application}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {hasItems(product.customization) ? (
          <section className="pd-section" aria-labelledby="pd-custom-title">
            <p className="pd-section-kicker">Tailored to you</p>
            <h2 id="pd-custom-title">Customization Options</h2>
            <ul className="pd-list">
              {product.customization.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="pd-cta" aria-labelledby="pd-cta-title">
          <div className="pd-cta-copy">
            <h2 id="pd-cta-title">Need {product.name} for your application?</h2>
            <p>
              Send us your drawings, samples, or specifications and our team
              will recommend the right material and dimensions for your
              requirements.
            </p>
          </div>
          <div className="pd-cta-actions">
            <Link className="pd-btn pd-btn-red" to="/request-a-quote">
              Request a Quote <ArrowRight aria-hidden="true" />
            </Link>
            <Link className="pd-btn pd-btn-ghost" to="/products">
              Back to all products
            </Link>
          </div>
        </section>
      </div>
    </main>
    </>
  )
}

export default ProductDetails