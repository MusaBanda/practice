'use client';

import React, { useState } from 'react';
import { ovo } from '../layout';
import Footer from '../components/Footer';

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
    <div className="min-h-screen flex justify-center items-center px-4 bg-gradient-to-b from-[#72c1fa] to-[#f0ede2]">
      <div className="w-full max-w-5xl mx-auto">
        <h2 className={`text-[33px] ${ovo.className} font-bold mb-2 mt-6`}>Connect with me</h2>
        <h4 className={`text-[70px] ${ovo.className}`}>Get in touch</h4>
        <p className={`text-[30px] ${ovo.className} mb-12`}>I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>

        <form onSubmit={onSubmit} className="flex flex-col gap-6 px-4" style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="text-[30px] p-4 rounded-xl w-full"
              name="name"
            />
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="text-[30px] p-4 rounded-xl w-full"
              name="email"
            />
          </div>

          <textarea
            placeholder="Enter your message"
            required
            className="text-[30px] p-6 rounded-xl w-full h-[360px] resize-none bg-white"
            name="message"
          ></textarea>

          <div className="flex gap-6 justify-center mt-4">
            <button
              type="submit"
              className="text-[40px] bg-black text-white px-8 py-2 rounded-xl w-32 h-16"
            >
              Send
            </button>
            <button
              type="reset"
              className="text-[40px] bg-black text-white px-8 py-2 rounded-xl w-32 h-16"
            >
              Reset
            </button>
          </div>

          <p className="text-[30px] mt-4">{result}</p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

