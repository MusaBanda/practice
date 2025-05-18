"use client";
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { ovo, roboto } from '../layout';

const Navbar = () => {

  // Scroll state

  const [isScroll, setIsScroll] = useState(false);
 
  const sideMenuRref = useRef();

  const openMenu = () => {
    sideMenuRref.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRref.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

// Show only on large screens

  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowContent(window.innerWidth >= 1024); 
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [columns, setColumns] = useState(1);
  
  useEffect(() => {
    const handleResize = () => {
      setColumns(window.innerWidth >= 1024 ? 5 : 5);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // Font size state

  const [fontSize, setFontSize] = useState("14px");

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth >= 1024 ? "25px" : "14px");
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div  className='w-full h-[0px]' style={{ marginTop: '0rem', marginBottom: '0rem' }}>
     

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50  
        ${isScroll ? "bg-[#ffe6e6] bg-opacity-50 backgrop-blur-lg shadow-sm" : ""}`}>
        
        {showContent && (<h1 
          className={` sm:text-[30px] md:text-[60px] lg:text-[120px] font-bold ${roboto.className}`}
          style={{ color: 'black', marginLeft: '2.5rem', marginTop: '1rem' }}
        >
          MusaBanda<span style={{ color: 'red' }}>.</span>
        </h1>)}

        <ul
          className='list-none'
          style={{ 
            padding: '1rem',
             borderRadius: '2rem' ,border: '1px solid white',
            backgroundColor: 'white',
            marginRight: '0rem',
            marginTop: '1.5rem',
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 5fr)`
          }}
        >
          <li><a className={`sm:text-[18px] md:text-[20px] lg:text-[30px] no-underline ${ovo.className}`} 
          style={{ color: 'black', fontSize, }} href='#top'>Home</a></li>
          <li><a className={`sm:text-[18px] md:text-[20px] lg:text-[30px] no-underline ${ovo.className}`} 
          style={{ color: 'black', fontSize,}} href='about'>About Me</a></li>
          <li><a className={`sm:text-[18px] md:text-[20px] lg:text-[30px] no-underline ${ovo.className}`} 
          style={{ color: 'black', fontSize, }} href='#services'>Services</a></li>
          <li><a className={`sm:text-[18px] md:text-[20px] lg:text-[30px] no-underline ${ovo.className}`} 
          style={{ color: 'black', fontSize, }} href='work'>My Work</a></li>
          <li><a className={`sm:text-[18px] md:text-[20px] lg:text-[30px] no-underline ${ovo.className}`} 
          style={{ color: 'black', fontSize, }} href='contact'>Contact Me</a></li>
        </ul>

        <div className='flex items-center gap-4'>
          {showContent && (<Image 
            src={assets.moon_icon} 
            alt='moon_icon' 
            width={40} 
            height={40} 
            className='cursor-pointer mr-14' 
            style={{ marginLeft: '2.5rem', marginRight: '0.5rem', marginTop: '0.5rem' }} 
          />)}

          {showContent && (<a 
            href='contact' 
            className={`sm:text-[18px] md:text-[20px] lg:text-[30px] no-underline bg-[white] ${ovo.className}`}  
            style={{
              padding: '1rem',
              color: 'black',
              marginTop: '0.8rem',
              marginBottom: '0.5rem',
              border: '2px solid #ccc',
              borderRadius: '2rem',
              marginLeft: '0.5rem',
              marginRight: '1rem'
            }}
          >
            CONTACT
            <Image 
              src={assets.arrow_icon} 
              alt='' 
              width={15} 
              height={15} 
              style={{ marginLeft: '1rem' }} 
            />
          </a>)}

          <a 
            href='' 
            className='hidden block md:hidden ml-3' 
            onClick={openMenu}
          >
            <Image src={assets.menu_black} alt='' width={40} height={40} />
          </a>
        </div>

        {/* Mobile Menu */}
        <ul 
          ref={sideMenuRref} 
          className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-60 top-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'
        >
          <div className='absolute top-5 right-5' onClick={openMenu}>
            <Image src={assets.close_black} alt='' className='w-4 cursor-pointer' />
          </div>
          <li><a className='font-Ovo' onClick={openMenu} href='#top'>Home</a></li>
          <li><a className='font-Ovo' onClick={openMenu} href='about'>About Me</a></li>
          <li><a className='font-Ovo' onClick={openMenu} href='#services'>Services</a></li>
          <li><a className='font-Ovo' onClick={openMenu} href='work'>My Work</a></li>
          <li><a className='font-Ovo' onClick={openMenu} href='contact'>Contact me</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
