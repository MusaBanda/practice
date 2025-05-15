'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import assets, { infoList, toolsData } from '@/assets/assets';
import { ovo } from "../layout";
import Footer from '../components/Footer'


const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredToolIndex, setHoveredToolIndex] = useState(null);

  return (
    <div id="it" className={`px-5 py-4 items-center justify-center ${ovo.className}`}>
      
      <div className="text-center mb-10">
        <h4 className={`text-[40px] ${ovo.className}`}>Introduction</h4>
        <h2 className={`text-[80px] ${ovo.className}`}>About Me</h2>
      </div>

      <div className="-mx-[0px] -my-[1px] w-full flex">
        <div className="w-64 sm:w-80 rounded-xl max-w-none">
          <Image 
            src={assets.about_pic} 
            alt="" 
            style={{ marginLeft: '9rem', marginRight: '5rem', marginTop: '11rem', borderRadius: '3rem'}}
            width={500} 
            height={800} 
          />
        </div>

        <div className="flex flex-col">
          <p className="text-[40px] " style={{ marginLeft: '5rem', marginRight: '5rem', marginBottom: '5rem'}}></p>

          <p className={`text-[40px] text-justify ${ovo.className}`} style={{ marginLeft: '8rem', marginRight: '27rem', marginBottom: '5rem' }}>
            I'm a front-end web developer from South Africa, skilled in HTML, CSS, JavaScript, and React. 
            I create clean, responsive websites, focusing on both function and design. I enjoy building interactive 
            digital experiences that people love using.
          </p>

          <ul className="flex gap-6 overflow-x-auto list-none p-0 m-0" style={{ marginLeft: '5rem', marginRight: '5rem' }}>
            {infoList.map(({ icon, title, description }, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <li
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    minWidth: '300px', padding: '3rem',
                    border: '1px solid #ccc', borderRadius: '2rem',
                    marginLeft: '1rem', marginRight: '1rem',
                    flexShrink: 0, cursor: 'pointer',
                    backgroundColor: isHovered ? '#ebf8ff' : 'white',
                    boxShadow: isHovered ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
                    transform: isHovered ? 'translateY(-5px)' : 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Image src={icon} alt={title} className="w-1 mt-3" />
                  <h3 className="text-[25px] text-gray-700">{title}</h3>
                  <p className="text-[20px] text-gray-600">{description}</p>
                </li>
              );
            })}
          </ul>

          <p4 className={`text-[30px] text-justify ${ovo.className}`} style={{ marginLeft: '8rem', marginTop: '4rem' }}>
            Tools I Use
          </p4>

          <ul className={`flex items-center gap-3 sm:gap-5 ${ovo.className}`} style={{ marginLeft: '5rem' }}>
            {toolsData.map((tool, index) => {
              const isHovered = hoveredToolIndex === index;
              return (
                <li
                  key={index}
                  onMouseEnter={() => setHoveredToolIndex(index)}
                  onMouseLeave={() => setHoveredToolIndex(null)}
                  style={{
                    minWidth: '1px', padding: '1rem',                  
                    border: '5px solid #ccc',borderRadius: '5rem',                   
                    marginLeft: '1rem', marginRight: '2rem',marginTop: '2rem',                    
                    flexShrink: 0,cursor: 'pointer',                    
                    transition: 'all 0.3s ease',
                    transform: isHovered ? 'translateY(-5px)' : 'none',
                    boxShadow: isHovered ? '0 4px 10px rgba(0,0,0,0.1)' : 'none',
                  }}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square"
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
