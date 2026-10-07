import "./About.css";
import logo from "../assets/images/rtech-logo.png";

function About() {
  return (
    <main className="about-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="about-hero">
        <div className="about-container about-hero-inner">

          <div className="about-hero-content">
            <p className="about-label">ABOUT R-TECH</p>

            <h1>
              Rubber &amp; Polymer
              <br />
              Engineering
              <br />
              Solutions.
            </h1>

            <p className="about-hero-text">
              R-Tech Solutions is a trusted name in rubber and polymer
              engineering, specializing in high-quality sealing and
              industrial rubber products.
            </p>
          </div>

          <div className="about-hero-visual">
            <div className="about-grid"></div>

            <div className="about-circle about-circle-one"></div>
            <div className="about-circle about-circle-two"></div>

            <img
              src={logo}
              alt="R-Tech Solutions"
              className="about-logo"
            />

            <span className="about-visual-number">
              01 / ABOUT
            </span>
          </div>

        </div>
      </section>


      {/* =========================
          WHO WE ARE
      ========================= */}

      <section className="about-introduction">
        <div className="about-container">

          <div className="about-section-number">
            WHO WE ARE
          </div>

          <div className="about-introduction-content">

            <div className="about-heading">
              <p className="about-label">
                R-TECH SOLUTIONS
              </p>

              <h2>
                Engineering rubber solutions
                <span> for demanding applications.</span>
              </h2>
            </div>

            <div className="about-description">
              <p>
                R-Tech Solutions specializes in manufacturing and
                supplying a wide range of high-quality sealing and
                industrial rubber products including gaskets, O-rings,
                washers, hoses, rubber sheets, bushes, bellows, and
                custom-moulded components.
              </p>

              <p>
                With technical expertise, we focus on delivering
                durable, reliable, and innovative solutions for
                demanding industrial requirements.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          CAPABILITY
      ========================= */}

      <section className="about-capability">

        <div className="about-container">

          <div className="about-capability-heading">
            <p className="about-label">
              OUR CAPABILITY
            </p>

            <h2>
              The right rubber solution
              <br />
              for every application.
            </h2>
          </div>

          <div className="about-capability-grid">

            <div className="about-capability-item">
              <span>01</span>

              <div>
                <h3>
                  Rubber &amp; Polymer Engineering
                </h3>

                <p>
                  Products are designed using a variety of polymers
                  to provide the right material for different
                  application requirements.
                </p>
              </div>
            </div>


            <div className="about-capability-item">
              <span>02</span>

              <div>
                <h3>
                  Sealing Solutions
                </h3>

                <p>
                  A wide range of sealing and industrial rubber
                  products designed for demanding environments
                  and long-term performance.
                </p>
              </div>
            </div>


            <div className="about-capability-item">
              <span>03</span>

              <div>
                <h3>
                  Custom-Moulded Components
                </h3>

                <p>
                  Custom-moulded rubber components are available
                  for specific customer and application
                  requirements.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          VALUES
      ========================= */}

      <section className="about-values">

        <div className="about-container">

          <div className="about-values-heading">

            <div>
              <div className="about-section-number">
                OUR VALUES
              </div>
            </div>

            <h2>
              What we believe in.
            </h2>

          </div>


          <div className="about-values-list">

            <div className="about-value">
              <span>01</span>

              <div>
                <h3>
                  Quality First
                </h3>

                <p>
                  Every product goes through rigorous checks for
                  performance and safety.
                </p>
              </div>
            </div>


            <div className="about-value">
              <span>02</span>

              <div>
                <h3>
                  Customer Focus
                </h3>

                <p>
                  Tailor-made solutions with fast delivery and
                  technical support.
                </p>
              </div>
            </div>


            <div className="about-value">
              <span>03</span>

              <div>
                <h3>
                  Innovation
                </h3>

                <p>
                  Continuous improvement to meet evolving
                  industry challenges.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          VISION
      ========================= */}

      <section className="about-vision">

        <div className="about-container about-vision-inner">

          <div className="about-vision-number">
            03 / OUR VISION
          </div>


          <div className="about-vision-content">

            <p className="about-label">
              OUR VISION
            </p>

            <h2>
              Engineering a more reliable industrial future.
            </h2>

            <p className="about-vision-description">
              To be recognized as a global leader in rubber and
              sealing solutions by combining technical precision,
              dependable quality, and long-term partnerships.
            </p>


            <div className="about-vision-points">
              <span>01 / PRECISION</span>
              <span>02 / RELIABILITY</span>
              <span>03 / PARTNERSHIP</span>
            </div>

          </div>


          <div
            className="about-vision-visual"
            aria-hidden="true"
          >

            <div className="about-vision-orbit about-vision-orbit-one"></div>

            <div className="about-vision-orbit about-vision-orbit-two"></div>

            <div className="about-vision-core">
              R
            </div>

            <span className="about-vision-tag">
              BUILT TO LAST
            </span>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="about-cta-section">

        <div className="about-container">

          <div className="about-cta">

            <div className="about-cta-content">

              <p className="about-label">
                LET&apos;S WORK TOGETHER
              </p>

              <h2>
                Looking for the right
                <br />
                rubber solution?
              </h2>

            </div>


            <a
              href="/request-a-quote"
              className="about-cta-button"
            >
              REQUEST A QUOTE
              <span>-&gt;</span>
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;