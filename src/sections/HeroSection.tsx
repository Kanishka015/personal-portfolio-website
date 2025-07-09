import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-scroll';
import Button from '../components/Button';

const roles = [
  "Full Stack Developer",
  "Python Developer",
  "Data Scientist",
  "Prompt Engineer",
  "Freelancer",
  "Creative Person"
];

const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/80 via-dark-500/90 to-purple-900/80 backdrop-blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-purple-700/10"></div>
      </div>
      
      <div className="container-custom relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="mb-8">
            <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Kanishka Nagar</span>
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl lg:text-4xl font-medium block text-purple-400"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Building modern, responsive web applications with a focus on clean code and exceptional user experience.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
              <Button variant="primary" className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800">
                View My Work
              </Button>
            </Link>
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                Contact Me
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center space-x-4"
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/YOUR-USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection