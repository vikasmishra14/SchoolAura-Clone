import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css"; // Import the CSS file
import Container from "./Contanier";

const Footer = () => {
  return (
    <footer className="footer">
          <Container>
      <div className="footer-container">
        
        {/* About Us */}
        <div className="footer-section">
          <h3 className="footer-title">About Us</h3>
          <p className="footer-text">
            SchoolAura Smart Education Platform is a step towards making learning better and effective for the students and help to achieving their goals.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            {["About Us", "Benefits", "Blogs", "Testimonials", "Features"].map((link, index) => (
              <li key={index} className="footer-link">› {link}</li>
            ))}
          </ul>
        </div>

        {/* Help & Support */}
        <div className="footer-section">
          <h3 className="footer-title">Help & Support</h3>
          <ul className="footer-links">
            {["Services", "Support", "Terms & Conditions", "Privacy Policy", "Sitemap"].map((link, index) => (
              <li key={index} className="footer-link">› {link}</li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
     
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="footer-social-icons">
            <FaFacebookF className="social-icon facebook" />
            <FaInstagram className="social-icon instagram" />
            <FaTwitter className="social-icon twitter" />
            <FaWhatsapp className="social-icon whatsapp" />
          </div>
        </div>
       
      </div>
      </Container>
      {/* Contact Info */}
      <div className="footer-contact">
        
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <div>
            <span className="contact-title">CALL US</span>
            <p className="contact-link">+91-9540349392</p>
          </div>
        </div>

        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <div>
            <span className="contact-title">MAIL US</span>
            <p className="contact-link">contact@schoolaura.com</p>
          </div>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <div>
            <span className="contact-title">Office Address</span>
            <p className="contact-address">
              E 44/3, Pocket D, Okhla Phase II, <br />
              Okhla Industrial Area, New Delhi, <br />
              Delhi 110020, India
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>2021 © SchoolAura. All Rights Reserved</p>
        <p>Design & Development by <span className="footer-link">Insoftlink Software</span></p>
      </div>
    </footer>
  );
};

export default Footer;
