import logo from '../assets/images/rtech-logo.png'

const approachSteps = [
  ['01', 'Understand the Application'],
  ['02', 'Select the Right Polymer'],
  ['03', 'Choose the Right Sealing Solution'],
  ['04', 'Quality & Performance Checks'],
  ['05', 'Technical Support'],
]

const bringsTogether = [
  ['01', 'Material Knowledge', 'Understanding different polymer options for different application requirements.'],
  ['02', 'Sealing Expertise', 'Focused on rubber and industrial sealing solutions.'],
  ['03', 'Custom Capability', 'Custom-made and moulded rubber components for specific requirements.'],
  ['04', 'Quality Commitment', 'Quality focused on product performance and safety.'],
]

const whyRTech = [
  ['Application-Focused Solutions', 'Solutions based on application requirements.'],
  ['Tailor-Made Support', 'Solutions developed around specific customer requirements.'],
  ['Technical Support', 'Support related to product and application needs.'],
  ['Long-Term Partnership', 'Building customer relationships through trust, reliability and excellence.'],
]

const values = [
  ['Quality First', 'Every product goes through rigorous checks for performance and safety.'],
  ['Customer Focus', 'Tailor-made solutions with delivery and technical support.'],
  ['Innovation', 'Continuous improvement to meet evolving industry challenges.'],
]

function About() {
  return (
    <main className="page about-page">
      <section className="about-hero about-reveal">
        <div className="about-hero-copy">
          <p className="about-eyebrow">ABOUT R-TECH</p>
          <h1>Engineering Reliability Into Every Seal</h1>
          <p className="about-lead">
            R-Tech Solutions brings together rubber and polymer expertise, sealing
            solutions and application-focused product selection for demanding
            industrial requirements.
          </p>
        </div>

        <div className="about-hero-visual" aria-label="R-Tech Solutions brand visual">
          <div className="about-hero-grid" />
          <div className="about-hero-ring about-hero-ring-one" />
          <div className="about-hero-ring about-hero-ring-two" />
          <img src={logo} alt="R-Tech Solutions" />
          <span className="about-hero-index">R / 01</span>
        </div>
      </section>

      <section className="about-section about-who about-reveal">
        <div className="about-who-visual">
          <div className="about-visual-label">RUBBER + POLYMER ENGINEERING</div>
          <div className="about-visual-mark">R</div>
          <div className="about-visual-line" />
          <p>Industrial sealing solutions</p>
        </div>
        <div className="about-section-copy">
          <p className="about-eyebrow">01 / WHO WE ARE</p>
          <h2>Built around the requirements behind every application.</h2>
          <p>
            R-Tech Solutions is a rubber and polymer engineering company specialising
            in industrial sealing and rubber products. We bring together sealing
            products and custom-moulded components to support demanding industrial
            requirements.
          </p>
          <p>
            Our approach begins with understanding the application, then selecting the
            appropriate polymer and solution for the requirement.
          </p>
        </div>
      </section>

      <section className="about-section about-approach about-reveal">
        <div className="about-section-heading">
          <p className="about-eyebrow">02 / HOW WE WORK</p>
          <h2>The R-Tech Approach</h2>
          <p>From application understanding to technical support, every step stays focused on the requirement.</p>
        </div>
        <div className="about-timeline">
          {approachSteps.map(([number, title]) => (
            <div className="about-timeline-step" key={number}>
              <span className="about-step-number">{number}</span>
              <span className="about-step-line" />
              <h3>{title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section about-brings about-reveal">
        <div className="about-section-heading">
          <p className="about-eyebrow">03 / WHAT WE BRING TOGETHER</p>
          <h2>Knowledge, products and support in one clear direction.</h2>
        </div>
        <div className="about-brings-grid">
          {bringsTogether.map(([number, title, description]) => (
            <article className="about-bring-block" key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section about-why about-reveal">
        <div className="about-section-heading">
          <p className="about-eyebrow">04 / WHY R-TECH</p>
          <h2>Dependable thinking for demanding requirements.</h2>
        </div>
        <div className="about-why-list">
          {whyRTech.map(([title, description], index) => (
            <div className="about-why-item" key={title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-quality about-reveal">
        <div className="about-quality-copy">
          <p className="about-eyebrow">OUR QUALITY PHILOSOPHY</p>
          <h2>Quality First</h2>
          <p>Every product goes through rigorous checks for performance and safety.</p>
        </div>
        <div className="about-quality-words" aria-label="Performance, safety, reliability">
          <span>Performance</span>
          <span>Safety</span>
          <span>Reliability</span>
        </div>
      </section>

      <section className="about-section about-values about-reveal">
        <div className="about-section-heading">
          <p className="about-eyebrow">05 / OUR VALUES</p>
          <h2>What We Believe In</h2>
        </div>
        <div className="about-values-grid">
          {values.map(([title, description]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-vision about-reveal">
        <p className="about-eyebrow">06 / OUR VISION</p>
        <h2>To be recognized as a global leader in rubber and sealing solutions, building long-term partnerships with clients through trust, reliability, and excellence.</h2>
      </section>

      <section className="about-cta about-reveal">
        <div>
          <p className="about-eyebrow">START A CONVERSATION</p>
          <h2>Looking for the right rubber or sealing solution?</h2>
          <p>Talk to R-Tech Solutions about your application requirements.</p>
        </div>
        <a href="/request-a-quote">Request a Quote <span aria-hidden="true">-&gt;</span></a>
      </section>
    </main>
  )
}

export default About