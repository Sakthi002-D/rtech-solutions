function Home() {
  return (
    <main className="home-page">
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero-inner">
          <div className="home-hero-content">
            <p className="home-hero-eyebrow">HIGH QUALITY • MADE IN INDIA</p>
            <h1 id="home-hero-title">Engineered Rubber &amp; Sealing Solutions</h1>
            <p className="home-hero-description">
              High-quality rubber and sealing products designed for demanding industrial applications.
            </p>
            <div className="home-hero-actions">
              <a className="home-hero-primary" href="/products">
                Explore Products
                <span aria-hidden="true">-&gt;</span>
              </a>
              <a className="home-hero-secondary" href="/request-a-quote">
                Get a Quote
              </a>
            </div>
            <div className="home-hero-meta" aria-label="Product capabilities">
              <span>Precision manufacturing</span>
              <span>Industrial grade materials</span>
            </div>
          </div>

          <div className="home-hero-visual" aria-label="Industrial rubber product visual placeholder" role="img">
            <div className="home-hero-visual-grid" aria-hidden="true" />
            <div className="home-hero-product" aria-hidden="true">
              <div className="home-hero-ring home-hero-ring-large" />
              <div className="home-hero-ring home-hero-ring-small" />
              <div className="home-hero-seal" />
            </div>
            <div className="home-hero-visual-label">
              <span className="home-hero-label-line" />
              <span>Industrial product visual</span>
            </div>
            <span className="home-hero-visual-index">01 / 01</span>
          </div>
        </div>
      </section>
      <section className="home-proof" aria-label="R-Tech Solutions capabilities">
        <div className="home-proof-item">
          <strong>01</strong>
          <span>Quality-led production</span>
        </div>
        <div className="home-proof-item">
          <strong>02</strong>
          <span>Custom rubber compounds</span>
        </div>
        <div className="home-proof-item">
          <strong>03</strong>
          <span>Reliable technical support</span>
        </div>
        <div className="home-proof-item">
          <strong>04</strong>
          <span>Built for industrial use</span>
        </div>
      </section>

      <section className="home-intro page-section">
        <div className="home-intro-heading">
          <p className="section-kicker">About R-Tech Solutions</p>
          <h2>Sealing performance that keeps your operation moving.</h2>
        </div>
        <div className="home-intro-copy">
          <p>
            R-Tech Solutions manufactures dependable rubber and sealing components
            for equipment makers, maintenance teams, and industrial suppliers.
          </p>
          <p>
            From material selection to finished parts, we focus on consistent
            dimensions, practical performance, and solutions that fit the way your
            business works.
          </p>
          <a className="text-link" href="/about">Discover our approach <span aria-hidden="true">-&gt;</span></a>
        </div>
      </section>

      <section className="home-offerings page-section" aria-labelledby="home-offerings-title">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">What we make</p>
            <h2 id="home-offerings-title">Components made for the details that matter.</h2>
          </div>
          <a className="text-link" href="/products">View all products <span aria-hidden="true">-&gt;</span></a>
        </div>
        <div className="home-offering-grid">
          <a className="home-offering" href="/products/rubber-gaskets">
            <span className="home-offering-number">01</span>
            <h3>Gaskets &amp; seals</h3>
            <p>Reliable sealing parts for assemblies exposed to pressure, heat, and movement.</p>
            <span className="home-offering-arrow" aria-hidden="true">-&gt;</span>
          </a>
          <a className="home-offering" href="/products/o-rings">
            <span className="home-offering-number">02</span>
            <h3>O-rings &amp; washers</h3>
            <p>Consistent, application-ready components for maintenance and OEM requirements.</p>
            <span className="home-offering-arrow" aria-hidden="true">-&gt;</span>
          </a>
          <a className="home-offering" href="/products/rubber-hoses">
            <span className="home-offering-number">03</span>
            <h3>Hoses &amp; profiles</h3>
            <p>Flexible rubber solutions shaped around your operating environment and fit.</p>
            <span className="home-offering-arrow" aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </section>

      <section className="home-industries page-section" aria-labelledby="home-industries-title">
        <div className="home-industries-copy">
          <p className="section-kicker">Where we work</p>
          <h2 id="home-industries-title">One dependable partner across demanding industries.</h2>
          <p>
            We help teams source rubber parts that are practical to specify,
            straightforward to reorder, and ready for real working conditions.
          </p>
          <a className="text-link" href="/industries">Explore industries <span aria-hidden="true">-&gt;</span></a>
        </div>
        <div className="home-industry-list">
          <span>Automotive</span>
          <span>Engineering</span>
          <span>Fluid handling</span>
          <span>Industrial equipment</span>
          <span>Electrical systems</span>
          <span>Maintenance supply</span>
        </div>
      </section>

      <section className="home-cta">
        <div>
          <p className="section-kicker">Have a requirement?</p>
          <h2>Let&apos;s find the right rubber solution for it.</h2>
        </div>
        <a className="home-cta-button" href="/request-a-quote">Request a quote <span aria-hidden="true">-&gt;</span></a>
      </section>
    </main>
  )
}

export default Home