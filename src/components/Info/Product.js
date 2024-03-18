import React from "react";
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
const Product = () => {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <section className="p-8 mx-auto container-product">
        <h1 className="h3-2 text-center">Khám Phá Sản Phẩm</h1>
        <h1 className="h3-2 text-orange-500 text-center">Trị Mụn</h1>
        <div>
          <Slider {...settings}>
            {productInfoData.map((item, index) => (
              // dùng flex chia 2 cột
              <div className="p-8" key={index}>
                <div className="rounded overflow-hidden shadow-lg zoom">
                  <div className="flex items-center justify-between pb-5 pr-2 pl-2">
                    <img
                      className="w-2/6"
                      src={
                        item.image
                          ? item.image
                          : "https://via.placeholder.com/300"
                      }
                      alt="Sunset in the mountains"
                    />

                    <div className="flex flex-col items-center justify-between pb-5 pr-2 pl-2">
                      <div className="font-bold text-xs mb-2">{item.title}</div>
                      <div className="text-xs">
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="p-8 mx-auto container-product">
        <h1 className="h3-2 text-center">Khám Phá Sản Phẩm Cải Thiện</h1>
        <h1 className="h3-2 text-orange-500 text-center">Làn Da Lão Hóa</h1>
        <div>
          <Slider {...settings}>
            {productInfoData.map((item, index) => (
              // dùng flex chia 2 cột
              <div className="p-8" key={index}>
                <div className="rounded overflow-hidden shadow-lg zoom">
                  <div className="flex items-center justify-between pb-5 pr-2 pl-2">
                    <img
                      className="w-2/6"
                      src={
                        item.image
                          ? item.image
                          : "https://via.placeholder.com/300"
                      }
                      alt="Sunset in the mountains"
                    />

                    <div className="flex flex-col items-center justify-between pb-5 pr-2 pl-2">
                      <div className="font-bold text-xs mb-2">{item.title}</div>
                      <div className="text-xs">
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
                };

                export default Product;
