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
import Banner2 from "../components/Banner2";
import Content from "../components/Info/Content";
import Product from "../components/Info/Product";
import News from "../components/Info/News";

import RuleUser from "../components/Commit/RuleUser";
import About2 from "../components/About2";
import AboutCommit from "../components/Commit/AboutCommit";
import AboutCommit2 from "../components/Commit/AboutCommit2";
import Chart from "../components/Commit/Chart";

const Commit = () => {
  return (
    <div className="overflow-hidden">
      <Banner2 />

      <Statistical />
      <AboutCommit />
      <RuleUser />
      {/* <Chart /> */}
      <AboutCommit2 />
      <Footer />
    </div>
  );
};

export default Commit;
