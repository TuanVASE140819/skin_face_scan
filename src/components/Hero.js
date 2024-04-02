import React, { useState } from 'react';
import Modal from 'react-modal';

import { heroData } from "../data";

import "../page/index.css";

import { useTranslation } from "react-i18next";
const Hero = () => {
  // destructure hero
  const { title, title2, subtitle, btnText, image, image2 } = heroData;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const { t } = useTranslation();
  return (
    <>
      <section className="lg:h-[600px] pt-[7rem] hidden md:block">
        {/* <Header /> */}
        <div className="container mx-auto h-full relative">
          <div className="flex flex-col xl:flex-row items-center h-full md:py-24">
            {/* text */}
            <div className="text-center xl:text-left xl:absolute">
              {/* title */}
              <h1
                className="text-4xl xl:max-w-[700px] font-bold"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                {t("hero_title")}
              </h1>

              <h1
                className="text-4xl xl:max-w-[700px] text-[#f58a78] font-bold"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                {t("hero_title_1")}
              </h1>
              {/* subtitle */}
              <p
                className="text-sm lead xl:max-w-[500px] mb-6 "
                data-aos="fade-down"
                data-aos-delay="500"
              >
                {t("hero_content")}
              </p>
              <button
                className="btn btn-primary mb-8 xl:mb-0 text-sm "
                style={{ display: "flex", alignItems: "center" }}
                data-aos="fade-down"
                data-aos-delay="600"
                onClick={openModal}
              >
                <img
                  src={image2}
                  alt=""
                  className="w-10 h-10 mr-2 ripple text-sm "
                />
                <div className="pl-2">{t("scan_now")}</div>
              </button>

              {/* tạo ra 3 nút nằm ngang */}
              <div
                className="flex justify-center pt-5 pr-5"
                data-aos="fade-down"
                data-aos-delay="600"
              >
                <div className="flex flex-col mr-5 text-sm  bg-gray-100 p-2 px-8 rounded-lg">
                  <div>{t("hero_step_1")}</div>
                  <div className=" text-sm font-bold">
                    {t("hero_content_1")}
                  </div>
                </div>
                <div className="flex flex-col mr-5 text-sm  bg-gray-100 p-2 px-8 rounded-lg">
                  <div>{t("hero_step_2")}</div>
                  <div className=" text-sm  font-bold">
                    {t("hero_content_2")}
                  </div>
                </div>
                <div className="flex flex-col mr-5 text-sm  bg-gray-100 p-2 px-8 rounded-lg">
                  <div>{t("hero_step_3")}</div>
                  <div className=" text-sm font-bold">
                    {t("hero_content_3")}
                  </div>
                </div>
              </div>
            </div>
            {/* image */}
            <div
              className="  xl:absolute xl:-right-12"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <img
                src={image}
                alt=""
                className=" ml-14"
                style={{ width: "70%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: "55%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "0",
            border: "none",
            background: "none",
          },
        }}
      >
        {/* 30rem có viền màu cam */}
        <div className="bg-white w-[80rem] rounded-3xl overflow-hidden border border-orange-500 relative">
          <button
            onClick={closeModal}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "transparent",
              border: "none",
            }}
          >
            X
          </button>
          <div className="grid grid-cols-2">
            <div className="col-span-1 p-10">
              <h3 className="text-3xl font-bold text-start py-5">
                Hướng Dẫn Sử Dụng
              </h3>
              <h5 className="text-2xl font-bold text-start py-5">
                Chụp 4 góc mặt:
              </h5>
              {/*  tạo 4 hình ảnh nằm ngang */}
              <div className="grid grid-cols-4">
                <div className="col-span-1 min-w-[60px] flex flex-col items-center justify-center">
                  <img
                    src="https://via.placeholder.com/60"
                    className="rounded-full"
                    alt=""
                  />
                  <p>Nhìn sang trái</p>
                </div>
                <div className="col-span-1 min-w-[60px] flex flex-col items-center justify-center">
                  <img
                    src="https://via.placeholder.com/60"
                    className="rounded-full"
                    alt=""
                  />
                  <p>Nhìn sang phải</p>
                </div>
                <div className="col-span-1 min-w-[60px] flex flex-col items-center justify-center">
                  <img
                    src="https://via.placeholder.com/60"
                    className="rounded-full"
                    alt=""
                  />
                  <p>Nhìn thẳng</p>
                </div>
                <div className="col-span-1 min-w-[60px] flex flex-col items-center justify-center">
                  <img
                    src="https://via.placeholder.com/60"
                    className="rounded-full"
                    alt=""
                  />
                  <p>Đưa xuống cố</p>
                </div>
              </div>
              <h5 className="text-2xl font-bold text-start py-5">
                Để có kết quả tốt nhất:
              </h5>
              {/*  dùng gird chia 2x2 */}
              <div className="grid grid-cols-2">
                <div className="col-span-1">
                  {/*  tôi muốn tạo một nút bên phải là hình ảnh  bên trái là text */}
                  <button className=" flex items-center px-4 py-2 rounded-full shadow-lg min-w-[17rem]">
                    <img src="https://via.placeholder.com/30" alt="" />
                    <span className="pl-2">Hạn chế trang điểm & đeo kính</span>
                  </button>
                </div>
                <div className="col-span-1">
                  {/*  tôi muốn tạo một nút bên phải là hình ảnh  bên trái là text */}
                  <button className=" flex items-center px-4 py-2 rounded-full shadow-lg min-w-[17rem]">
                    <img src="https://via.placeholder.com/30" alt="" />
                    <span className="pl-2">Cố định máy ảnh cận mắt</span>
                  </button>
                </div>
                <div className="col-span-1">
                  {/*  tôi muốn tạo một nút bên phải là hình ảnh  bên trái là text */}
                  <button className=" flex items-center px-4 py-2 rounded-full shadow-lg min-w-[17rem]">
                    <img src="https://via.placeholder.com/30" alt="" />
                    <span className="pl-2">Không để tóc che mắt</span>
                  </button>
                </div>
                <div className="col-span-1">
                  {/*  tôi muốn tạo một nút bên phải là hình ảnh  bên trái là text */}
                  <button className=" flex items-center px-4 py-2 rounded-full shadow-lg min-w-[17rem]">
                    <img src="https://via.placeholder.com/30" alt="" />
                    <span className="pl-2">Đạm bảo ánh sáng tốt</span>
                  </button>
                </div>
              </div>

              <button className="btn-primary flex items-center px-4 py-2 rounded-full shadow-lg mt-5">
                <a href="/skin_care_scan">
                  <span className="pl-7 pr-7 text-white font-bold">
                    Tôi đã hiểu
                  </span>
                </a>
              </button>
            </div>
            <div className="col-span-1 p-10 w-5/6">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Hero;
