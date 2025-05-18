'use client';

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import { useState, useEffect } from "react";




export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
      if (isDarkMode) {
          document.documentElement.classList.add('dark');
          localStorage.theme = 'dark';
      }else {
          document.documentElement.classList.remove('dark');
          localStorage.theme = '';
      }
  }, [isDarkMode]);

  return (
    <>
    <Navbar />
    <Header />
    <Services />
    <Footer />
    </>
  );
}

