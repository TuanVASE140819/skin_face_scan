import React from 'react';

// import hero data
import { heroData } from '../data';

// import components
import Header from './Header';

const Hero = () => {
  // destructure hero
  const { title,title2, subtitle, btnText, image, image2} = heroData;
  return (
    <section className='lg:h-[830px]'>
      <Header />
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col xl:flex-row items-center h-full md:py-24'>
          {/* text */}
          <div className='text-center xl:text-left xl:absolute'>
            {/* title */}
            <h1
              className='h2 xl:max-w-[700px]'
              data-aos='fade-down'
              data-aos-delay='400'
            >
              {title}
            </h1>

            <h1
  className='h2 xl:max-w-[700px] text-orange-500'
  data-aos='fade-down'
  data-aos-delay='400'
>
  {title2}
</h1>
            {/* subtitle */}
            <p
              className='lead xl:max-w-[380px] mb-6 lg:mb-12'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              {subtitle}
            </p>
            <button
  className='btn btn-primary mb-8 xl:mb-0'
  style={{display: 'flex', alignItems: 'center'}}
  data-aos='fade-down'
  data-aos-delay='600'
>
  <img src={image2} alt='' className='w-10 h-10 mr-2' />
  {btnText}
</button>


 {/* tạo ra 3 nút nằm ngang */}
 <div className="flex justify-center pt-5"
  data-aos='fade-down'
  data-aos-delay='600'>
  <div className="flex flex-col mr-5 bg-gray-200 p-5 px-10 rounded-lg">
    <div>Bước 1</div>
    <div className=" text-lg font-bold">
      Quét da</div>
  </div>
  <div className="flex flex-col mr-5 bg-gray-200 p-5 px-10 rounded-lg">
    <div>Bước 2:</div>
    <div className=" text-lg font-bold">
      Khảo sát chuyên sâu</div>
  </div>
  <div className="flex flex-col mr-5 bg-gray-200 p-5 px-10 rounded-lg">
    <div>Bước 3:</div>
    <div className=" text-lg font-bold">
      Nhận kết quả</div>
  </div>
</div>
          </div>
          {/* image */}
          <div
            className=' pt-5 xl:absolute xl:-right-12'
            data-aos='fade-up'
            data-aos-delay='700'
          >
            <img src={image} alt='' />
          </div>
        </div>
      </div>


    </section>
  );
};
export default Hero;
