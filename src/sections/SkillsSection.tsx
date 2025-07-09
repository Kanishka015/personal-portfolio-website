import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { skills } from '../data/skills';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-gray-900 to-black">
      <div className="container-custom">
        <SectionTitle 
          title="Tech Stack"
          subtitle="Technologies I work with"
          center={true}
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="glass-card p-6 flex flex-col items-center justify-center text-center"
            >
              <skill.icon className="w-12 h-12 mb-4 text-primary-400" />
              <h3 className="text-lg font-medium text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;