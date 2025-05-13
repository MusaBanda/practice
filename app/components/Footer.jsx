import React from 'react';
import Image from 'next/image';
import assets from '@/assets/assets';

function Footer() {
  return (
    <div className="mt-20 bg-[#ffe6e6] w-full h-[40rem]">
      <div className="text-center">
        <Image src={assets.logo_white} alt='' className='w-36 mx-auto mb-2 mt-8' />

        <div className="text-[30px] w-max flex items-center gap-2 mx-auto mb-2">
          <Image src={assets.mail_icon} alt='' className='w-6' />
          mosa.banda@hotmail.com
        </div>
      </div>

      <div className="text-[30px] text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Mthimkhulu Musa. All rights reserved.</p>
        <ul className="list-none text-[50px] flex gap-6 justify-center sm:gap-10">
          <li><a target='_blank' href="https://github.com/MusaBanda">Github</a></li>
          <li><a target='_blank' href="https://instagram.com/@musa_banda_kamthimkhulu/">Instagram</a></li>
          <li><a target='_blank' href="https://facebook.com/@mosa.banda.9/">Facebook</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
