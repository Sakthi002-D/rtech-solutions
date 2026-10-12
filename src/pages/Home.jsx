import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Layers3, Settings, ShieldCheck, Wrench } from "lucide-react";

import gasketsImage from "../assets/images/product-gasket.png";
import industrialApplicationsImage from "../assets/images/industrial-appplication.png";
import sheetsImage from "../assets/images/product-sheets.jpg";
import customMouldedImage from "../assets/images/custom_moulded.png";
import oRingsImage from "../assets/images/product-o-rings.jpg";
import washersImage from "../assets/images/product-washers.jpg";
import hosesImage from "../assets/images/product-hoses.jpg";
import bushesImage from "../assets/images/product-bushes.jpg";
import bellowsImage from "../assets/images/product-bellows.jpg";

import gasketVideo from "../assets/images/product-gaskets.mp4.mp4";
import oRingsVideo from "../assets/images/product-o-rings.mp4.mp4";
import hosesVideo from "../assets/images/product-hoses.mp4.mp4";
import bellowsVideo from "../assets/images/product-bellows.mp4.mp4";

import { industries } from "../data/industries";

import "./Home.css";

const heroVideos = [
  {
    src: gasketVideo,
    title: "RUBBER GASKETS",
  },
  {
    src: oRingsVideo,
    title: "O-RINGS",
  },
  {
    src: hosesVideo,
    title: "RUBBER HOSES",
  },
  {
    src: bellowsVideo,
    title: "BELLOWS",
  },
];

const materials = [
  "Natural Rubber (NR)",
  "Nitrile Rubber (NBR)",
  "EPDM",
  "Silicone",
  "Viton / FKM",
  "Neoprene / CR",
  "Polyurethane",
  "PTFE",
];

const engineeringFeatures = [
  {
    icon: Settings,
    title: "Precision Components",
    description: "Designed for fit and performance",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Sealing",
    description: "Products for critical applications",
  },
  {
    icon: Layers3,
    title: "Wide Material Selection",
    description: "Suitable for different operating conditions",
  },
  {
    icon: Wrench,
    title: "Custom Engineering",
    description: "Solutions for specific requirements",
  },
];

const capabilities = [
  {
    title: "Precision Rubber Components",
    description:
      "Rubber components developed for fit, sealing and service requirements.",
  },
  {
    title: "Industrial Sealing Solutions",
    description:
      "Products for joints, connections, equipment and industrial systems.",
  },
  {
    title: "Custom-Moulded Components",
    description:
      "Moulded rubber parts shaped around specific application requirements.",
  },
  {
    title: "Polymer Material Solutions",
    description:
      "Material options selected according to operating conditions.",
  },
  {
    title: "Application-Focused Engineering",
    description:
      "Product selection guided by the intended application and requirements.",
  },
];

const homeProducts = [
  { slug: "rubber-gaskets", name: "Rubber Gaskets", image: gasketsImage },
  { slug: "o-rings", name: "O-Rings", image: oRingsImage },
  { slug: "rubber-washers-seals", name: "Rubber Washers & Seals", image: washersImage },
  { slug: "rubber-hoses", name: "Rubber Hoses", image: hosesImage },
  { slug: "rubber-bushes", name: "Rubber Bushes", image: bushesImage },
  { slug: "bellows", name: "Bellows", image: bellowsImage },
  { slug: "rubber-sheets", name: "Rubber Sheets", image: sheetsImage },
  {
    slug: "custom-moulded-components",
    name: "Custom-Moulded Rubber Components",
    image: customMouldedImage,
  },
];

// Optional per-industry photos: drop <slug>.jpg|jpeg|png|webp into
// src/assets/images/industries/ (e.g. oil-and-gas.jpg) and they are picked up automatically.
const industryPhotos = import.meta.glob(
  "../assets/images/industries/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

// The existing plant photo is relevant to these three sectors only.
const industryFallbacks = {
  "oil-and-gas": { src: industrialApplicationsImage, position: "20% 50%" },
  petrochemical: { src: industrialApplicationsImage, position: "55% 40%" },
  power: { src: industrialApplicationsImage, position: "90% 30%" },
};

function getIndustryImage(slug) {
  const match = Object.entries(industryPhotos).find(([path]) =>
    path.replace(/^.*\//, "").replace(/\.[^.]+$/, "").replace(/^\d+-/, "") === slug
  );

  if (match) return { src: match[1], position: "center" };

  return industryFallbacks[slug] || null;
}

function Home() {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeVideo) {
        video.currentTime = 0;

        const playPromise = video.play();

        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeVideo]);

  return (
    <main className="home-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="home-hero">

        <div className="home-hero-content">
          <p className="home-eyebrow">
            HIGH QUALITY <span>•</span> MADE IN INDIA
          </p>

          <h1>
            Engineered Rubber
            <span>&amp; Sealing Solutions</span>
          </h1>

          <p className="home-hero-text">
            High-quality rubber and sealing products designed for demanding
            industrial applications.
          </p>

          <div className="home-hero-actions">
            <Link
              to="/products"
              className="home-action home-action-primary"
            >
              Explore Products
              <span>→</span>
            </Link>

            <Link
              to="/request-a-quote"
              className="home-action home-action-outline"
            >
              Request a Quote
              <span>↗</span>
            </Link>
          </div>
        </div>

        {/* HERO VIDEO AREA */}
        <div className="home-hero-visual">

          <div className="home-hero-video-wrap">

            {heroVideos.map((video, index) => (
              <video
                key={video.title}
                ref={(element) => {
                  videoRefs.current[index] = element;
                }}
                className={`home-hero-video ${
                  index === activeVideo ? "is-active" : ""
                }`}
                src={video.src}
                muted
                playsInline
                preload="metadata"
                onEnded={() =>
                  setActiveVideo(
                    (current) => (current + 1) % heroVideos.length
                  )
                }
              />
            ))}

            <div className="home-video-overlay" />

            <div className="home-video-product">
              <span>R-TECH / 0{activeVideo + 1}</span>
              <strong>{heroVideos[activeVideo].title}</strong>
            </div>

          </div>

          <div className="home-video-progress">
            {heroVideos.map((video, index) => (
              <button
                key={video.title}
                type="button"
                className={index === activeVideo ? "active" : ""}
                onClick={() => setActiveVideo(index)}
                aria-label={`Show ${video.title}`}
                aria-current={index === activeVideo ? "true" : undefined}
              />
            ))}
          </div>

        </div>

        <div className="home-hero-footer">
          <span>R-TECH SOLUTIONS</span>
          <span>RUBBER &amp; POLYMER ENGINEERING</span>
          <span>
            0{activeVideo + 1} — 0{heroVideos.length}
          </span>
        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="home-editorial home-introduction">

        <figure className="home-editorial-image">
          <img
            src={gasketsImage}
            alt="Rubber gaskets for industrial sealing applications"
            loading="lazy"
          />

          <figcaption>
            <span>01</span>
            <span>ENGINEERING</span>
          </figcaption>
        </figure>

        <div className="home-editorial-copy">

          <p className="home-eyebrow">
            R-TECH SOLUTIONS
          </p>

          <h2>
            Rubber &amp;
            <span>Polymer Engineering</span>
          </h2>

          <p>
            R-Tech Solutions specializes in rubber and polymer engineering,
            supplying rubber and sealing products for demanding industrial
            applications.
          </p>

          <p className="home-secondary-text">
            We provide a comprehensive range of products including gaskets,
            O-rings, hoses, moulded components, sheets, and custom rubber parts.
          </p>

          <div className="home-engineering-features">
            {engineeringFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div className="home-engineering-feature" key={feature.title}>
                  <Icon aria-hidden="true" />
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Link to="/about" className="home-text-link home-solid-cta">
            DISCOVER R-TECH
            <span>→</span>
          </Link>

        </div>

      </section>


      {/* =====================================================
          ENGINEERED APPLICATIONS
      ===================================================== */}

      <section className="home-editorial home-capabilities">

        <div className="home-editorial-copy">

          <p className="home-eyebrow">
            ENGINEERED SOLUTIONS
          </p>

          <h2>
            Engineered for
            <span>Demanding Applications</span>
          </h2>

          <p className="home-secondary-text">
            R-Tech Solutions provides rubber and sealing products suited to
            different industrial applications and operating requirements.
          </p>

          <div className="home-capability-list">

            {capabilities.map((capability, index) => (
              <div
                className="home-capability-row"
                key={capability.title}
              >
                <span className="home-row-number">
                  0{index + 1}
                </span>

                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </div>
              </div>
            ))}

          </div>

        </div>

        <figure className="home-editorial-image">

          <img
            src={industrialApplicationsImage}
            alt="Industrial processing plant for demanding applications"
            loading="lazy"
          />

          <figcaption>
            <span>02</span>
            <span>COMPONENTS</span>
          </figcaption>

        </figure>

      </section>


      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <section className="home-products" aria-labelledby="home-products-title">

        <div className="home-products-header">
          <div>
            <p className="home-eyebrow">PRODUCT RANGE</p>

            <h2 id="home-products-title">
              Rubber &amp; Sealing
              <span>Product Categories</span>
            </h2>
          </div>

          <Link to="/products" className="home-text-link">
            VIEW ALL PRODUCTS
            <span>→</span>
          </Link>
        </div>

        <ul className="home-products-grid">
          {homeProducts.map((product, index) => (
            <li key={product.slug}>
              <Link
                to={`/products/${product.slug}`}
                className="home-product-card"
              >
                <span className="home-product-media">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />
                </span>

                <span className="home-product-info">
                  <span className="home-product-number">
                    0{index + 1}
                  </span>
                  <span className="home-product-name">{product.name}</span>
                  <span className="home-product-arrow" aria-hidden="true">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

      </section>


      {/* =====================================================
          MATERIALS
      ===================================================== */}

      <section className="home-editorial home-materials">

        <figure className="home-editorial-image">

          <img
            src={sheetsImage}
            alt="Industrial rubber sheet material"
            loading="lazy"
          />

          <figcaption>
            <span>03</span>
            <span>MATERIALS</span>
          </figcaption>

        </figure>

        <div className="home-editorial-copy">

          <p className="home-eyebrow">
            MATERIALS &amp; PERFORMANCE
          </p>

          <h2>
            Materials Selected
            <span>for Performance</span>
          </h2>

          <p className="home-secondary-text">
            R-Tech works with a range of rubber and polymer materials for
            different sealing, temperature and service requirements.
          </p>

          <div className="home-material-list">

            {materials.map((material, index) => (
              <div className="home-material-row" key={material}>
                <span className="home-row-number">
                  0{index + 1}
                </span>

                <span>{material}</span>
              </div>
            ))}

          </div>

          <Link to="/materials" className="home-text-link home-solid-cta">
            EXPLORE MATERIALS
            <span>→</span>
          </Link>

        </div>

      </section>


      {/* =====================================================
          CUSTOM ENGINEERING
      ===================================================== */}

      <section className="home-editorial home-custom">

        <div className="home-editorial-copy">

          <p className="home-eyebrow">
            CUSTOM ENGINEERING
          </p>

          <h2>
            Rubber Components
            <span>Built Around Your Application</span>
          </h2>

          <p>
            From standard sealing products to custom-moulded rubber
            components, R-Tech Solutions focuses on practical rubber
            solutions for industrial requirements.
          </p>

          <ul className="home-custom-points">
            <li>
              <span className="home-custom-icon" aria-hidden="true">
                <Settings />
              </span>
              <span className="home-custom-text">
                <span className="home-custom-num">01</span>
                <strong>Precision components</strong>
              </span>
            </li>
            <li>
              <span className="home-custom-icon" aria-hidden="true">
                <ShieldCheck />
              </span>
              <span className="home-custom-text">
                <span className="home-custom-num">02</span>
                <strong>Reliable sealing performance</strong>
              </span>
            </li>
            <li>
              <span className="home-custom-icon" aria-hidden="true">
                <Layers3 />
              </span>
              <span className="home-custom-text">
                <span className="home-custom-num">03</span>
                <strong>Application-specific requirements</strong>
              </span>
            </li>
          </ul>

          <Link to="/products" className="home-text-link home-custom-cta home-solid-cta">
            VIEW PRODUCTS
            <span>→</span>
          </Link>

        </div>

        <figure className="home-editorial-image">

          <img
            src={customMouldedImage}
            alt="Custom-moulded rubber components"
            loading="lazy"
          />

          <figcaption>
            <span>04</span>
            <span>CUSTOM COMPONENTS</span>
          </figcaption>

        </figure>

      </section>


      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section className="home-sectors" aria-labelledby="home-sectors-title">

        <div className="home-sectors-header">
          <div>
            <p className="home-eyebrow">INDUSTRIES</p>

            <h2 id="home-sectors-title">
              Serving Critical
              <span>Industrial Sectors</span>
            </h2>
          </div>

          <Link to="/industries" className="home-text-link">
            VIEW ALL INDUSTRIES
            <span>→</span>
          </Link>
        </div>

        <ul className="home-sectors-grid">
          {industries.map((industry, index) => {
            const image = getIndustryImage(industry.slug);

            return (
              <li
                className={`home-sector ${image ? "has-image" : ""}`}
                key={industry.slug}
              >
                {image && (
                  <div className="home-sector-media">
                    <img
                      className="home-sector-image"
                      src={image.src}
                      alt=""
                      loading="lazy"
                      style={{ objectPosition: image.position }}
                    />
                  </div>
                )}

                <div className="home-sector-body">
                  <span className="home-sector-number">
                    0{index + 1}
                  </span>

                  <div className="home-sector-head">
                    <h3>{industry.name}</h3>

                    <span className="home-sector-arrow" aria-hidden="true">→</span>
                  </div>

                  <p>{industry.description}</p>
                </div>
              </li>
            );
          })}
        </ul>

      </section>


    </main>
  );
}

export default Home;
