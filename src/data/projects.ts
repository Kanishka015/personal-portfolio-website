export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with product management, shopping cart, and payment processing capabilities.",
    image: "",
    technologies: ["React", "Node.js"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    demoUrl: "https://demo-ecommerce.yourdomain.com",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app that helps users organize tasks, set priorities, and track progress with intuitive UI.",
    image: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/task-manager",
    demoUrl: "https://task-app.yourdomain.com",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather application that provides real-time forecasts, historical data, and interactive maps.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "OpenWeather API", "Geolocation API"],
    githubUrl: "https://github.com/yourusername/weather-app",
    demoUrl: "https://weather.yourdomain.com",
    featured: false
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A responsive developer portfolio built with React and modern CSS techniques.",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    githubUrl: "https://github.com/yourusername/portfolio",
    demoUrl: "https://yourdomain.com",
    featured: false
  }
];