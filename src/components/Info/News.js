import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import about data
import { contentNewsData } from "../../data";

import Next from "../../../src/assets/img/button/next.png";
import Prev from "../../../src/assets/img/button/prev.png";

const News = () => {
  // destructure about
  //   const { image, title, subtitle } = aboutData;
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
    // dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section>
      <div className=" mx-auto container-product">
        {/* title */}
        <h1 className="h3-2 text-center">Hiểu Làn Da Của Bạn Hơn</h1>

        <Slider {...settings}>
          {contentNewsData.map((item, index) => (
            <div className="p-8" key={index}>
              <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow ">
                <img
                  className="w-full border-b border-r rounded-lg"
                  src={
                    item.image ? item.image : "https://via.placeholder.com/300"
                  }
                  alt={item.title}
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <div className="mb-2 text-sm text-primary1">{item.tag}</div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {item.title.length > 40
                      ? item.title.substring(0, 40) + "..."
                      : item.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700">
                    {item.content.length > 100
                      ? item.content.substring(0, 100) + "..."
                      : item.content}
                  </p>
                  {/* avatar và date */}
                  <div className="flex items first-letter:capitalize">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={item.avatar}
                      alt="Avatar of Jonathan Reinink"
                    />
                    <div className="flex flex-col ml-2">
                      <p className="text-sm font-semibold text-gray-900">
                        {item.customerName}
                      </p>
                      <p className="text-xs font-normal text-gray-700">
                        {item.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default News;

