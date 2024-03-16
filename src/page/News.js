import React from "react";
import About from "../components/About1";
import Footer from "../components/Footer";
import Statistical from "../components/Statistical";
import Banner2 from "../components/Banner2";
import { footerData, navigationData } from "../data";
import Content from "../components/Info/Content";
import Product from "../components/Info/Product";
import Newsindex from "../components/Info/News";
import Rule from "../components/Info/Rule";
import Keyword from "../components/News/Keyword";
import NewsOne from "../components/News/NewsOne";
import NewsTwo from "../components/News/NewsTwo";

const News = () => {
  return (
    <div className="overflow-hidden">
      <Keyword />
      <NewsOne />
      <Newsindex />
      <NewsTwo />
      <Footer />
    </div>
  );
};

export default News;
