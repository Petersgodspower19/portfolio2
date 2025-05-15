import React from 'react'
import { IoCubeOutline } from "react-icons/io5";

function About() {
  return (
    <div className='mt-4 p-6 md:px-24'>
      {/* Top Heading Section */}
      <div className='flex items-center justify-between overflow-x-hidden'>
        <div className='flex flex-col gap-2 w-full md:w-[450px]'>
          <h3 className='text-green-500 text-[16px] font-bold'>About Me</h3>
          <p className='text-2xl text-white font-semibold'>
            I can deliver results that exceed your expectations
          </p>
          <a href="mailto:petersgodspower95@gmail.com">
            <button className='bg-inherit mt-2 border border-gray-400 text-gray-400 p-[5px] w-[120px]'>
            Hire Me Now
          </button>
          </a>
        </div>
        <IoCubeOutline className='text-gray-400 text-[29px] md:text-[35px]' />
      </div>

      {/* About Description Right Side */}
      <div className='mt-8 relative flex md:justify-end'>
        <div className='hidden md:block md:absolute left-0 top-2.5'>
         <IoCubeOutline className='text-gray-400 text-[29px] md:text-[35px]'/>
        </div>
        <div className='w-full md:w-[500px] md:text-right'>
          <p className='text-sm text-gray-500'>
            I'm a frontend-focused web developer with hands-on experience 
            in building responsive and user-friendly applications using React, Redux Toolkit, and Tailwind CSS.
            I enjoy creating seamless user experiences with tools like React Router, Framer Motion, and AOS for smooth navigation and animation. On the backend, I'm currently learning and building with Node.js, Express, and MySQL using Sequelize. I'm familiar with RESTful APIs, JWT-based authentication, and have deployed projects on platforms like Vercel and Netlify. I'm constantly improving my skills, diving deeper into full-stack development, 
            and exploring TypeScript and testing best practices.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
