import {
  BadgeCheck,
  ChevronRight,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import { industries } from "../data/industries";
import { products } from "../data/products";
import gasketsImage from "../assets/images/product-gasket.png";
import customMouldedImage from "../assets/images/custom_moulded.png";
import plantImage from "../assets/images/rtech-building.png";
import oilGasImage from "../assets/images/industries/01-oil-and-gas.jpg";
import petrochemicalImage from "../assets/images/industries/02-petrochemical.jpg";
import powerImage from "../assets/images/industries/03-power.jpg";
import automotiveImage from "../assets/images/industries/04-automotive.jpg";
import constructionImage from "../assets/images/industries/05-construction.jpg";
import waterImage from "../assets/images/industries/06-water-treatment.jpg";
import pharmaImage from "../assets/images/industries/07-pharmaceutical.jpg";
import foodImage from "../assets/images/industries/08-food-processing.jpg";
import "./About.css";

const industryImages = {
  "oil-and-gas": oilGasImage,
  petrochemical: petrochemicalImage,
  power: powerImage,
  automotive: automotiveImage,
  construction: constructionImage,
  "water-treatment": waterImage,
  pharmaceutical: pharmaImage,
  "food-processing": foodImage,
};

const heroFeatures = [
  { title: "Precision Components", icon: Target },
  { title: "Durable & Reliable", icon: ShieldCheck },
  { title: "Custom Engineering", icon: Wrench },
];

const values = [
  {
    title: "Quality First",
    icon: BadgeCheck,
    description:
      "A quality-first approach to rubber and sealing products for industrial requirements.",
  },
  {
    title: "Customer Focus",
    icon: Users,
    description:
      "Product and material choices considered around each customer's application.",
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    description:
      "Engineering solutions that respond to evolving industrial needs.",
  },
];

function About() {
  return (
    <main className="ab2-page">
      <section className="ab2-hero" aria-labelledby="ab2-hero-title">
        <div className="ab2-hero-copy">
          <p className="ab2-eyebrow">About Us</p>
          <h1 id="ab2-hero-title">
            Engineering
            <br />
            Reliable Rubber
            <br />
            <span>Solutions</span>
          </h1>
          <p className="ab2-lede">
            R-Tech Solutions specializes in rubber and polymer engineering,
            supplying rubber and sealing products for demanding industrial
            applications.
          </p>
          <div className="ab2-actions">
            <Link className="ab2-btn ab2-btn-red" to="/products">
              Our Products
            </Link>
            <Link className="ab2-btn ab2-btn-outline" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="ab2-hero-media">
          <img
            src={gasketsImage}
            alt="Industrial rubber gaskets and sealing components"
            fetchPriority="high"
          />
          <ul className="ab2-strip">
            {heroFeatures.map(({ title, icon: Icon }) => (
              <li key={title}>
                <Icon aria-hidden="true" />
                <strong>{title}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ab2-who" aria-labelledby="ab2-who-title">
        <figure className="ab2-who-image">
          <img
            src={plantImage}
            alt="R-Tech Solutions building"
            loading="lazy"
          />
        </figure>
        <div className="ab2-who-copy">
          <p className="ab2-eyebrow">Who We Are</p>
          <h2 id="ab2-who-title">About R-Tech Solutions</h2>
          <p>
            R-Tech Solutions specializes in rubber and polymer engineering,
            supplying rubber and sealing products for demanding industrial
            applications.
          </p>
          <p>
            The range covers sealing products, fluid transfer, vibration
            control, sheet materials and custom-moulded components, available
            across a variety of rubber and polymer materials.
          </p>
          <ul className="ab2-product-list">
            {products.map((product) => (
              <li key={product.slug}>
                <Link to={`/products/${product.slug}`}>
                  <ShieldCheck aria-hidden="true" />
                  <span>{product.name}</span>
                  <ChevronRight aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ab2-values" aria-labelledby="ab2-values-title">
        <div className="ab2-values-inner">
          <div className="ab2-values-head">
            <p className="ab2-eyebrow">Our Values</p>
            <h2 id="ab2-values-title">What Drives Us</h2>
          </div>
          <div className="ab2-values-grid">
            {values.map(({ title, description, icon: Icon }) => (
              <article className="ab2-value-card" key={title}>
                <span className="ab2-value-icon">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ab2-industries" aria-labelledby="ab2-ind-title">
        <div className="ab2-industries-inner">
          <div className="ab2-ind-copy">
            <p className="ab2-eyebrow">Industries We Serve</p>
            <h2 id="ab2-ind-title">
              Solutions for <span>Diverse Industries</span>
            </h2>
            <p>
              Rubber and sealing products for a range of industrial
              applications.
            </p>
          </div>
          <ul className="ab2-ind-row">
            {industries.map((industry) => (
              <li key={industry.slug}>
                <Link className="ab2-ind-card" to="/industries">
                  <img
                    src={industryImages[industry.slug]}
                    alt=""
                    loading="lazy"
                  />
                  <strong>{industry.name}</strong>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ab2-cta" aria-labelledby="ab2-cta-title">
        <img src={customMouldedImage} alt="" loading="lazy" />
        <div className="ab2-cta-inner">
          <div>
            <h2 id="ab2-cta-title">
              Let&apos;s Build a Stronger, More Reliable Future Together
            </h2>
            <p>
              Talk to us about customised rubber and polymer solutions for your
              application.
            </p>
          </div>
          <Link className="ab2-btn ab2-btn-white" to="/request-a-quote">
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;
