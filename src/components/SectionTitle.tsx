import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = false,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${center ? 'text-center' : ''} ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
     <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
  {subtitle}
</p>
      )}
      <div className={`h-1 w-20 mt-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded ${center ? 'mx-auto' : ''}`}></div>
    </motion.div>
  );
};

export default SectionTitle;