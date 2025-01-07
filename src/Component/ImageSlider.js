import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  const images = [
    "images/Slider1.jpg",
    "images/aboutimage.jpeg",
    "images/image1.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  });

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`image-container ${
            currentIndex === index ? "active" : ""
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="navigation">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
