import React from 'react';

import {statisticalData} from '../data';

const Statistical = () => {
  // destructure hero
  const  {title, subtitle, image} = statisticalData;
  return (
    <section className="flex justify-center">
    {
      statisticalData.map((item, index) => {
        return (
          <div className="flex items-center mr-5 p-5 bg-gray-200 rounded-lg" key={index}>
            <img src={item.image} alt="logo" className="w-10 h-10"/>
            <div>
              <div className="text-lg font-bold">{item.title}</div>
              <div>{item.subtitle}</div>
            </div>
          </div>
        )
      })
    }
  </section>
  );
};
export default Statistical;
