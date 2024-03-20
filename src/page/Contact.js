import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import about data
import { aboutData, contentInfoData } from "../data";
import Hero from "../components/Hero";
import Banner2 from "../components/Banner2";
import Footer from "../components/Footer";
import Contact1 from "../components/Contact/Contact1";
import Statistical from "../components/Statistical";

import StatisticalHome from "../components/StatisticalHome";
const Contact = () => {
  return (
    <div className="overflow-hidden">
      <Banner2 />
      <StatisticalHome />
      <Contact1 />
      <Footer />
    </div>
  );
};

export default Contact;
