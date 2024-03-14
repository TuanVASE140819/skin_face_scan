import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import about data
import { aboutData, contentInfoData } from "../../data";

const Content = () => {
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
    <section>
      <div className="p-8 container mx-auto">
   
              {/* title */}
              <h1 className="h3-2 text-center">
  Chăm Sóc Sức Khỏe
</h1>

<h1 className="h3-2 text-orange-500 text-center">
  Làn Da Tốt Nhất Cho Mọi Loại Da
</h1>

        <Slider {...settings}>
          {contentInfoData.map((item, index) => (
            <div className="p-8" key={index}>
              <div className="rounded overflow-hidden shadow-lg zoom">
                <img
                  className="w-full"
                  src={
                    item.image ? item.image : "https://via.placeholder.com/300"
                  }
                  alt="Sunset in the mountains"
                />
                <div className="flex items-center justify-between pb-5 pr-2 pl-2">
                  <div className="font-bold text-xl mb-2">{item.title}</div>
                  <button className=" btn-primary flex items-center px-4 py-2 rounded-full">
                    <div className="font-bold text-sm text-white">Khám phá</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 ml-2 text-white"s
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Content;
