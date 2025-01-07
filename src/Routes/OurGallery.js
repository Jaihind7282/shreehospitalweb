import React from "react";
import "./OurGallery.css";
import CTAComponent from "../Component/CTAComponent";

const OurGallery = () => {
  const galleryItems = [
    {
      src: "images/image1.jpeg",
      alt: "Image 1",
      message: "State-of-the-art Medical Equipment",
      className: "gallery-item-1",
    },
    {
      src: "images/image2.jpeg",
      alt: "Image 2",
      message: "Comfortable Patient Rooms",
      className: "gallery-item-2",
    },
    {
      src: "images/image3.jpeg",
      alt: "Image 3",
      message: "Expert Healthcare Professionals",
      className: "gallery-item-3",
    },
    {
      src: "images/image4.jpeg",
      alt: "Image 4",
      message: "Emergency Care Services",
      className: "gallery-item-4",
    },
    {
      src: "images/image5.jpeg",
      alt: "Image 5",
      message: "Advanced Diagnostic Technology",
      className: "gallery-item-5",
    },
    {
      src: "images/image6.jpeg",
      alt: "Image 6",
      message: "Rehabilitation Services",
      className: "gallery-item-6",
    },
    {
      src: "images/image7.jpeg",
      alt: "Image 7",
      message: "Childcare and Pediatric Services",
      className: "gallery-item-7",
    },
    {
      src: "images/image8.jpeg",
      alt: "Image 8",
      message: "Medical Research and Innovation",
      className: "gallery-item-8",
    },
    {
      src: "images/image9.jpeg",
      alt: "Image 9",
      message: "Mental Health Support",
      className: "gallery-item-9",
    },
    {
      src: "images/image10.jpeg",
      alt: "Image 10",
      message: "Patient-Centered Care",
      className: "gallery-item-10",
    },
  ];

  return (
    <>
      <div className="our-gallery-container">
        <h2 className="our-gallery-title">OUR GALLERY</h2>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div className={`gallery-item ${item.className}`} key={index}>
              <img src={item.src} alt={item.alt} className="gallery-image" />
              <p className="gallery-message">{item.message}</p>
            </div>
          ))}
        </div>
      </div>
      <CTAComponent />
    </>
  );
};

export default OurGallery;
