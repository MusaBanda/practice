import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md fixed w-full top-0 z-50">
      <div className="text-2xl font-bold">Musa Banda</div>
      <ul className="hidden md:flex gap-6 text-lg">
        <li><a href="#home" className="hover:underline">Home</a></li>
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#services" className="hover:underline">Services</a></li>
        <li><a href="#work" className="hover:underline">Work</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

