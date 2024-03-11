import React, { useState } from "react";

// import components
import Logo from "../assets/img/logo.png";
import Nav from "./Nav";
import NavMobile from "./NavMobile";

// import icons
import { FaBars } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <header
      className="mb-12 lg:mb-0 z-20 fixed w-full top-0 px-4 lg:px-0 py-4 lg:py-8"
      style={{ backgroundColor: "white" }}
      data-aos="fade-down"
      data-aos-delay="1200"
      data-aos-duration="1000"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[120px]">
            {/* logo */}
            <a href="#">
              <img src={Logo} alt="" />
            </a>

            {/* nav / initially hidden / show on large screens  */}
            <div
              className="hidden lg:flex gap-x-8 items-center"
              style={{ marginRight: "auto" }}
            >
              <Nav />
            </div>
          </div>

          {/* mobile nav / initially is showing / hide on large screens */}
          <div
            className={`${
              navMobile ? "max-h-100" : "max-h-0"
            } lg:hidden absolute top-[100%]
             bg-white
             w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}
          >
            <NavMobile />
          </div>
          <div
            onClick={() => setNavMobile(!navMobile)}
            className="text-2xl text-primary cursor-pointer lg:hidden"
          >
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
