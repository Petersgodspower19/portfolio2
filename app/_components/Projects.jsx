import { FaHome, FaGraduationCap, FaTshirt } from "react-icons/fa";
import relentlessImg from "../../public/relentless.png"
import campuscrib from "../../public/campusCrib.png"
import skillfoundryImg from "../../public/skillfoundry hero.png"
import Image from "next/image";

const projects = [
  {
    title: "Campus Crib",
    category: "PROPERTY / DIRECTORY",
    image: campuscrib,
    description:
      "A student-focused housing and apartment discovery platform that helps users find hostels and off-campus accommodation. Features search, listing pages, location details, and responsive UI optimized for mobile users.",
    link: "https://campus-crib-ashy.vercel.app/"
  },
  {
    title: "SkillFoundry",
    category: "EDUCATION / LMS",
    image: skillfoundryImg,
    description:
      "A learning management system where teachers can create and manage courses while students browse and enroll. Includes authentication, role-based access, dashboards, and course management tools.",
    link: "https://skillfoundry-sigma.vercel.app/"
  },
  {
    title: "Relentless",
    category: "ECOMMERCE / BRAND",
    image: relentlessImg,
    description:
      "A modern clothing brand website built to showcase products, brand identity, and collections. Focused on clean UI, fast loading performance, and mobile-first shopping experience.",
    link: "https://relentless-roan.vercel.app/"
  }
];



export default function Projects() {
  return (
    <section id="projects">
      <div className="section-header ">
        <span className="section-tag">Projects</span>
        <h2 className="section-title">Featured Work</h2>
        <p className="section-subtitle">A selection of projects I'm proud to have worked on</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
  <div className="project-image">
    <Image 
      src={project.image}
      alt={project.title}
      className="project-img"
      priority={index === 0}
    />
  </div>

  <div className="project-content">
    <div className="project-category">{project.category}</div>
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <a href={project.link} target="_blank">View Project →</a>
  </div>
</div>

        ))}
      </div>

     <div className="mx-auto github-link">
         <a href="https://github.com/Petersgodspower19" className="text-gray-500 py-5 text-center">More Projects on My Github</a>
     </div>
    </section>
  );
}

