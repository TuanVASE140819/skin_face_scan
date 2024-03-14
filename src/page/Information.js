// tạo trang home chứa các component
// import các component từ thư mục components
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import Statistical from "../components/Statistical";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import { footerData, navigationData } from "../data";
import Content from "../components/Info/Content";
import Product from "../components/Info/Product";
import News from "../components/Info/News";

const Information = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Statistical />
      <Content />
      <Product/>
      <News />
      <Footer />
    </div>
  );
};

export default Information;
