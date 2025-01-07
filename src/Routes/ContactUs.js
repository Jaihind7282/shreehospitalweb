import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      {/* Contact Info Div */}
      <div className="contact-info">
        <div className="contact-details">
          <h3 className="contact-details-title">Contact Information</h3>
          <p className="contact-details-item">
            <strong>Phone:</strong> (+91) - 9801373068
          </p>
          <p className="contact-details-item">
            <strong>Email:</strong> contact@hospital.com
          </p>
          <p className="contact-details-item">
            <strong>Address:</strong> Thana Chowk, Khaira Mod, Jamui, Bihar,
            811307
          </p>
        </div>
        <img
          className="contact-img"
          src="images/hospitalimage.jpeg"
          alt="Hospital"
        />
      </div>
      <div className="contact-form">
        <h2 className="contact-form-title">Contact Us</h2>
        <form className="contact-form-fields">
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Full Name*
            </label>
            <input
              className="form-input"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email*
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="message">
              Message*
            </label>
            <textarea
              className="form-textarea"
              id="message"
              name="message"
              required
            ></textarea>
          </div>
          <button className="form-submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
