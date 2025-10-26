import React from 'react';
import type { Project } from '../types';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12">
    {children}
  </h2>
);

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
    const delay = index * 150;

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`bg-white dark:bg-slate-900 rounded-lg shadow-lg hover:shadow-2xl dark:shadow-slate-700/[.2] dark:hover:shadow-slate-600/[.3] overflow-hidden transform hover:-translate-y-2 transition-all duration-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" />
            <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>
                    ))}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">{project.description}</p>
                <div className="flex items-center space-x-4">
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-400 font-semibold transition">
                            <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                        </a>
                    )}
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-slate-500 dark:text-slate-400 hover:text-blue-800 dark:hover:text-blue-400 font-semibold transition">
                        <Github className="w-4 h-4 mr-2" /> Source Code
                    </a>
                </div>
            </div>
        </div>
    );
};


const Projects: React.FC = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation<HTMLHeadingElement>();

  return (
    <section 
      id="projects" 
      className="py-20 bg-slate-50 dark:bg-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`transition-opacity duration-1000 ease-in-out transform ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <SectionTitle>My Projects</SectionTitle>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;