import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 p-6 md:px-24 flex items-center justify-between transition-shadow duration-300 bg-black ${isScrolled ? "shadow-lg" : ""}`}>
      <NavLink to="/" className="text-4xl outline-0 text-green-500 font-bold">G</NavLink>


      <a href="mailto:petersgodspower95@gmail.com" className=" outline-0">
        <button className="bg-inherit border cursor-pointer border-gray-400 text-gray-400 p-2 w-[120px]">
          Get in Touch
        </button>
      </a>
    </div>
  );
}

export default Header;
