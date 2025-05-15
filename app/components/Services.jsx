import { serviceData } from "@/assets/assets";
import { useState } from "react";
import assets from "@/assets/assets";
import Image from "next/image";
import React from "react";  
import { ovo, roboto } from "../layout";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredToolIndex, setHoveredToolIndex] = useState(null);
    return (
        <div id="services" className="text-center mb-10 scroll-smooth">
        <h4 className={`text-[40px] font-bold ${ovo.className}`}>What I offer</h4>
        <h2 className={`text-[80px] ${ovo.className}`}>My Services</h2>
        <p></p>

        <div className='grid grid-cols-4 gap-4 my-10'>
        {serviceData.map(({ icon, title, description, link }, index) => {
           const isHovered = hoveredToolIndex === index;
               return (
                    <div
                       key={index}
                       onMouseEnter={() => setHoveredToolIndex(index)}
                       onMouseLeave={() => setHoveredToolIndex(null)}
                style={{
                    minWidth: '1px', padding: '3rem',               
                    border: '1px solid #ccc', borderRadius: '1rem',
                    marginLeft: '1rem', marginRight: '1rem',  marginBottom:'2rem',
                    flexShrink: 0, cursor: 'pointer',                
                    backgroundColor: isHovered ? '#ebf8ff' : 'white',
                    boxShadow: isHovered ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
                    transform: isHovered ? 'translateY(-5px)' : 'none',
                    transition: 'all 0.3s ease',
                    }}
                >
      <Image src={icon} alt='' width={40} height={40} />
      <h3 className={`text-[30px] ${roboto.className}`}>{title}</h3>
      <p className={`text-[22px] ${ovo.className}`}>{description}</p>
      <a href={link} className={`items-center gap-2 text-[30px] mt-5 ${roboto.className}`}>
        read more
        <Image src={assets.right_arrow} alt='' width={26} height={26} />
      </a>
    </div>
  );
})}

        </div>
      </div>
    )
}

export default Services;
