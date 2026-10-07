import "./Footer.css";
import rtechLogo from "../assets/images/rtech-logo.png";


function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        {/* COMPANY */}
        <div className="footer-company">
         <img
            src={rtechLogo}
            alt="R-Tech Solutions"
            className="footer-logo"
        />

          <p>
            R-Tech Solutions provides high-quality rubber and sealing
            products for demanding industrial applications.
          </p>
        </div>


        {/* PRODUCTS */}
        <div className="footer-column">
          <h3>OUR PRODUCTS</h3>

          <a href="/products">Rubber Gaskets</a>
          <a href="/products">O-Rings</a>
          <a href="/products">Rubber Washers &amp; Seals</a>
          <a href="/products">Rubber Hoses</a>
          <a href="/products">Rubber Bushes</a>
          <a href="/products">Bellows</a>
          <a href="/products">Rubber Sheets</a>
          <a href="/products">Custom-Moulded Components</a>
        </div>


        {/* CONTACT */}
        <div className="footer-column footer-contact">
          <h3>CONTACT US</h3>

          <p>
            R-Tech Solutions
          </p>

          <p>
            Rubber &amp; Polymer Engineering
          </p>

          <p>
            Email: Contact details to be confirmed
          </p>

          <p>
            Phone: Contact details to be confirmed
          </p>
        </div>

      </div>


      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © 2026 R-Tech Solutions. All Rights Reserved.
        </p>

        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/request-a-quote">Request a Quote</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;