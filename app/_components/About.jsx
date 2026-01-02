export default function About() {
  return (
    <section id="about">
      <div className="section-header">
        <span className="section-tag">About Me</span>
        <h2 className="section-title">Who I Am</h2>
        <p className="section-subtitle">Passionate developer with a keen eye for detail and a drive for excellence in every project</p>
      </div>
      
      <div className="about-grid">
        <div className="about-content">
          <h3>Crafting Digital Excellence</h3>
          <p>
            I'm a full-stack developer with a passion for creating beautiful, functional web applications. With expertise spanning from frontend design to backend architecture, I bring a holistic approach to every project.
          </p>
          <p>
            My journey in tech has been driven by curiosity and a constant desire to learn. I thrive on challenges and love turning complex problems into elegant solutions.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
          </p>
        </div>
        
        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-number">30+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">8+</div>
            <div className="stat-label">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
}

