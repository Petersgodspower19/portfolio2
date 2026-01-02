'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaFacebookF, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';

export default function Navigation() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav>
      <div className="nav-container">
        <a 
          href="https://github.com/Petersgodspower19" 
          target="_blank" 
          rel="noopener noreferrer"
          className="nav-item" 
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a 
          href="https://x.com/ebube54?s=21" 
          target="_blank" 
          rel="noopener noreferrer"
          className="nav-item" 
          title="Twitter"
        >
          <FaTwitter />
        </a>
        <a 
          href="https://www.instagram.com/codewgodspower/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="nav-item" 
          title="Instagram"
        >
          <FaInstagram />
        </a>
        <a 
          href="https://www.facebook.com/share/16BoVuJgkP/?mibextid=wwXIfr" 
          target="_blank" 
          rel="noopener noreferrer"
          className="nav-item" 
          title="Facebook"
        >
          <FaFacebookF />
        </a>
        <a 
          href="mailto:petersgodspower95@gmail.com"
          className="nav-item" 
          title="Email"
        >
          <FaEnvelope />
        </a>
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          title="Toggle Dark Mode"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <FaSun className="sun-icon" /> : <FaMoon className="moon-icon" />}
        </button>
      </div>
    </nav>
  );
}