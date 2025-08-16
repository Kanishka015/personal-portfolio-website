import { 
  RepeatIcon as ReactIcon, 
  Binary as Python,
  Code as NodeJs, 
  Database, 
  Code2,
  BrainCircuit as AI,
  GitBranch as Git,
  Cpu as Docker,
  Cloud as AWS,
  Terminal as Linux
} from 'lucide-react';

export interface Skill {
  name: string;
  icon: any;
}

// Updated skills array with the full tech stack
export const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: ReactIcon },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Tailwind CSS', icon: Code2 },
  { name: 'Vite', icon: Code2 },


  // Backend
  { name: 'Node.js', icon: NodeJs },
  { name: 'Python', icon: Python },
  { name: 'FastAPI', icon: Python }, // Python-based framework

  // Data Science & Machine Learning
  { name: 'TensorFlow/Keras', icon: AI },
  { name: 'scikit-learn', icon: AI },
  { name: 'Pandas & NumPy', icon: AI },
  { name: 'Streamlit', icon: Python }, // Python-based app framework
  
  // Databases
  { name: 'MongoDB', icon: Database },

  // DevOps, Cloud & Tools
  { name: 'Git', icon: Git },
  { name: 'Docker', icon: Docker },
  { name: 'AWS', icon: AWS },
  { name: 'Linux', icon: Linux }
];