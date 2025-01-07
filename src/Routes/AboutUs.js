import React from "react";
import "./AboutUs.css";
import CTAComponent from "../Component/CTAComponent";

const AboutUs = () => {
  return (
    <>
      <div className="aboutus-container">
        <h1 className="aboutus-heading">Welcome to Shree Hospital</h1>
        <h3 className="aboutus-address">
          Thana Chowk, Khaira Mod, Jamui, Bihar, 811307
        </h3>
        <div className="aboutus-content">
          <img
            src="images/aboutimage.jpeg"
            alt="Hospital"
            className="aboutus-image"
          />
          <div className="aboutus-details">
            <p className="aboutus-description">
              Shree Hospital is a renowned healthcare facility specializing in
              various treatments and surgeries. The hospital offers
              comprehensive services for all women-related issues, including
              infertility (banjhpan), normal delivery, caesarean section
              (sijeriyan), and surgeries like hysterectomy (bacchedani ka
              operation). It also provides specialized care for stone
              operations, appendicitis (apendics), hydrocele, hernia (harniya),
              and piles (babasir). The hospital is managed by experienced
              doctors,
              <b className="bold-tag">
                Dr. Rajiv Ranjan Prasad (MBBS),MD(PMCH), MD(Anaes & Critical
                Care) DMCH{" "}
              </b>{" "}
              and{" "}
              <b className="bold-tag">
                Dr. Vijay Shree (MBBS) MD, OBG,DMCH Darbhanga Gold Medalist
              </b>
              , who are committed to providing quality healthcare and
              personalized care to all patients. Shree Hospital ensures a safe,
              caring environment for all medical needs.
            </p>
          </div>
        </div>
      </div>
      <CTAComponent />
    </>
  );
};

export default AboutUs;
