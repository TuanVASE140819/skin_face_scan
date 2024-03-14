import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import Statistical from "./components/Statistical";
import Home from "./page/Home";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Information from "./page/Information";

const App = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <Router>
      <Header />
      {/* <Nav /> */}
      <div className="overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thong_tin" element={<Information />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
