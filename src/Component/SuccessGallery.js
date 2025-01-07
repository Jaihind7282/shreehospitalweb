import React from "react";
import Slider from "react-slick";
import "./SuccessGallery.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const stories = [
  {
    name: "Aarav Gupta",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    journey:
      "Aarav, a newborn, was born prematurely and faced several health challenges. With the support and care of our pediatric team, he thrived over the past year, reaching developmental milestones, gaining weight, and becoming a healthy, active child. His parents are grateful for the guidance and care they received during this critical time.",
  },
  {
    name: "Isha Sharma",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    journey:
      "Isha, a 4-year-old girl, was diagnosed with a chronic respiratory issue that hindered her ability to play and interact with other children. Thanks to a combination of effective treatments and personalized care, Isha is now able to breathe freely and enjoys playing outside without any restrictions. Her family is grateful for the compassionate care she received from our pediatric specialists.",
  },
  {
    name: "Raghav Mehta",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    journey:
      "Raghav, a 9-year-old boy, was diagnosed with a rare heart condition that limited his ability to engage in physical activities. Through a comprehensive treatment plan, including surgery and physical therapy, Raghav is now stronger and more energetic. He is back to playing cricket with his friends and even aims to participate in his school's sports events. His parents are deeply thankful for the expert care provided.",
  },
  {
    name: "Neha Desai",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    journey:
      "Neha, a 32-year-old woman, faced multiple complications during her pregnancy, including gestational hypertension. With the personalized care from our obstetrics team, she managed to control her condition and gave birth to a healthy baby. Neha is recovering well and is enjoying motherhood, grateful for the support she received throughout her journey. Her confidence in managing her health and caring for her newborn has been fully supported by our team.",
  },
];

const ClientSuccessStories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="client-success-stories">
      <h2 className="section-title">PATIENT SUCCESS STORIES</h2>

      <Slider {...settings}>
        {stories.map((story, index) => (
          <div key={index} className="story-card">
            <div className="client-image">
              <img src={story.image} alt={story.name} />
            </div>
            <div className="client-info">
              <h3>{story.name}</h3>
              <p className="journey">{story.journey}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientSuccessStories;
