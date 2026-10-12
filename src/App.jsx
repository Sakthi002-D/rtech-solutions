import { useEffect, useRef } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Materials from './pages/Materials.jsx'
import Industries from './pages/Industries.jsx'
import Manufacturing from './pages/Manufacturing.jsx'
import Contact from './pages/Contact.jsx'
import RequestQuote from './pages/RequestQuote.jsx'
import './App.css'

// True only when the current document was loaded by a hard browser refresh
// (F5, Ctrl+R or the refresh button). A first visit reports "navigate" and
// history traversal reports "back_forward", so ordinary link clicks never
// look like a refresh.
function isBrowserRefresh() {
  if (typeof performance === 'undefined') return false
  if (typeof performance.getEntriesByType === 'function') {
    const entry = performance.getEntriesByType('navigation')[0]
    if (entry) return entry.type === 'reload'
  }
  return performance.navigation?.type === 1
}

// Sends the visitor back to Home whenever the current document was opened by
// a browser refresh, then scrolls Home to the very top. The refresh check runs
// once per document and redirects at most one time (replace, client-side), so
// normal navigation, product detail routes, back/forward history and the
// navbar/footer keep working without loops or full-page reloads.
function RefreshRedirect() {
  const location = useLocation()
  const navigate = useNavigate()
  const isRefresh = useRef(null)
  const hasRedirected = useRef(false)

  if (isRefresh.current === null) {
    isRefresh.current = isBrowserRefresh()
  }

  useEffect(() => {
    if (!isRefresh.current) return

    if (location.pathname !== '/') {
      if (!hasRedirected.current) {
        hasRedirected.current = true
        navigate('/', { replace: true })
      }
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, navigate])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <RefreshRedirect />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productSlug" element={<ProductDetails />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/industries" element={<Industries />} />
          <Route
            path="/manufacturing"
            element={<Manufacturing />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-a-quote" element={<RequestQuote />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
