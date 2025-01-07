import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="about-heading">SHREE HOSPITAL | JAMUI</h2>
        <p className="about-bold-paragraph">
          <strong>Best Hospital for Newborn,Women & Men</strong>
        </p>
        <p className="about-description">
          Shree Hospital is a renowned healthcare facility specializing in
          various treatments and surgeries. The hospital offers comprehensive
          services for all women-related issues, including infertility
          (banjhpan), normal delivery, caesarean section (sijeriyan), and
          surgeries like hysterectomy (bacchedani ka operation). It also
          provides specialized care for stone operations, appendicitis
          (apendics), hydrocele, hernia (harniya), and piles (babasir). The
          hospital is managed by experienced doctors,
          <b className="bold-tag">
            Dr. Rajiv Ranjan Prasad (MBBS),MD(PMCH), MD(Anaes & Critical Care)
            DMCH
          </b>{" "}
          and{" "}
          <b className="bold-tag">
            {" "}
            Dr. Vijay Shree (MBBS) MD, OBG,DMCH Darbhanga Gold Medalist
          </b>
          , who are committed to providing quality healthcare and personalized
          care to all patients. Shree Hospital ensures a safe, caring
          environment for all medical needs.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
