import React from 'react';
import { FaGithub, FaTiktok, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Hero() {
  return (
    <div className="mt-20 p-6 md:px-24">
      <div className="w-full md:w-[500px]">
        <h1 className="text-white font-bold text-4xl md:text-6xl">Peters Godspower</h1>
        <p className="text-sm text-gray-400 mt-5 mb-4">
          Hello, my name is Peters Godspower. It's a pleasure meeting you and I would like to welcome you to my personal portfolio.
        </p>
      </div>
      <div className="flex mt-7 items-center justify-start gap-3">
        <a href="https://www.linkedin.com/in/peters-godspower-51a523314/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn className="text-green-500 text-[17px] md:text-[20px] cursor-pointer" />
        </a>
        <a href="https://facebook.com/profile.php?id=61569191784683" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF className="text-green-500 text-[17px] md:text-[20px] cursor-pointer" />
        </a>
        <a href="https://github.com/Petersgodspower19" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="text-green-500 text-[17px] md:text-[20px] cursor-pointer" />
        </a>
        <a href="https://tiktok.com/codewgodspower/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <FaTiktok className="text-green-500 text-[17px] md:text-[20px] cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/codewgodspower/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <AiFillInstagram className="text-green-500 text-[17px] md:text-[20px] cursor-pointer" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
