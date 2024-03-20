// tạo trang home chứa các component
// import các component từ thư mục components
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About1";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import Statistical from "../components/Statistical";
import Nav from "../components/Nav";
import Banner2 from "../components/Banner2";
import Content from "../components/Info/Content";
import Product from "../components/Info/Product";
import News from "../components/Info/News";
import Rule from "../components/Info/Rule";
import Result from "../components/Result/PC/Result";
import ResultMobile from "../components/Result/Mobile/Result";
const Scan = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 768);
    });
  }, []);

  return (
    <div className="overflow-hidden">
      {isMobile ? <ResultMobile /> : <Result />}
      {/* <Statistical /> */}
      <Product />
      <News />
      <Footer />
    </div>
  );
};

export default Scan;
