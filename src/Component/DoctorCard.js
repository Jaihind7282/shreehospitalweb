import React from "react";
import "./DoctorCard.css";

const DoctorCard = () => {
  return (
    <div className="doctor-container">
      <div className="doctor-card">
        <img
          src="images/doctor1.jpeg"
          alt="Doctor 1"
          className="doctor-image"
        />
        <div className="doctor-info">
          <h2>Dr. Rajiv Ranjan Prasad</h2>
          <p>(MBBS),MD(PMCH), MD(Anaes & Critical Care) DMCH</p>
          <p>
            Specializes in Anaesthesiology, Critical Care, and Internal
            Medicine.
          </p>
        </div>
      </div>
      <div className="doctor-card">
        <img
          src="images/doctor2.jpeg"
          alt="Doctor 2"
          className="doctor-image"
        />
        <div className="doctor-info">
          <h2> Dr. Vijay Shree </h2>
          <p>(MBBS) MD, OBG,DMCH Darbhanga Gold Medalist</p>
          <p>Specializes in Child & Women related health issue.</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
