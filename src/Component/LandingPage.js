import React from "react";
import "./LandingPage.css";
import ImageSlider from "./ImageSlider";
import AboutSection from "./AboutSection";
import Specialties from "./Specialties";
import Stats from "./Stats";
import CTAComponent from "./CTAComponent";
import SuccessGallery from "./SuccessGallery";
import DoctorCard from "./DoctorCard";

function LandingPage() {
  return (
    <>
      <ImageSlider />
      <AboutSection />
      <DoctorCard />
      <Stats />
      <Specialties />
      <SuccessGallery />
      <CTAComponent />
    </>
  );
}

export default LandingPage;
