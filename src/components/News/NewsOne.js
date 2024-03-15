import React from "react";
import { KeywordData } from "../../data";

import News4 from "../../assets/img/News/New4.png";
import News5 from "../../assets/img/News/New5.png";
import News6 from "../../assets/img/News/New6.png";

const NewsOne = () => {
  return (
    <section className="container mx-auto">
      <div className="">
        <h1 className="h3-2 text-center">Mới Nhất</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="flex flex-col gap-y-4">
            <div
              className="shadow border"
              style={{
                borderRadius: "rem",
                overflow: "hidden",
              }}
            >
              <div>
                <img
                  className="w-full h-[22.3rem] object-cover cursor-pointer"
                  src={News4}
                  alt=""
                />
              </div>
              <div className="pr-4 pl-4">
                <h1 className="h3-2 text-black">Tin tức 1</h1>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nemo, quas.
                </p>
              </div>
              {/* avatar */}
              <div className="flex items-center gap-x-4 p-4">
                <div>
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://via.placeholder.com/300"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="h3-2 text-black">Nguyễn Văn A</h1>
                  <p className="text-gray-500">20/10/2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col gap-y-4">
            <div
              className="flex shadow"
              style={{
                borderRadius: "2rem",
                overflow: "hidden",
              }}
            >
              <div style={{ flex: 1 }}>
                <img
                  className="w-full h-[15rem] object-cover"
                  src={News5}
                  alt=""
                />
              </div>
              <div className="pt-4 pr-1 pl-1" style={{ flex: 1 }}>
                <h1 className="h3-2 text-black">Tin tức 2</h1>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nemo, quas.
                </p>
                <div className="flex items-center gap-x-4 p-4">
                  <div>
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src="https://via.placeholder.com/300"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-black">Nguyễn Văn A</h1>
                    <p className="text-gray-500">20/10/2021</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex shadow"
              style={{
                borderRadius: "2rem",
                overflow: "hidden",
              }}
            >
              <div style={{ flex: 1 }}>
                <img
                  className="w-full h-[15rem] object-cover"
                  src={News5}
                  alt=""
                />
              </div>
              <div className="pt-4 pr-1 pl-1" style={{ flex: 1 }}>
                <h1 className="h3-2 text-black">Tin tức 2</h1>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nemo, quas.
                </p>
                <div className="flex items-center gap-x-4 p-4">
                  <div>
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src="https://via.placeholder.com/300"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-black">Nguyễn Văn A</h1>
                    <p className="text-gray-500">20/10/2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsOne;
