import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import about data
import { aboutData, contentInfoData, productInfoData } from "../../data";

const Product = () => {
  // destructure about
  //   const { image, title, subtitle } = aboutData;
  
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
          ...style, 
          display: "block", 
          background: "green", 
          width: "20px", 
          height: "20px", 
          borderRadius: "50%", 
          
    
        }}
        onClick={onClick}
      >
      </div>
    );
  }
  
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
          ...style, 
          display: "block", 
          background: "green", 
          width: "20px", 
          height: "20px", 
          borderRadius: "50%", 
         
        }}
        onClick={onClick}
      >
        
      </div>
    );
  }
  
  const settings = {
    // dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow  />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
  <>
    <section className="p-8 mx-auto pl-20 pr-20">
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
                        item.image ? item.image : "https://via.placeholder.com/300"
                    }
                    alt="Sunset in the mountains"
                />
               
<div className="flex flex-col items-center justify-between pb-5 pr-2 pl-2">
<div className="font-bold text-xl mb-2">{item.title}</div>
    <div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
</div>
                </div>
                </div>
            </div>
        ))}
      </Slider>
    </div>
  </section>
  <section className="p-8 mx-auto pl-20 pr-20">
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
                        item.image ? item.image : "https://via.placeholder.com/300"
                    }
                    alt="Sunset in the mountains"
                />
               
<div className="flex flex-col items-center justify-between pb-5 pr-2 pl-2">
<div className="font-bold text-xl mb-2">{item.title}</div>
    <div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
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
