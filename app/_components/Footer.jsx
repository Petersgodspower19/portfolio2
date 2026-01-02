import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a href="https://x.com/ebube54?s=21"  
          className="social-link" 
          title="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        {/* <a 
          href="https://linkedin.com/in/yourusername" 
          className="social-link" 
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a> */}
        <a 
          href="https://github.com/Petersgodspower19"  
          className="social-link" 
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a 
          href="mailto:petersgodspower95@gmail.com"
          className="social-link" 
          title="Email"
        >
          <FaEnvelope />
        </a>
      </div>
      <p className="copyright">© 2026 Peters Godspower Chidiebube. Crafted with passion and precision.</p>
    </footer>
  );
}