import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { materials } from "../data/materials";
import { products } from "../data/products";
import gasketsImage from "../assets/images/product-gasket.png";
import customMouldedImage from "../assets/images/custom_moulded.png";
import sheetsImage from "../assets/images/product-sheets.jpg";
import oRingsImage from "../assets/images/product-o-rings.jpg";
import washersImage from "../assets/images/product-washers.jpg";
import hosesImage from "../assets/images/product-hoses.jpg";
import bushesImage from "../assets/images/product-bushes.jpg";
import bellowsImage from "../assets/images/product-bellows.jpg";
import "./Products.css";

const productImages = {
  "rubber-gaskets": gasketsImage,
  "o-rings": oRingsImage,
  "rubber-washers-seals": washersImage,
  "rubber-hoses": hosesImage,
  "rubber-bushes": bushesImage,
  bellows: bellowsImage,
  "rubber-sheets": sheetsImage,
  "custom-moulded-components": customMouldedImage,
};

function Products() {
  return (
    <main className="pr2-page">
      <section className="pr2-hero" aria-labelledby="pr2-hero-title">
        <div className="pr2-hero-copy">
          <p className="pr2-eyebrow">Our Products</p>
          <h1 id="pr2-hero-title">
            Precision Rubber
            <br />
            &amp; <span>Sealing Solutions</span>
          </h1>
          <p className="pr2-lede">
            R-Tech Solutions offers rubber and polymer components for
            industrial sealing and application requirements.
          </p>
          <div className="pr2-actions">
            <a className="pr2-btn pr2-btn-red" href="#pr2-categories">
              Explore Products
            </a>
            <Link className="pr2-btn pr2-btn-outline" to="/request-a-quote">
              Request a Quote
            </Link>
          </div>
        </div>
        <div className="pr2-hero-media">
          <div className="pr2-collage" aria-hidden="true">
            <img className="pr2-collage-main" src={gasketsImage} alt="" fetchPriority="high" />
            <img src={oRingsImage} alt="" />
            <img src={bellowsImage} alt="" />
            <img className="pr2-collage-wide" src={customMouldedImage} alt="" />
          </div>
        </div>
      </section>

      <section className="pr2-categories" id="pr2-categories" aria-labelledby="pr2-cat-title">
        <div className="pr2-inner">
          <header className="pr2-head">
            <p className="pr2-eyebrow">Product Categories</p>
            <h2 id="pr2-cat-title">Rubber and sealing products</h2>
          </header>
          <ul className="pr2-grid">
            {products.map((product, index) => (
              <li key={product.slug}>
                <Link className="pr2-card" to={`/products/${product.slug}`}>
                  <span className="pr2-card-media">
                    <img src={productImages[product.slug]} alt={product.name} loading="lazy" />
                  </span>
                  <span className="pr2-card-body">
                    <span className="pr2-card-num">0{index + 1}</span>
                    <strong>{product.name}</strong>
                    <span className="pr2-card-desc">{product.shortDescription}</span>
                    <span className="pr2-card-link">
                      Explore Product <ArrowRight aria-hidden="true" />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pr2-materials" aria-labelledby="pr2-mat-title">
        <div className="pr2-inner pr2-materials-grid">
          <div className="pr2-mat-copy">
            <p className="pr2-eyebrow">Materials &amp; Applications</p>
            <h2 id="pr2-mat-title">
              Materials across the <span>product range</span>
            </h2>
            <p>
              Rubber and polymer materials selected to suit different sealing
              and industrial application requirements.
            </p>
            <Link className="pr2-btn pr2-btn-red" to="/materials">
              Explore Materials
            </Link>
          </div>
          <ul className="pr2-mat-list">
            {materials.map((material, index) => (
              <li key={material.slug}>
                <span>0{index + 1}</span>
                <strong>{material.name}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pr2-cta" aria-labelledby="pr2-cta-title">
        <div className="pr2-cta-inner">
          <div>
            <h2 id="pr2-cta-title">Need a Custom Rubber Solution?</h2>
            <p>
              Discuss your application requirements with us and explore
              custom-moulded rubber and sealing options.
            </p>
          </div>
          <Link className="pr2-btn pr2-btn-white" to="/request-a-quote">
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Products;
