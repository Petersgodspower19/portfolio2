import { 
  FaLaptopCode, 
  FaServer, 
  FaUsersCog, 
  FaDatabase, 
  FaBolt, 
  FaLayerGroup 
} from "react-icons/fa";

const skills = [
  {
    icon: <FaLaptopCode />,
    title: "Frontend Engineering",
    description:
      "Building fast, responsive, and accessible user interfaces using React, Next.js, Tailwind CSS, and modern UI patterns. Focused on performance, clarity, and real-world usability."
  },
  {
    icon: <FaServer />,
    title: "Full-Stack Application Development",
    description:
      "Designing and developing complete web applications using Node.js, Express, REST APIs, and Firebase. From authentication to business logic and deployment."
  },
  {
    icon: <FaBolt />,
    title: "Real-Time Systems",
    description:
      "Implementing real-time features such as live notifications, polls, chats, and dashboards using Socket.IO and event-driven architectures."
  },
  {
    icon: <FaDatabase />,
    title: "Database & Authentication",
    description:
      "Designing secure authentication systems and managing application data with MongoDB, MySQL, Firebase, JWT, and role-based access control."
  },
  {
    icon: <FaLayerGroup />,
    title: "Admin Dashboards & Internal Tools",
    description:
      "Building powerful admin panels, analytics dashboards, and management systems for content, users, vendors, and platform operations."
  },
  {
    icon: <FaUsersCog />,
    title: "Product-Focused UI/UX",
    description:
      "Crafting user experiences that are intuitive, conversion-focused, and tailored for real products — from landing pages to complex multi-role platforms."
  }
];



export default function Skills() {
  return (
    <section id="skills">
      <div className="section-header">
        <span className="section-tag">Expertise</span>
        <h2 className="section-title">What I Do Best</h2>
        <p className="section-subtitle">Specialized skills honed through years of experience and continuous learning</p>
      </div>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}