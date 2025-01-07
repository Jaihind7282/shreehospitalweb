import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import LandingPage from "./Component/LandingPage";
import AboutUs from "./Routes/AboutUs";
import Services from "./Routes/Services";
import OurGallery from "./Routes/OurGallery";
import OurFacilities from "./Routes/OurFacilities";
import ContactUs from "./Routes/ContactUs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<OurGallery />} />
      <Route path="/facilities" element={<OurFacilities />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
