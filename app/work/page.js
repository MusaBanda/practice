'use client';

import React from "react";
import { ovo } from "../layout";
import Footer from '../components/Footer';

const Work = () => {
  return (
    <div id="work" className='bg-[#F5F5F5]'>
      <div className="text-center py-10">
        <h4 className={`text-[50px] font-bold ${ovo.className}`}>My Portfolio</h4>
      </div>

      <div className="text-center mb-10 px-4 sm:px-8 lg:px-40">
        <h2 className={`text-[30px] ${ovo.className}`}>My work</h2>
        <p className={`text-[30px] ${ovo.className}`}>
          I have worked on several projects, including personal and collaborative ones.
          My portfolio showcases my skills in front-end development, with a focus on creating
          responsive and user-friendly interfaces. I am always eager to learn and take on new challenges.
          I am currently looking for opportunities to work on exciting projects and expand my skill set.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Work;

