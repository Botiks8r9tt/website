import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  longDescription: string;
  githubUrl: string;
  liveUrl: string;
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack online shopping platform with payment integration',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB'],
      longDescription: 'A comprehensive e-commerce solution featuring product management, shopping cart functionality, secure payment processing, and order tracking. Built with modern technologies to ensure scalability and performance.',
      githubUrl: 'https://github.com/yourusername/project1',
      liveUrl: 'https://project1-demo.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task tracking and project management tool',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['TypeScript', 'React', 'Firebase'],
      longDescription: 'A powerful task management application that helps teams organize, track, and complete their work efficiently. Features include real-time collaboration, deadline tracking, and progress visualization.',
      githubUrl: 'https://github.com/yourusername/project2',
      liveUrl: 'https://project2-demo.com',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather information and forecasting application',
      image: 'https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'API Integration', 'Charts'],
      longDescription: 'An intuitive weather application providing accurate forecasts, interactive maps, and detailed meteorological data. Includes location-based weather updates and historical data visualization.',
      githubUrl: 'https://github.com/yourusername/project3',
      liveUrl: 'https://project3-demo.com',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern and responsive portfolio template',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['HTML', 'CSS', 'JavaScript'],
      longDescription: 'A sleek and professional portfolio website template designed to showcase your work in the best possible light. Fully responsive and customizable to match your personal brand.',
      githubUrl: 'https://github.com/yourusername/project4',
      liveUrl: 'https://project4-demo.com',
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics and management tool for social media accounts',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'Express', 'PostgreSQL'],
      longDescription: 'A comprehensive dashboard for managing multiple social media accounts, tracking engagement metrics, and scheduling posts. Features advanced analytics and reporting capabilities.',
      githubUrl: 'https://github.com/yourusername/project5',
      liveUrl: 'https://project5-demo.com',
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Health and fitness monitoring application',
      image: 'https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Mobile', 'Health'],
      longDescription: 'A mobile-first fitness application that helps users track workouts, monitor progress, and achieve their health goals. Includes exercise libraries, progress charts, and personalized recommendations.',
      githubUrl: 'https://github.com/yourusername/project6',
      liveUrl: 'https://project6-demo.com',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-12 animate-fade-in">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">My Projects</h1>
        <p className="text-lg text-slate-600">
          A collection of my recent work and personal projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in" onClick={() => setSelectedProject(null)}>
          <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-colors duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-64">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors shadow-lg"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {selectedProject.title}
              </h2>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-lg">
                {selectedProject.longDescription}
              </p>

              <div className="flex gap-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
                >
                  <Github size={20} />
                  View Code
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
