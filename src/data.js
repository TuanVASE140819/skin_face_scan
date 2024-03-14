// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import AboutImg from '../src/assets/img/about.png';
import Feature1Img from '../src/assets/img/features/feature1.png';
import Feature2Img from '../src/assets/img/features/feature2.png';
import Feature3Img from '../src/assets/img/features/feature3.png';
import Feature4Img from '../src/assets/img/features/feature4.png';
import Avatar1Img from '../src/assets/img/testimonials/avatar1.png';
import Avatar2Img from '../src/assets/img/testimonials/avatar2.png';
import Avatar3Img from '../src/assets/img/testimonials/avatar3.png';
import LogoV2 from '../src/assets/img/logo-v2.png';
import HeroImage from '../src/assets/img/aigirl.png';
import Feature1BgImg from '../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../src/assets/img/features/feature4_bg.png';
import QRImage from '../src/assets/img/Qr.png';
import user from '../src/assets/img/human.png';
import bacsi from '../src/assets/img/human2.png';
import light from '../src/assets/img/den.png';
import image from '../src/assets/img/hinh.png';
import product from '../src/assets/img/giay.png';


export const navigationData = [
  {
    name: "Thông tin",
    href: "/thong_tin",
  },
  {
    name: "Giới thiệu",
    href: "/gioi_thieu",
  },
  {
    name: "Skin Care Scan",
    href: "/skin_care_scan",
  },
  {
    name: "Cam kết",
    href: "/cam ket",
  },
  {
    name: "Review",
    href: "/review",
  },
  {
    name: "Bí quyết chăm sóc da",
    href: "/bi_quyet_cham_soc_da",
  },
  {
    name: "Liên hệ",
    href: "/lien_he",
  },
];

export const heroData = {
  title: `Chuẩn Đoán Tình Trạng Da`,
  title2: `Chỉ trong 7s`,
  subtitle:
    "Ứng dụng phân tích chuẩn đoán da tích hợp trí tuệ thông minh nhân tạo AI chỉ trong 3 bước thưc hiên đã nhận ngay kết quả.",
  btnText: "Trải nghiệm ngay",
  image: HeroImage,
  image2: QRImage,
};

export const statisticalData = [
  {
    title: "2000",
    subtitle: "Số người dùng trải nghiệm",
    image: user,
  },
  {
    title: "500",
    subtitle: "Bác sĩ cho lời khuyên về da",
    image: bacsi,
  },
  {
    title: "2000",
    subtitle: "Nghiên cứu và Ứng dụng",
    image: light,
  },
  {
    title: "45000000",
    subtitle: "Hình ảnh được xử lý chuẩn đoán phân tích",
    image: image,
  },
  {
    title: "20",
    subtitle: "Sản phẩm cấp bằng sáng chế",
    image: product,
  },
];

export const contentInfoData = [
  {
    image: user,
    title: "Da Mụn",
  },
  {
    image: user,
    title: "Da Khô",
  },
  {
    image: user,
    title: "Da Dầu",
  },
  // {
  //   image: user,
  //   title: "Da Nhạy Cảm",
  // },
  // {
  //   image: user,
  //   title: "Da Lão Hóa",
  // },
  // {
  //   image: user,
  //   title: "Da Thường",
  // },
];

export const productInfoData = [
  {
    image: 'https://via.placeholder.com/200x300',
    title: "Mặt Nạ Kem CKD Retinol Collagen Tiểu Phân Tử 50g",
  },
  {
    image: 'https://via.placeholder.com/200x300',
    title: "Mặt Nạ Kem CKD Retinol Collagen Tiểu Phân Tử 50g",
  },
  {
    image: 'https://via.placeholder.com/200x300',
    title: "Mặt Nạ Kem CKD Retinol Collagen Tiểu Phân Tử 50g",
  },
  {
    image: 'https://via.placeholder.com/200x300',
    title: "Mặt Nạ Kem CKD Retinol Collagen Tiểu Phân Tử 50g",
  },
];



export const aboutData = {
  image: AboutImg,
  title: "Find Out A Little More About Us",
  subtitle:
    "We are a company dedicated to the distribution of products by delivery to your home or to the place where you are, with the best quality of delivery.",
};

export const featuresData = {
  title: "Some Services We Offer",
  subtitle:
    "With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!",
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: "Payment Done",
      description: "Pay with a Visa or PayPal card and without much ado",
      linkText: "Learn more",
      delay: "400",
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: "Find Your Product",
      description: "We offer sale of products through the Internet..",
      linkText: "Learn more",
      delay: "700",
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: "Print Out",
      description:
        "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
      linkText: "Learn more",
      delay: "1000",
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: "Product Received",
      description: "In our app you can see the delay time of your order...",
      linkText: "Learn more",
      delay: "1300",
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: "Serena",
    web: "rena.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "300",
  },
  {
    image: Avatar2Img,
    name: "Natalia",
    web: "nataliya.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "600",
  },
  {
    image: Avatar3Img,
    name: "Vebin",
    web: "vebin.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "900",
  },
];

export const ctaData = {
  title: "Contact Us From Here",
  subtitle: "Get limited 1 week free try our features!",
  btnText1: "Learn more",
  btnText2: "Request Demo",
};

export const footerData = {
  logo: LogoV2,
  address: "Name Company",
  email: "info@producttexas.project",
  phone: "1-232-7788 (Main)",
  content:
    "Đưa ra các giải pháp và nghiên cứu cho khách hàng, Giúp khách hàng tối ưu hóa chi phí và tăng cường hiệu quả công việc.",
  list1: [
    {
      name: "Giới thiệu",
      href: "#",
    },
    {
      name: "Review",
      href: "#",
    },
  ],
  list2: [
    {
      name: "Câu hỏi thường gặp",
      href: "#",
    },
    {
      name: "Hướng dẫn sự dụng",
      href: "#",
    },
  ],
  list3: [
    {
      name: "Chính sách bảo mật",
      href: "#",
    },
    {
      name: "Điều khoản sử dụng",
      href: "#",
    },
    {
      name: "Liên hệ",
      href: "#",
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: "#",
    },
    {
      icon: <FaInstagram />,
      href: "#",
    },
    {
      icon: <FaGithub />,
      href: "#",
    },
  ],
};

export const copyrightData = {
  text: '© Product Texas, 2022. All rights reserved. Company Registration Number: 09833888.',
  icon: <BsChatDotsFill />,
};
