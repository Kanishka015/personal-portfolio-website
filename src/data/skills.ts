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

export const skills: Skill[] = [
  { name: 'React', icon: ReactIcon },
  { name: 'Python', icon: Python },
  { name: 'Node.js', icon: NodeJs },
  { name: 'MongoDB', icon: Database },
  { name: 'TypeScript', icon: Code2 },
  { name: 'AI/ML', icon: AI },
  { name: 'Git', icon: Git },
  { name: 'Docker', icon: Docker },
  { name: 'AWS', icon: AWS },
  { name: 'Linux', icon: Linux }
];