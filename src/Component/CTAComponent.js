import React from "react";
import { Link } from "react-router-dom";
import "./CTAComponent.css";

const CTAComponent = () => {
  return (
    <div className="cta-container">
      <div className="cta-content">
        <h1 className="cta-heading">Shree Hospital | jamui</h1>
        <p className="cta-description">
          Providing exceptional healthcare for your children. Our team of
          pediatric specialists is committed to ensuring your child's well-being
          with advanced medical care in a compassionate environment.
        </p>
        <Link to="/contact" className="cta-button">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default CTAComponent;
