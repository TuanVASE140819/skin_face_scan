// tạo trang home chứa các component
// import các component từ thư mục components
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import HeroMB from "../components/Heromb";
import StatisticalHome from "../components/StatisticalHome";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 768);
    });
  }, []);
  return (
    <div className="overflow-hidden">
      {isMobile ? <HeroMB /> : <Hero />}
      <StatisticalHome />
    </div>
  );
};

export default Home;
