import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-500 text-white py-8">
      <div className="container-custom">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            Kanishka Nagar Portfolio 2025
          </h3>
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/kanishka-nagar-7102b6257/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;