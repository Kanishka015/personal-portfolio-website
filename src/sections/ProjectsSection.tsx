import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-purple-950 via-black to-gray-900">
      <div className="container-custom">
        <SectionTitle 
          title="Projects"
          subtitle="Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies."
          center={true}
        />
        
        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;