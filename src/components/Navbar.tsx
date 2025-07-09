import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Github, Linkedin, Twitter, FileDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDownloadResume = () => {
    // Replace with your actual resume file URL
    const resumeUrl = '/path-to-your-resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Kanishka_Nagar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { name: 'Home', to: 'hero', offset: -70 },
    { name: 'Projects', to: 'projects', offset: -70 },
    { name: 'Contact', to: 'contact', offset: -70 },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/10 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link to="hero" spy={true} smooth={true} offset={-70} duration={500}>
            <span className="text-2xl font-bold cursor-pointer text-white">
              Portfolio
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-8"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={item.offset}
              duration={500}
              className="text-white hover:text-purple-400 transition-colors cursor-pointer"
              activeClass="text-purple-400 font-medium"
            >
              {item.name}
            </Link>
          ))}
          <Button
            variant="outline"
            size="sm"
            icon={<FileDown size={16} />}
            onClick={handleDownloadResume}
            className="border-purple-400 text-purple-400 hover:bg-purple-400/10"
          >
            Resume
          </Button>
        </motion.nav>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center space-x-4"
        >
          <a
            href="https://github.com/Kanishka015"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://x.com/Kan1165280"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://leetcode.com/u/Kanishkanagar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-colors"
          >
            <span className="font-medium">LC</span>
          </a>
          <a
            href="https://auth.geeksforgeeks.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-colors"
          >
            <span className="font-medium">GFG</span>
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/10 backdrop-blur-md shadow-lg overflow-hidden"
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={500}
                className="text-white hover:text-purple-400 transition-colors"
                activeClass="text-purple-400 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="outline"
              size="sm"
              icon={<FileDown size={16} />}
              onClick={handleDownloadResume}
              className="border-purple-400 text-purple-400 hover:bg-purple-400/10"
            >
              Resume
            </Button>
            <div className="flex space-x-4 pt-4 border-t border-white/20">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://leetcode.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors"
              >
                <span className="font-medium">LC</span>
              </a>
              <a
                href="https://auth.geeksforgeeks.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors"
              >
                <span className="font-medium">GFG</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;