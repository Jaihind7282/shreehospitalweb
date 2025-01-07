import React from "react";
import "./Specialties.css";

const specialtiesData = [
  {
    title: "Women-Related Health Issues",
    description: "Comprehensive care for all women-related health problems.",
    imageUrl: "/images/women-health.jpeg",
    link: "/",
  },
  {
    title: "Infertility Treatment (Banjhpan)",
    description: "Specialized care and treatment for infertility.",
    imageUrl: "/images/infertility-treatment.jpg",
    link: "/",
  },
  {
    title: "Normal Delivery",
    description: "Safe and caring support for normal deliveries.",
    imageUrl: "/images/normal-delivery.jpg",
    link: "/",
  },
  {
    title: "Caesarean Section (Sijeriyan)",
    description:
      "Professional care for patients requiring a caesarean section.",
    imageUrl: "/images/caesarean-section.jpg",
    link: "/",
  },
  {
    title: "Hysterectomy (Bacchedani ka Operation)",
    description: "Surgical procedure for women needing hysterectomy.",
    imageUrl: "/images/hysterectomy.jpg",
    link: "/",
  },
  {
    title: "Stone Operation",
    description: "Expert care for treating stones with surgery.",
    imageUrl: "/images/stone-operation.webp",
    link: "/",
  },
  {
    title: "Appendicitis Treatment (Apendics)",
    description: "Emergency surgery and treatment for appendicitis.",
    imageUrl: "/images/appendicitis.png",
    link: "/",
  },
  {
    title: "Hydrocele Treatment",
    description: "Surgical treatment for hydrocele condition.",
    imageUrl: "/images/hydrocele.jpg",
    link: "/",
  },
  {
    title: "Hernia Surgery (Harniya)",
    description: "Surgical intervention for treating hernia.",
    imageUrl: "/images/hernia-surgery.jpg",
    link: "/",
  },
  {
    title: "Piles Treatment (Babasir)",
    description: "Treatment and surgery for piles and related conditions.",
    imageUrl: "/images/piles-treatment.jpg",
    link: "/",
  },
];

const Specialties = () => {
  return (
    <section className="specialties-section">
      <h2>OUR SPECIALITIES</h2>
      <p>
        We are dedicated to delivering personalized care tailored to the unique
        needs of each of our patients.
      </p>
      <div className="specialties-cards">
        {specialtiesData.map((specialty, index) => (
          <div key={index} className="specialty-card">
            <img
              src={specialty.imageUrl}
              alt={specialty.title}
              className="specialty-image"
            />
            <h3 className="specialty-title">{specialty.title}</h3>
            <p className="specialty-description">{specialty.description}</p>
            <a href={specialty.link} className="learn-more-link">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialties;
