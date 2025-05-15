import React from 'react'
import {
  IoLogoNodejs, IoLogoHtml5, IoLogoCss3, IoLogoReact
} from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGit, FaBootstrap } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { SiJavascript, SiMongodb, SiMysql } from "react-icons/si";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiNextjsFill } from "react-icons/ri";

const icons = [
  IoLogoReact, IoLogoNodejs, IoLogoCss3, IoLogoHtml5, RiTailwindCssFill,
  FaGit, FaBootstrap, VscVscode, SiJavascript,RiNextjsFill,  SiMongodb, SiMysql
];

function Slick() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className='my-12 relative overflow-hidden '>
      <div className="bg-green-500 transform -skew-y-[-2] p-3">
        {/* Content un-skewed to remain normal */}
        <div className="transform skew-y-[-2] max-w-full  ">
          <Slider {...settings}>
            {icons.map((Icon, index) => (
              <div key={index} className='flex justify-center items-center'>
                <Icon className="text-black text-3xl md:text-5xl hover:text-white transition duration-300" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Slick;
