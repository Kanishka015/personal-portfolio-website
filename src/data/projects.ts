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
    title: "artFinder",
    description: "This app analyzes competitor data from platforms like YouTube and Reddit to streamline ad creation research. It provides actionable insights into customer pain points and high-performing strategies to build better ads.",
    image: "/images/artF.png",
    technologies: ["Python", "FastAPI", "Pandas", "NumPy", "scikit-learn", "NLTK", "TextBlob", "WordCloud", "Chart.js", "PRAW", "Google API Python Client"],
    githubUrl: "https://github.com/Kanishka015/artFinder",
    demoUrl: "https://art-finder-ui.vercel.app/",
    featured: true
  },
  {
    id: 2,
    title: "Plant Disease Prediction",
    description: "A machine learning application that identifies plant diseases from images and suggests remedies.",
    image: "/images/plantd.png",
    technologies: ["Python", "TensorFlow", "Keras", "Streamlit", "NumPy", "Pandas", "Matplotlib", "Seaborn", "scikit-learn"],
    githubUrl: "https://github.com/Kanishka015/plant-disease-prediction",
    demoUrl: "https://plant-disease-prediction.vercel.app/",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather application that provides real-time forecasts, historical data, and interactive maps.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "OpenWeather API", "Geolocation API"],
    githubUrl: "https://github.com/Kanishka015/Weather-app-python",
    demoUrl: "https://github.com/Kanishka015/Weather-app-python",
    featured: false
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A responsive developer portfolio built with React and modern CSS techniques.",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    githubUrl: "https://github.com/Kanishka015/Kanishka-portfolio-website",
    demoUrl: "https://kanishkanagr.vercel.app/",
    featured: false
  }
];