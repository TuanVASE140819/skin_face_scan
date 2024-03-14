import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import about data
import { aboutData, contentInfoData } from "../../data";

const News = () => {
  // destructure about
  //   const { image, title, subtitle } = aboutData;

  const settings = {
    // dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
 
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <section>
      <div className="pl-8 pr-8 mx-auto">
   
              {/* title */}
              <h1 className="h3-2 text-center">
  Hiểu Làn Da Của Bạn Hơn
</h1>


        <Slider {...settings}>
          {contentInfoData.map((item, index) => (
        
           <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100  mb-4 md:mb-0 md:mr-0"
           key={index}>
    <img class="w-full border-b border-r" 
     src={"https://via.placeholder.com/600x300"}
     alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
       
            <div class="mb-2 text-sm text-primary1">
                #Acquisit
        </div>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
          
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default News;
