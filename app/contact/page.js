'use client'

import React, { useState } from 'react'
import { ovo } from '../layout'
import Footer from '../components/Footer'

const Contact = () => {

     const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0fea1281-eb8f-410b-bab2-6572702adba7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
  <div>
    <div
      className="text-center flex items-center justify-center min-h-screen px-4"
      style={{
        background: 'linear-gradient(135deg, rgba(114, 193, 250, 0.41), rgba(240, 237, 226, 0.4), rgba(245, 177, 230, 0.4))',
        backgroundColor: 'white',
        boxShadow: '0px 4px 20px rgba(116, 74, 74, 0.1)',
      }}
    >
      <div className="w-full max-w-5xl mx-auto">
        <h3 className={`sm:text[18px] md:text[18px] lg:text-[30px] font-bold ${ovo.className} font-bold mb-2 mt-6`}
        style={{marginTop:'3rem'}}>Connect with me</h3>
        <h1 className={`sm:text[18px] md:text[30px] font-bold lg:text-[60px] ${ovo.className}`}
        style={{marginTop:'1rem'}}>Get in touch</h1>
        <p className={`sm:text[18px] md:text[18px] lg:text-[30px] font-bold ${ovo.className} mb-12 -mt-8`}
        style={{marginTop:'1rem'}}>
          I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>

        <form onSubmit={onSubmit} className="flex flex-col gap-6 px-4" 
          style={{maxWidth:'600px', margin:'0 auto', maxHeight:'60rem', marginTop:'-3rem'}}>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Enter your name" required
              className="text-[30px] p-4 rounded-xl w-full" name='name'
              style={{ borderRadius:'1rem', marginBottom:'3rem', marginRight:'1rem', 
                marginTop:'5rem', height:'3rem', }}
            />
            <input
              type="email"  placeholder="Enter your email" required
              className="text-[30px] p-4 rounded-xl w-full" name='email'
              style={{ borderRadius:'1rem', marginBottom:'3rem', marginleft:'1rem', 
                marginTop:'5rem', height:'3rem', }}
            />
          </div>

          <textarea
            placeholder="Enter your message" required
            className="text-[30px] p-6 rounded-xl w-full h-[360px] resize-none bg-white" name='message'
            style={{ borderRadius:'1rem', marginBottom:'6rem',}}
          ></textarea>

          <div className="flex gap-6 justify-center mt-4">
            <button type="submit" className="text-[40px] bg-gray-200 px-8 py-2 rounded-xl
            "style={{borderRadius:'2rem', color:'white', background:'black', marginRight:'1rem', 
            width:'10rem', height:'5rem', marginBottom:'-10rem',}}
            >Send</button>
            <button type="reset" className="text-[40px] bg-gray-200 px-8 py-2 rounded-xl"
            style={{borderRadius:'2rem', color:'white', background:'black', marginRight:'1rem', 
            width:'10rem', height:'5rem', marginBottom:'-10rem',}}>Reset</button>
          </div>
          <p className='text-[30px] mt-4' style={{margin:'5rem'}}>{result}</p>
        </form>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Contact
