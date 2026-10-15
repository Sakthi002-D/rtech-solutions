import {
  ArrowRight,
  Droplets,
  FlaskConical,
  Gauge,
  Thermometer,
} from "lucide-react";
import { Link } from "react-router-dom";
import { materials } from "../data/materials";
import { products } from "../data/products";
import gasketsImage from "../assets/images/product-gasket.png";
import customMouldedImage from "../assets/images/custom_moulded.png";
import rubberSheetsImage from "../assets/images/rubber_sheets.png";
import oRingsImage from "../assets/images/product-o-rings.jpg";
import washersImage from "../assets/images/product-washers.jpg";
import hosesImage from "../assets/images/product-hoses.jpg";
import bellowsImage from "../assets/images/product-bellows.jpg";
import "./Materials.css";
import SEO from "../components/SEO.jsx";

const productImages = {
  "rubber-gaskets": gasketsImage,
  "o-rings": oRingsImage,
  "rubber-washers-seals": washersImage,
  "rubber-hoses": hosesImage,
  bellows: bellowsImage,
  "custom-moulded-components": customMouldedImage,
};

const applicationSlugs = [
  "rubber-gaskets",
  "o-rings",
  "rubber-hoses",
  "rubber-washers-seals",
  "bellows",
  "custom-moulded-components",
];

const factors = [
  {
    title: "Operating temperature",
    icon: Thermometer,
    text: "The temperature range of the application influences which rubber or polymer material is suitable.",
  },
  {
    title: "Oils & chemicals",
    icon: FlaskConical,
    text: "Contact with oils, fuels or chemicals should be considered when selecting a material.",
  },
  {
    title: "Environmental conditions",
    icon: Droplets,
    text: "Weather, water, steam and outdoor exposure all play a part in material choice.",
  },
  {
    title: "Sealing requirements",
    icon: Gauge,
    text: "Pressure, movement, wear and the type of sealing product help define the right compound.",
  },
];

function getAbbreviation(name) {
  const match = name.match(/\(([^)]+)\)/);
  if (match) return match[1];
  return name;
}

function getTitle(name) {
  return name.replace(/\s*\([^)]*\)/, "");
}

function Materials() {
  const applications = applicationSlugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter(Boolean);

  return (
    <>
      <SEO
        title="Rubber Materials | R-Tech Solutions"
        description="Compare rubber materials from R-Tech Solutions — NR, NBR, EPDM, silicone, Viton, neoprene and more — matched to temperature, oils, chemicals and sealing needs."
        path="/materials"
      />
    <main className="mt2-page">
      <section className="mt2-hero" aria-labelledby="mt2-hero-title">
        <div className="mt2-hero-copy">
          <p className="mt2-eyebrow">Materials &amp; Performance</p>
          <h1 id="mt2-hero-title">
            The Right Material
            <br />
            for <span>Every Application</span>
          </h1>
          <p className="mt2-lede">
            Selecting a rubber or polymer material depends on the operating
            conditions, sealing requirements and needs of the application.
          </p>
          <div className="mt2-actions">
            <a className="mt2-btn mt2-btn-red" href="#mt2-materials">
              Explore Materials
            </a>
            <Link className="mt2-btn mt2-btn-outline" to="/request-a-quote">
              Request a Quote
            </Link>
          </div>
        </div>
        <div className="mt2-collage" aria-hidden="true">
          <img className="mt2-collage-main" src={rubberSheetsImage} alt="" fetchPriority="high" />
          <img src={oRingsImage} alt="" />
          <img src={gasketsImage} alt="" />
          <img className="mt2-collage-wide" src={customMouldedImage} alt="" />
        </div>
      </section>

      <section className="mt2-materials" id="mt2-materials" aria-labelledby="mt2-mat-title">
        <div className="mt2-inner">
          <header className="mt2-head">
            <p className="mt2-eyebrow">Material Categories</p>
            <h2 id="mt2-mat-title">Available rubber and polymer materials</h2>
          </header>
          <ul className="mt2-grid">
            {materials.map((material, index) => (
              <li key={material.slug}>
                <article className="mt2-card">
                  <span className="mt2-card-num">0{index + 1}</span>
                  <span className="mt2-card-abbr">{getAbbreviation(material.name)}</span>
                  <h3>{getTitle(material.name)}</h3>
                  <p>{material.description}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt2-select" aria-labelledby="mt2-select-title">
        <div className="mt2-inner mt2-select-grid">
          <div className="mt2-select-copy">
            <p className="mt2-eyebrow">Material Selection</p>
            <h2 id="mt2-select-title">
              Choosing the <span>Right Material</span>
            </h2>
            <p>
              Consider these factors when discussing your application with
              us. Our team can help you review the options.
            </p>
          </div>
          <ul className="mt2-factors">
            {factors.map(({ title, text, icon: Icon }) => (
              <li key={title}>
                <span className="mt2-factor-icon">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt2-apps" aria-labelledby="mt2-apps-title">
        <div className="mt2-inner">
          <header className="mt2-head mt2-head-row">
            <div>
              <p className="mt2-eyebrow">Industrial Applications</p>
              <h2 id="mt2-apps-title">Materials across our product range</h2>
            </div>
            <Link className="mt2-text-link" to="/products">
              View all products <ArrowRight aria-hidden="true" />
            </Link>
          </header>
          <ul className="mt2-apps-grid">
            {applications.map((product) => (
              <li key={product.slug}>
                <Link className="mt2-app" to={`/products/${product.slug}`}>
                  <span className="mt2-app-media">
                    <img src={productImages[product.slug]} alt={product.name} loading="lazy" />
                  </span>
                  <span className="mt2-app-body">
                    <strong>{product.name}</strong>
                    <ArrowRight aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt2-cta" aria-labelledby="mt2-cta-title">
        <div className="mt2-cta-inner">
          <div>
            <h2 id="mt2-cta-title">Need Help Selecting a Material?</h2>
            <p>
              Discuss your application requirements with us and explore
              suitable rubber and polymer material options.
            </p>
          </div>
          <Link className="mt2-btn mt2-btn-white" to="/request-a-quote">
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}

export default Materials;
