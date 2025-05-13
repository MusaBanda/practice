'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import assets, { infoList, toolsData } from '@/assets/assets';
import { ovo } from "../layout";
import Footer from '../components/Footer';

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredToolIndex, setHoveredToolIndex] = useState(null);

  return (
    <div id="it" className={`px-5 py-4 ${ovo.className}`}>
      <div className="text-center mb-10">
        <h4 className={`text-[40px] ${ovo.className}`}>Introduction</h4>
        <h2 className={`text-[80px] ${ovo.className}`}>About Me</h2>
      </div>

      <div className="flex flex-col items-center md:flex-row gap-4 w-full">
        <div className="w-64 sm:w-80 rounded-xl">
          <Image 
            src={assets.about_pic} 
            alt="" 
            style={{ borderRadius: '3rem'}}
            width={500} 
            height={800} 
          />
        </div>

        <div className="flex flex-col items-center md:items-start md:ml-8">
          <p className="text-[40px] text-justify">{/* Empty paragraph for spacing */}</p>

          <p className={`text-[40px] text-justify ${ovo.className} mb-6`}>
            I'm a front-end web developer from South Africa, skilled in HTML, CSS, JavaScript, and React. 
            I create clean, responsive websites, focusing on both function and design. I enjoy building interactive 
            digital experiences that people love using.
          </p>

          <ul className="flex gap-6 overflow-x-auto list-none p-0 m-0 mb-8">
            {infoList.map(({ icon, title, description }, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <li
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="min-w-[280px] p-6 border rounded-xl cursor-pointer transition-all transform hover:scale-105 hover:shadow-lg"
                  style={{
                    backgroundColor: isHovered ? '#ebf8ff' : 'white',
                  }}
                >
                  <Image src={icon} alt={title} className="w-1 mt-3" />
                  <h3 className="text-[25px] text-gray-700">{title}</h3>
                  <p className="text-[20px] text-gray-600">{description}</p>
                </li>
              );
            })}
          </ul>

          <p className={`text-[30px] text-justify ${ovo.className} mb-6`}>
            Tools I Use
          </p>

          <ul className="flex gap-4 items-center justify-center sm:gap-5">
            {toolsData.map((tool, index) => {
              const isHovered = hoveredToolIndex === index;
              return (
                <li
                  key={index}
                  onMouseEnter={() => setHoveredToolIndex(index)}
                  onMouseLeave={() => setHoveredToolIndex(null)}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border-5 rounded-full cursor-pointer transition-all transform hover:scale-105 hover:shadow-lg"
                  style={{
                    backgroundColor: isHovered ? '#ebf8ff' : 'white',
                  }}
                >
                  <Image src={tool} alt="tool" className="w-5" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
