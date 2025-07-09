import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../data/skills';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  const percentage = (skill.level / 5) * 100;
  
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}/5</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-purple-700"
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillBar;