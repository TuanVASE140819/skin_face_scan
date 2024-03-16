// tạo trang home chứa các component
// import các component từ thư mục components
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About1";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import Statistical from "../components/Statistical";
import Nav from "../components/Nav";
import Header from "../components/Header";
import { footerData, navigationData } from "../data";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Statistical />
    </div>
  );
};

export default Home;
