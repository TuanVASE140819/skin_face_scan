import React from "react";
import { aboutData, contentInfoData, ruleData } from "../../data";

const Rule = () => {
  return (
    <section className="container mx-auto">
      <div className="p-8 ">
        <h1 className="h3-2 text-orange-500 text-center">
          Cam kết
          <span className="text-black"> Của Chúng Tôi</span>
        </h1>
      </div>
      {/*  danh sách sẽ nằm trên 1 hàng */}
      <div className="flex flex-wrap justify-center">
        {ruleData.map((item, index) => (
          <div
            className="p-10 min-w-[10rem] zoom border border-orange-500 border-solid mr-4 rounded-lg"
            key={index}
          >
            <div className="justify-center items-center">
              <div className="flex justify-center items-center">
                <img
                  className="w-30 h-30 object-cover"
                  src={
                    item.image ? item.image : "https://via.placeholder.com/300"
                  }
                  alt={item.title}
                />
              </div>
              <div className="flex min-w-[10rem] max-w-[10rem] justify-center items-center">
                <div className="font-bold text-sm text-black text-center">
                  {item.title}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rule;
