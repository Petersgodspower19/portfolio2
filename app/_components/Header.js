'use client';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Header() {
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { Icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
    { Icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { Icon: FaTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { Icon: FaEnvelope, href: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative z-50 pt-8 pb-4"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <nav className="backdrop-blur-glass rounded-full px-8 py-4 shadow-2xl glow">
            <div className="flex items-center gap-12">
              {/* Navigation Links */}
              <div className="flex items-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="text-white/80 hover:text-white transition-all duration-300 font-medium text-sm uppercase tracking-wider relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                ))}
              </div>

              {/* Divider */}
              <div className="w-px h-8 bg-white/20"></div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.Icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + (0.1 * index), duration: 0.4 }}
                      className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}