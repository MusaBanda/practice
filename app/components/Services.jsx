import { serviceData } from "@/assets/assets";
import { useState } from "react";
import assets from "@/assets/assets";
import Image from "next/image";
import React from "react";  
import { ovo, roboto } from "../layout";

const Services = () => {
  const [hoveredToolIndex, setHoveredToolIndex] = useState(null);

  return (
    <div id="services" className="text-center py-10 px-4">
      <h4 className={`text-2xl sm:text-3xl font-bold ${ovo.className}`}>What I offer</h4>
      <h2 className={`text-4xl sm:text-6xl ${ovo.className}`}>My Services</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
        {serviceData.map(({ icon, title, description, link }, index) => {
          const isHovered = hoveredToolIndex === index;
          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredToolIndex(index)}
              onMouseLeave={() => setHoveredToolIndex(null)}
              className="p-6 border rounded-2xl shadow-sm cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
              style={{
                backgroundColor: isHovered ? '#ebf8ff' : 'white'
              }}
            >
              <Image src={icon} alt='' width={40} height={40} />
              <h3 className={`text-xl font-semibold mt-2 ${roboto.className}`}>{title}</h3>
              <p className={`text-md mt-1 ${ovo.className}`}>{description}</p>
              <a href={link} className={`inline-flex items-center gap-1 mt-4 text-blue-500 ${roboto.className}`}>
                Read more <Image src={assets.right_arrow} alt='' width={20} height={20} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;