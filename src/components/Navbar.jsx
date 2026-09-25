import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/rtech-logo.png'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Materials', to: '/materials' },
  { label: 'Industries', to: '/industries' },
  { label: 'Technical Information', to: '/technical-information' },
  { label: 'Contact', to: '/contact' },
]

const products = [
  { label: 'Rubber Gaskets', slug: 'rubber-gaskets' },
  { label: 'O-Rings', slug: 'o-rings' },
  { label: 'Rubber Washers & Seals', slug: 'rubber-washers-seals' },
  { label: 'Rubber Hoses', slug: 'rubber-hoses' },
  { label: 'Rubber Bushes', slug: 'rubber-bushes' },
  { label: 'Bellows', slug: 'bellows' },
  { label: 'Rubber Sheets', slug: 'rubber-sheets' },
  { label: 'Custom-Moulded Rubber Components', slug: 'custom-moulded-components' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  useEffect(() => {
    function closeWithEscape(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setProductsOpen(false)
      }
    }

    document.addEventListener('keydown', closeWithEscape)
    return () => document.removeEventListener('keydown', closeWithEscape)
  }, [])

  function closeMenus() {
    setMenuOpen(false)
    setProductsOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink className="brand" to="/" onClick={closeMenus}>
          <img className="brand-logo" src={logo} alt="R-Tech Solutions" />
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`main-navigation ${menuOpen ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          <div className="navigation-links">
            {links.slice(0, 2).map((link) => (
              <NavLink
                key={link.to}
                className={({ isActive }) => (isActive ? 'active' : '')}
                to={link.to}
                end={link.to === '/'}
                onClick={closeMenus}
              >
                {link.label}
              </NavLink>
            ))}

            <div className="products-navigation">
              <div className="products-trigger">
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to="/products"
                  onClick={closeMenus}
                >
                  Products
                </NavLink>
                <button
                  className="dropdown-toggle"
                  type="button"
                  aria-expanded={productsOpen}
                  aria-controls="products-menu"
                  aria-label="Toggle products menu"
                  onClick={() => setProductsOpen((isOpen) => !isOpen)}
                >
                  <span aria-hidden="true" />
                </button>
              </div>

              <div
                id="products-menu"
                className={`products-menu ${productsOpen ? 'is-open' : ''}`}
              >
                {products.map((product) => (
                  <NavLink
                    key={product.slug}
                    to={`/products/${product.slug}`}
                    onClick={closeMenus}
                  >
                    {product.label}
                  </NavLink>
                ))}
              </div>
            </div>

            {links.slice(2).map((link) => (
              <NavLink
                key={link.to}
                className={({ isActive }) => (isActive ? 'active' : '')}
                to={link.to}
                onClick={closeMenus}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <NavLink
            className="quote-button"
            to="/request-a-quote"
            onClick={closeMenus}
          >
            Get a Quote
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar