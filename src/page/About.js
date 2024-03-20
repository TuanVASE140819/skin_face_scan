import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import about data
import { aboutData, contentInfoData } from "../data";
import Hero from "../components/Hero";
import Banner2 from "../components/Banner2";
import Statistical from "../components/Statistical";
import StatisticalHome from "../components/StatisticalHome";
import About2 from "../components/About2";
import Footer from "../components/Footer";

const About = () => {
  // destructure about
  //   const { image, title, subtitle } = aboutData;

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };
  return (
    <div className="overflow-hidden">
      <Banner2 />
      <StatisticalHome />
      <About2 />
      <Footer />
    </div>
  );
};

export default About;
