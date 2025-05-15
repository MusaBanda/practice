import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from "@/assets/assets";
import { roboto, ovo } from "../layout";

const Header = () => {
  const [isContactClicked, setIsContactClicked] = useState(false);
  const [isResumeClicked, setIsResumeClicked] = useState(false);

  const handleContactClick = () => {
    setIsContactClicked(true);
    setTimeout(() => setIsContactClicked(false), 300);
  };

  const handleResumeClick = () => {
    setIsResumeClicked(true);
    setTimeout(() => setIsResumeClicked(false), 300);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center gap-6 px-4 md:px-12 bg-gradient-to-b from-[#f9f9f9] to-[#fff]'>
      <Image src={assets.mypic} width={160} height={160} alt='' className='rounded-full mb-6' />

      <h3 className={`text-3xl md:text-4xl font-bold ${ovo.className}`}>Hi I am Musa Dick Banda <Image src={assets.hand_icon} alt='' /></h3>
      <h1 className={`text-4xl md:text-6xl font-bold ${ovo.className}`}>Front-end web developer based in South Africa</h1>
      <p className={`text-xl md:text-2xl ${ovo.className}`}>I'm a beginner front-end web developer, learning and growing every day.</p>

      <div className='flex flex-col sm:flex-row gap-4 mt-6'>
        <a
          href="#contact"
          className={`text-xl px-6 py-3 border-4 rounded-full ${roboto.className}`}
          onClick={handleContactClick}
          style={{
            backgroundColor: isContactClicked ? 'orange' : '#000',
            color: '#fff',
            transition: 'all 0.3s ease'
          }}
        >
          CONTACT ME <Image src={assets.phone_icon} width={30} height={30} alt='' />
        </a>

        <a
          href="/cv.pdf" download
          className={`text-xl px-6 py-3 border-4 rounded-full ${roboto.className}`}
          onClick={handleResumeClick}
          style={{
            backgroundColor: isResumeClicked ? 'orange' : 'transparent',
            color: isResumeClicked ? '#fff' : '#000',
            transition: 'all 0.3s ease'
          }}
        >
          MY RESUME <Image src={assets.download_icon} width={30} height={30} alt='' />
        </a>
      </div>
    </div>
  );
};


export default Header;