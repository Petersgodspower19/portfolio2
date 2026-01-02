'use client';

import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaUser
} from "react-icons/fa";

import { 
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiSocketdotio,
  SiVercel,
  SiGithub
} from "react-icons/si";

import img from  "../../public/hero.jpg"
import Image from "next/image";

const techStack = [
  { name: "React", icon: <FaReact style={{ color: "#61DAFB" }} /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "JavaScript", icon: <SiJavascript style={{ color: "#F7DF1E" }} /> },
  { name: "TypeScript", icon: <SiTypescript style={{ color: "#3178C6" }} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss style={{ color: "#06B6D4" }} /> },
  { name: "Redux Toolkit", icon: <SiRedux style={{ color: "#764ABC" }} /> },
  { name: "Node.js", icon: <FaNodeJs style={{ color: "#339933" }} /> },
  { name: "Express.js", icon: <FaNodeJs style={{ color: "#444" }} /> },
  { name: "MongoDB", icon: <SiMongodb style={{ color: "#47A248" }} /> },
  { name: "MySQL", icon: <SiMysql style={{ color: "#4479A1" }} /> },
  { name: "Firebase", icon: <SiFirebase style={{ color: "#FFCA28" }} /> },
  { name: "Socket.IO", icon: <SiSocketdotio /> },
  { name: "REST APIs", icon: <FaGitAlt /> },
  { name: "Git", icon: <FaGitAlt style={{ color: "#F05032" }} /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Vercel", icon: <SiVercel /> }
];


export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="profile-image">
          <div className="profile-placeholder">
            <Image src={img} alt="" />
          </div>
        </div>
        
        <h1>Hey, I'm Peters Godspower.</h1>
        <h2>Full-Stack Developer</h2>
        
        <p className="hero-tagline">Building the future, one line of code at a time</p>
        
        <div className="hero-description">
          <p>I transform ideas into elegant digital experiences. Specializing in crafting scalable web applications, designing intuitive interfaces, and solving complex technical challenges with creativity and precision.</p>
        </div>
        
        <div className="cta-buttons">
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
          <a href="#contact" className="btn btn-secondary">
            <span className="status-indicator"></span>
            Available for Projects
          </a>
        </div>

        {/* Tech Stack Slider */}
        <div className="tech-stack">
          <div className="tech-stack-label">Technologies I Work With</div>
          <div className="tech-slider">
            <div className="tech-track">
              {/* First set */}
              {techStack.map((tech, index) => (
                <div key={`tech-${index}`} className="tech-item">
                  <span style={{ fontSize: '20px', width: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {tech.icon}
                  </span>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {techStack.map((tech, index) => (
                <div key={`tech-duplicate-${index}`} className="tech-item">
                  <span style={{ fontSize: '20px', width: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {tech.icon}
                  </span>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}