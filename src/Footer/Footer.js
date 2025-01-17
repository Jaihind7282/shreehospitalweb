import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <h5>SHREE HOSPITAL in JAMUI</h5>
          <p>
            dedicated to providing exceptional healthcare and support for
            children, Women & Men to thrive and heal!
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Email: contact@gmail.com</li>
            <li>Phone: (+91) - 6205561490</li>
            <li>Address: Thana Chowk, Khaira Mod, Jamui, Bihar, 811307</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media">
            <a
              href="https://www.facebook.com/shree.hospital.314506"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Shree Hospital. All Rights Reserved.</p>
        <a
          href="https://maps.app.goo.gl/AQAvt46jH9AfDBU58?g_st=com.google.maps.preview.copy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by @im_ JAI SINGH
        </a>
      </div>
    </footer>
  );
};

export default Footer;
