import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import './ProductDetails.css'

function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | R-Tech Solutions"
        description="The page you are looking for could not be found. Return to the R-Tech Solutions home page or browse rubber products and contact our team."
        path="/404"
      />
      <main className="pd-page">
        <div className="pd-not-found">
          <p className="pd-kicker">404 — Page not found</p>
          <h1>Page not found</h1>
          <p className="pd-lede">
            The page you are looking for does not exist or has moved. Return
            to the home page, browse the product range, or contact our team
            for help.
          </p>
          <div className="pd-cta-actions">
            <Link className="pd-btn pd-btn-red" to="/">
              Home
            </Link>
            <Link className="pd-btn pd-btn-outline" to="/products">
              Products
            </Link>
            <Link className="pd-btn pd-btn-outline" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default NotFound
