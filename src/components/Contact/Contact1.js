import React from "react";

import "../../page/index.css";

const Contact1 = () => {
  return (
    <section className="my-[30px] xl:mt-[100px] flex items-center justify-center">
      <div className="custom-background bg-white rounded-lg shadow-lg min-h-[500px] min-w-[80rem] border rounded-3xl">
        <div className="grid grid-cols-3 ">
          {/* phần 1 */}
          <div
            className="p-8 xl:pr-4 max-w-[500px]"
            style={{ "@media (max-width: 1024px)": { display: "none" } }}
          >
            <h2 className="text-2xl font-bold mb-4">Scan checkHub</h2>
            <p className="text-gray-500 pb-60 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
            {/*  tôi muốn logo điện thoại kèn số hotline */}
            <div className="flex items-center gap-4 mt-8">
              {/* <img
                src="https://i.ibb.co/7zV5ZJ0/phone.png"
                alt="phone"
                style={{ width: "50px" }}
              /> */}
              <div>
                <h2 className="text-2xl font-bold">Hotline</h2>
                <p className="text-gray-500">1900 1424</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-8">
              {/* <img
                src="https://i.ibb.co/7zV5ZJ0/phone.png"
                alt="phone"
                style={{ width: "50px" }}
              /> */}
              <div>
                <h2 className="text-2xl font-bold">Email</h2>
                <p className="text-gray-500">scancheckhub@gmail.com</p>
              </div>
            </div>
          </div>
          {/* phần 2 */}
          <div className="p-8 bg-white border rounded-3xl shadow-lg xl:col-span-2">
            <form action="" className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full p-4 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 border border-gray-300 rounded-md"
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Nội dung"
                className="w-full p-4 border border-gray-300 rounded-md"
              ></textarea>
              <button className="bg-orange-500 text-white py-1 rounded-full w-40 ml-auto text-xl">
                Gửi
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact1;
