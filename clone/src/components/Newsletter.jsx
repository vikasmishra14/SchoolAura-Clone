import React from "react";
import "./Newsletter.css"; // Import CSS file for styling
import Container from "./Contanier";

const Newsletter = () => {
  return (
    <Container> 
    <div className="newsletter-container">
    <div className="newsletter-content">
      <h1 className="newsletter-heading">
        SUBSCRIBE OUR <br />
        <span>NEWSLETTER</span>
      </h1>

      <form className="newsletter-form">
        <input
          type="email"
          name="EMAIL"
          placeholder="Email Address"
          required
        />
        <button type="submit" className="subscribe-button">
          Subscribe
        </button>
      </form>
    </div>
  </div>
  </Container>
  );
};

export default Newsletter;
