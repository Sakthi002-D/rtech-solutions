import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Layers3, Settings, ShieldCheck, Wrench } from "lucide-react";

import gasketsImage from "../assets/images/product-gasket.png";
import industrialApplicationsImage from "../assets/images/industrial-appplication.png";
import sheetsImage from "../assets/images/product-sheets.jpg";
import customMouldedImage from "../assets/images/custom_moulded.png";

import gasketVideo from "../assets/images/product-gaskets.mp4.mp4";
import oRingsVideo from "../assets/images/product-o-rings.mp4.mp4";
import hosesVideo from "../assets/images/product-hoses.mp4.mp4";
import bellowsVideo from "../assets/images/product-bellows.mp4.mp4";

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
              />
            ))}
          </div>

        </div>

        <div className="home-hero-footer">
          <span>R-TECH SOLUTIONS</span>
          <span>RUBBER &amp; POLYMER ENGINEERING</span>
          <span>01 — 04</span>
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

          <Link to="/about" className="home-text-link">
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

          <Link to="/materials" className="home-text-link">
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
              <span>01</span>
              <strong>Precision components</strong>
            </li>
            <li>
              <span>02</span>
              <strong>Reliable sealing performance</strong>
            </li>
            <li>
              <span>03</span>
              <strong>Application-specific requirements</strong>
            </li>
          </ul>

          <Link to="/products" className="home-text-link">
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


    </main>
  );
}

export default Home;