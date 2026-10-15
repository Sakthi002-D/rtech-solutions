import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import ScrollToTop from './components/ScrollToTop.jsx';
import Navbar from './components/Navbar.jsx';

import './App.css'
// Detects a hard browser refresh (F5 / Ctrl+R / browser refresh button) and
// redirects to the Home page. A client-side navigation (link click or
// useNavigate) never reports "reload", so this only fires on true page
// refreshes and never interferes with normal navigation or history
// traversal. The redirect uses window.location.replace to avoid stacking
// duplicate history entries.
function RefreshRedirect() {
  const isReload = typeof window !== 'undefined' &&
    typeof performance !== 'undefined' &&
    typeof performance.getEntriesByType === 'function' &&
    performance.getEntriesByType('navigation')[0]?.type === 'reload'

  if (isReload) {
    window.location.replace('/')
    return null
  }

  return null
}


function App() {



  return (
    <HelmetProvider>
    <BrowserRouter>
      <div className="site-shell">
        <ScrollToTop />
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
    </HelmetProvider>
  )
}

export default App
