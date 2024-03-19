import React from 'react';

// import footer data
import { footerData } from '../data';

// import components
import Copyright from './Copyright';
import { Input } from "postcss";

const Footer = () => {
  // destructure footer data
  const {
    logo,
    address,
    email,
    content,
    phone,
    list1,
    list2,
    list3,
    socialList,
  } = footerData;
  return (
    <>
      <footer className="mt-20 hidden md:block">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row text-center xl:text-left gap-y-12">
            {/* info */}
            <div className="w-[30%] mx-auto flex flex-col items-center xl:items-start">
              {/* logo */}
              <a href="/">
                <img className="mb-[10px]" src={logo} alt="" />
              </a>
              {/* address */}
              <div className="max-w-[260px] mb-5 text-primary font-bold">
                {address}
              </div>
              {/* email */}
              <div className="font-light italic mb-5 text-primary1 pr-10">
                {content}
              </div>
            </div>
            {/* lists */}
            <div className="flex flex-1 flex-col gap-y-14 xl:flex-row justify-between">
              <div>
                <div className="font-extrabold text-primary mb-8">
                  Về chúng tôi
                </div>
                <ul className="flex flex-col gap-y-4">
                  {list1.map((item, index) => {
                    return (
                      <li key={index}>
                        <a className="text-primary" href={item.href}>
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* list 1 */}
              <div>
                <div className="font-extrabold text-primary mb-8">Hỗ trợ</div>
                <ul className="flex flex-col gap-y-4">
                  {list2.map((item, index) => {
                    return (
                      <li key={index}>
                        <a className="text-primary" href={item.href}>
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* list 2 */}
              <div>
                <div className="font-extrabold text-primary mb-8">
                  Thông tin
                </div>
                <ul className="flex flex-col gap-y-4">
                  {list3.map((item, index) => {
                    return (
                      <li key={index}>
                        <a className="text-primary" href={item.href}>
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* social list */}
              <div>
                <div className="font-extrabold text-primary mb-8">
                  Cập nhật hợp tác cùng Name
                </div>
                <ul className="flex gap-y-4 gap-x-4 justify-center">
                  <div className="relative flex w-full max-w-[24rem]">
                    {/* Email của bạn */}
                    <input
                      type="text"
                      placeholder="Email của bạn"
                      className="w-full h-12 px-4 text-primary1 border border-primary1 rounded-full"
                    />
                    {/* Button */}
                    <button className="absolute top-0 right-0 h-full px-6 text-white bg-primary1 rounded-full">
                      Đăng ký
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Copyright />
      </footer>
      <footer className=" mt-16 border-t border-gray-200 block md:hidden">
        <div className="mt-5 m-5">
          <div>
            <a href="/">
              <img className="mb-[10px]" src={logo} alt="" />
            </a>
          </div>
          <div className="max-w-[260px] mb-5 text-primary font-bold">
            Name Company
          </div>

          <div>
            Dựa ra các giải pháp và nghiên cứu cho khách hàng . Giúp khách hàng
            có những sự lựa chọn sản phẩm phù hợp với hiểu được làn da của chính
            mình
          </div>

          <div>
            {/* dùng gird chia mỗi hàng 2 cột */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="font-extrabold text-primary mb-2">
                  Về chúng tôi
                </div>
                <div>
                  <ul>
                    <li>
                      <a
                        href="/"
                        style={{ fontSize: "small", fontWeight: "normal" }}
                      >
                        Giới thiệu
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        style={{ fontSize: "small", fontWeight: "normal" }}
                      >
                        Tuyển dụng
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="font-extrabold text-primary mb-2">Hỗ trợ</div>
                <div>
                  <ul>
                    <li>
                      <a
                        href="/"
                        style={{ fontSize: "small", fontWeight: "normal" }}
                      >
                        Câu hỏi thường gặp
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        style={{ fontSize: "small", fontWeight: "normal" }}
                      >
                        Hướng dẫn sự dụng
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="font-extrabold text-primary mb-2">
                  Thông tin
                </div>
                <div>
                  <ul>
                    <li>
                      <a
                        href="/"
                        style={{ fontSize: "small", fontWeight: "normal" }}
                      >
                        Chính sách bảo mật
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        style={{ fontSize: "small", fontWeight: "normal" }}
                      >
                        Điều khoản sử dụng
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        style={{ fontSize: "small", fontWeight: "normal" }}
                      >
                        Liên hệ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="font-extrabold text-primary mb-2">
              Cập nhập hợp tác cùng Name
            </div>
            <div className="relative flex w-full ">
              {/* Email của bạn */}
              <input
                type="text"
                placeholder="Email của bạn"
                className="w-full h-12 px-4 text-primary1 border border-primary1 rounded-full"
              />
              {/* Button */}
              <button className="absolute top-0 right-0 h-full px-6 text-white bg-primary1 rounded-full">
                Đăng ký
              </button>
            </div>
          </div>
        </div>

        <Copyright />
      </footer>
    </>
  );
};

export default Footer;
