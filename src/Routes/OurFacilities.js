import React from "react";
import "./OurFacilities.css";
import CTAComponent from "../Component/CTAComponent";

const OurFacilities = () => {
  const facilities = [
    {
      title: "Maternity Wards",
      description: "State-of-the-art maternity wards for a comfortable stay.",
      icon: "🏥",
    },
    {
      title: "Newborn Care",
      description: "24/7 neonatal care with skilled pediatricians and nurses.",
      icon: "👶",
    },
    {
      title: "Postnatal Care",
      description:
        "Postnatal care for mothers to ensure recovery and well-being.",
      icon: "💪",
    },
    {
      title: "Breastfeeding Support",
      description:
        "Expert lactation consultants available for breastfeeding assistance.",
      icon: "🍼",
    },
    {
      title: "Ultrasound & Diagnostics",
      description:
        "Advanced ultrasound and diagnostic equipment for prenatal care.",
      icon: "📡",
    },
    {
      title: "Labor & Delivery",
      description:
        "Modern labor and delivery rooms for a safe birthing experience.",
      icon: "🚼",
    },
    {
      title: "Caesarean Section (Sijeriyan)",
      description:
        "Safe and experienced caesarean section surgeries for mothers who need it.",
      icon: "🤰",
    },
    {
      title: "Gynecology Care",
      description:
        "Comprehensive gynecological care for women at all stages of life.",
      icon: "🩺",
    },

    {
      title: "Emergency Services",
      description:
        "24/7 emergency services with a dedicated team of specialists.",
      icon: "🚑",
    },
  ];

  return (
    <>
      <section className="our-facilities">
        <h2 className="title">OUR FACILITIES</h2>
        <p className="facilities-intro">
          We are committed to providing exceptional care for both mothers and
          newborns.
        </p>
        <div className="facilities-container">
          {facilities.map((facility, index) => (
            <div className="facility-card" key={index}>
              <div className="facility-icon">{facility.icon}</div>
              <h3 className="facility-title">{facility.title}</h3>
              <p className="facility-description">{facility.description}</p>
            </div>
          ))}
        </div>
      </section>
      <CTAComponent />
    </>
  );
};

export default OurFacilities;
