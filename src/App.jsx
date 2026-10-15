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
import NotFound from './pages/NotFound.jsx'
import ScrollToTop from './components/ScrollToTop.jsx';
import Navbar from './components/Navbar.jsx';

import './App.css'

function App() {



  return (
    <HelmetProvider>
    <BrowserRouter>
      <div className="site-shell">
        <ScrollToTop />

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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
