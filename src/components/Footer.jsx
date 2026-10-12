
import "./Footer.css";
import rtechLogo from "../assets/images/rtech-logo.png";
import { contact, hasEmail, hasPhone } from "../data/contact";

const products = [
  "Rubber Gaskets",
  "O-Rings",
  "Rubber Washers & Seals",
  "Rubber Hoses",
  "Rubber Bushes",
  "Bellows",
  "Rubber Sheets",
  "Custom-Moulded Components",
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <section className="footer-company">
          <a href="/" className="footer-brand" aria-label="R-Tech Solutions home">
            <img
              src={rtechLogo}
              alt="R-Tech Solutions"
              className="footer-logo"
            />
          </a>

          <p className="footer-description">
            R-Tech Solutions provides high-quality rubber and sealing
            products for demanding industrial applications.
          </p>

          <div className="footer-trust">
            <div className="footer-trust-item">
              <span className="footer-icon" aria-hidden="true">⚙</span>
              <div>
                <strong>Quality</strong>
                <span>Reliable Performance</span>
              </div>
            </div>

            <div className="footer-trust-item">
              <span className="footer-icon" aria-hidden="true">▦</span>
              <div>
                <strong>Industrial</strong>
                <span>Wide Range of Applications</span>
              </div>
            </div>

            <div className="footer-trust-item">
              <span className="footer-icon" aria-hidden="true">✓</span>
              <div>
                <strong>Trusted</strong>
                <span>Customer Focused</span>
              </div>
            </div>
          </div>
        </section>

        <nav className="footer-column footer-products" aria-label="Our products">
          <h3>Our Products</h3>

          {products.map((product) => (
            <a href="/products" key={product}>
              <span>{product}</span>
              <span className="footer-arrow" aria-hidden="true">›</span>
            </a>
          ))}
        </nav>

        <section className="footer-column footer-contact" aria-label="Contact us">
          <h3>Contact Us</h3>

          <div className="footer-contact-item">
            <span className="footer-contact-icon" aria-hidden="true">⌖</span>
            <div>
              <strong>Address</strong>
              {contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          {hasEmail && (
            <div className="footer-contact-item">
              <span className="footer-contact-icon" aria-hidden="true">✉</span>
              <div>
                <strong>Email</strong>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </div>
          )}

          {hasPhone && (
            <div className="footer-contact-item">
              <span className="footer-contact-icon" aria-hidden="true">☎</span>
              <div>
                <strong>Phone</strong>
                <a href={`tel:${contact.phoneHref || contact.phone}`}>
                  {contact.phone}
                </a>
              </div>
            </div>
          )}

          <a className="footer-quote" href="/request-a-quote">
            <span aria-hidden="true">➤</span>
            <span>Request a Quote</span>
            <span aria-hidden="true">→</span>
          </a>
        </section>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} R-Tech Solutions. All Rights Reserved.
        </p>

        <nav className="footer-bottom-links" aria-label="Footer navigation">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/products">Products</a>
          <a href="/manufacturing">Manufacturing</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
