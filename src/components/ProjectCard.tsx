import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/projects';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card hover:transform hover:-translate-y-2"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
        />
        {project.featured && (
          <div className="absolute top-0 right-0 bg-accent-500 text-white px-3 py-1 text-sm font-medium">
            Featured
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button
              variant="outline"
              size="sm"
              icon={<Github size={16} />}
            >
              Code
            </Button>
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button
              variant="primary"
              size="sm"
              icon={<ExternalLink size={16} />}
            >
              Live Demo
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;