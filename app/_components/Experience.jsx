const experiences = [
  {
    period: "2025 – Present",
    title: "Frontend Developer",
    company: "Stargrades Nigeria",
    companyUrl: "https://www.instagram.com/stargradeshq?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    description:
      "Building and maintaining user-facing features for Stargrades’ web platforms using modern frontend technologies. Focused on performance, responsiveness, and clean UI architecture while collaborating closely with backend teams.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    period: "2025",
    title: "Frontend Developer Intern",
    company: "Stargrades Nigeria",
    companyUrl: "https://www.instagram.com/stargradeshq?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    description:
      "Assisted in developing frontend interfaces, implementing responsive layouts, and integrating REST APIs. Gained hands-on experience working on real production features and improving user interface consistency.",
    tags: ["React", "JavaScript", "Tailwind CSS", "REST APIs"]
  },
  {
    period: "Freelance",
    title: "Full-Stack Developer",
    company: "Self-Employed",
    companyUrl: "#",
    description:
      "Designed and developed complete web applications for clients, including dashboards, authentication systems, real-time features, and admin panels. Delivered scalable solutions tailored to client needs.",
    tags: ["Node.js", "Express", "MongoDB", "MySQL", "Firebase", "Socket.IO"]
  }
];


export default function Experience() {
  return (
    <section id="experience">
      <div className="section-header">
        <span className="section-tag">Experience</span>
        <h2 className="section-title">My Journey</h2>
        <p className="section-subtitle">Professional experiences that shaped my skills and perspective</p>
      </div>
      
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-date">{exp.period}</div>
            <div className="experience-content">
              <h3>{exp.title}</h3>
              <a href={exp.companyUrl}>{exp.company} →</a>
              <p>{exp.description}</p>
              <div className="experience-tags">
                {exp.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="experience-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

