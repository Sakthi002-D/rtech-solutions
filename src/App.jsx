import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Materials from './pages/Materials.jsx'
import Industries from './pages/Industries.jsx'
import TechnicalInformation from './pages/TechnicalInformation.jsx'
import Contact from './pages/Contact.jsx'
import RequestQuote from './pages/RequestQuote.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productSlug" element={<ProductDetails />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/industries" element={<Industries />} />
          <Route
            path="/technical-information"
            element={<TechnicalInformation />}
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
