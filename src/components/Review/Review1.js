import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import about data
import { aboutData, contentInfoData, productInfoData } from "../../data";

// import css
import "../../page/index.css";
// import  nút
import Next from "../../../src/assets/img/button/next.png";
import Prev from "../../../src/assets/img/button/prev.png";

import Modal from "react-modal";
const Review1 = () => {
  // destructure about
  //   const { image, title, subtitle } = aboutData;
  const [selectedProduct, setSelectedProduct] = useState(null);
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <img
        src={Next}
        alt="next"
        className={className}
        style={{ ...style, display: "block", width: "50px", height: "50px" }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <img
        src={Prev}
        alt="prev"
        className={className}
        style={{ ...style, display: "block", width: "50px", height: "50px" }}
        onClick={onClick}
      />
    );
  };
const settings = {
  // existing settings...
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024, // this means screen sizes less than 1024px
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // this means screen sizes less than 768px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // this means screen sizes less than 480px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
  return (
    <>
      <section className="p-8 mx-auto container-product">
        <div>
          <Slider {...settings}>
            {productInfoData.map((item, index) => (
              <div className="p-8" key={index}>
                <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6 border border-orange-200 border-b-4 border-orange-500 rounded-lg shadow-lg">
                  <figure class="max-w-screen-md mx-auto">
                    <svg
                      class="h-12 mx-auto mb-3 text-orange-400 dark:text-orange-600"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <blockquote>
                      <p class="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                        "Landwind is just awesome. It contains tons of
                        predesigned components and pages starting from login
                        screen to complex dashboard. Perfect choice for your
                        next SaaS application."
                      </p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center mt-6 space-x-3">
                      <img
                        class="w-6 h-6 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                        alt="profile picture"
                      />
                      <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div class="pr-3 font-medium text-gray-900 dark:text-white">
                          Micheal Gough
                        </div>
                        <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                          CEO at Google
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Review1;
