import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-dark-200">
      <div className="container-custom">
        <SectionTitle 
          title="About Me"
          subtitle="Learn more about my background and what drives me as a developer."
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-gray-300 mb-6">
            Hi! I'm a passionate developer with a knack for creating practical solutions. My journey started with a curiosity for how things work, and it has evolved into a love for building software that makes life easier. Whether it's automating tasks or developing web applications, I enjoy the challenge of turning ideas into reality.
          </p>
          
          <p className="text-gray-300 mb-8">
           I'm currently exploring the world of web development by building real, useful projects while learning along the way. From backend tools like Flask to data visualization with Python, I'm focused on turning ideas into working solutions. I'm not an expert (yet), but I'm consistent, curious, and excited to grow.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <h4 className="font-bold mb-2 text-primary-400">Location:</h4>
              <p className="text-gray-300">New Delhi, India</p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-primary-400">Email:</h4>
              <p className="text-gray-300">your.email@example.com</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" icon={<Download size={18} />}>
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              icon={<Mail size={18} />}
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth', 
                  block: 'start' 
                });
              }}
            >
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;