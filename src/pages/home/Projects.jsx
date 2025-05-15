import React from 'react'
import blog from "../../assets/blog.png"
import fancyToDo from "../../assets/fancyToDo.png"
import pollify from "../../assets/pollify.png"
import relentless from "../../assets/relentless.png"
import portfolio from "../../assets/portfolio.png"
import advise from "../../assets/advise.png"

const projects = [
  {
    img: blog,
    description: "Blog is a full-stack social media platform where users can tweet, retweet and follow other users.",
    link: "https://blog-psi-vert-87.vercel.app/getting-started"
  },
  {
      description:
        "A minimalistic app that generates random advice using an API, perfect for quick and meaningful suggestions.",
      img: advise,
      link: "https://advice-generator-with-react-js.vercel.app/",
    },
  {
    img: relentless,
    description: "Relentless is a cloting brand and this is the frontend/UI of how the brand is going to look when its lauched",
    link: "https://relentless-roan.vercel.app/"
  },
  {
    img: pollify,
    description: "Pollify 🗳️ Pollify is a real-time polling web application built with Next.js, MongoDB, and Socket.IO. It allows users to create, vote on, and view live results of polls — all in real time. ",
    link: "https://pollify-six.vercel.app/"
  },
   {
    img: portfolio,
    description: "This is the first version of my portfolio website",
    link: "https://petersgodspower.vercel.app/"
  }
]

function Projects() {
  return (
    <section className="py-20 px-6 md:px-20 text-white bg-[#000]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-4">
        <h2 className="text-3xl font-bold tracking-widest text-center md:text-left">
          PROJECTS
        </h2>
        <a
          href="https://github.com/Petersgodspower19?tab=repositories" 
          target="_blank"
          rel="noopener noreferrer"
          className='mx-auto md:mx-0'
        >
          <button className="border border-gray-500 text-gray-400 px-6 py-2 rounded-md hover:bg-gray-800 hover:text-white transition duration-300">
            More on my GitHub
          </button>
        </a>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className='bg-[hsl(0,0%,10%)] p-4 rounded-[10px] flex flex-col justify-between shadow-lg hover:shadow-green-500/50 transition-shadow duration-300'
          >
            <img 
              src={project.img} 
              alt={`Screenshot of project ${index + 1}`}  
              className='rounded-[10px] w-full h-[200px] object-cover mb-4'
            />
            <p className='text-sm text-gray-400 mb-6 flex-grow'>
              {project.description}
            </p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block text-green-500 border border-green-500 px-4 py-2 rounded-md text-center font-semibold hover:bg-green-500 hover:text-black transition duration-300"
            >
              Visit
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
