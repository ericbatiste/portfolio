'use client';

import projects from '@/data/projects';
import { ProjectCardProps, Project } from '@/types/project';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SquareArrowOutUpRight } from 'lucide-react';

export default function MyProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const galleryElement = document.querySelector('.project-gallery');
      if (galleryElement) {
        const rect = galleryElement.getBoundingClientRect();
        const partiallyInView =
          rect.top < window.innerHeight && rect.bottom > 0;
        setIsInView(partiallyInView);

        if (partiallyInView) {
          projects.forEach((project, index) => {
            const projectElement = document.getElementById(`project-${index}`);
            if (projectElement) {
              const projectRect = projectElement.getBoundingClientRect();
              const isProjectInCenter =
                projectRect.top <= window.innerHeight / 2 &&
                projectRect.bottom >= window.innerHeight / 2;
              if (isProjectInCenter) {
                setSelectedProject(project);
              }
            }
          });
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="project-gallery flex min-h-screen p-6">
      <aside className="sticky top-0 flex h-screen w-1/4 flex-col items-center justify-center">
        <motion.ul
          className="border-rich-terracotta flex max-h-screen w-full flex-col items-end gap-2 border-r py-8 pr-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1.8, delay: 0.5 }}
          >
          {projects.map((project, index) => (
            <li
              className={`w-full cursor-pointer rounded-sm px-4 py-2 transition-all duration-300 ${
                selectedProject?.title === project.title
                  ? 'from-vibrant-teal/70 to-misty-purple/70 text-lighter bg-gradient-to-br font-bold shadow-lg'
                  : 'text-soft-sand hover:text-rich-terracotta'
              }`}
              key={index}
              onClick={() => {
                setSelectedProject(project);
                document.getElementById(`project-${index}`)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                });
              }}
            >
              <h2 className="text-right text-xl">{project.title}</h2>
            </li>
          ))}
        </motion.ul>
      </aside>

      <div className="w-full">
        {projects.map((project, index) => (
          <div
            id={`project-${index}`}
            key={index}
            className="flex h-screen w-full snap-center snap-always flex-col items-center justify-center px-12"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="from-misty-purple/50 to-deep-canyon/60 hover:shadow-vibrant-teal/30 max-w-6xl rounded-md bg-gradient-to-br p-8 shadow-2xl transition-all duration-500">
      <div className="flex flex-col gap-4 pb-6">
        <h3 className="text-lighter text-6xl font-bold">{project.title}</h3>
        <p className="text-desert-haze px-4 font-sans text-2xl leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex flex-col gap-4 font-mono tracking-widest">
        <h4 className="text-vibrant-teal text-4xl font-light">Tech Stack</h4>
        <div className="grid grid-cols-2 gap-2 px-4 md:grid-cols-3">
          {project.techStack.map((tech, index) => (
            <div
              key={index}
              className="border-vibrant-teal bg-rich-terracotta/60 hover:border-sky-blue hover:bg-rust rounded-sm border px-4 py-3 text-center transition-all duration-300"
            >
              <span className="text-lightest text-xl font-semibold">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-misty-purple mt-8 flex gap-6 border-t px-4 pt-6">
        {typeof project.link === 'string' ? (
          <a
            href={project.link}
            className="hover:border-sky-blue border-light text-light inline-flex items-center rounded-sm border bg-transparent px-6 py-3 text-lg font-semibold shadow-lg transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SquareArrowOutUpRight className="text-vibrant-teal mr-2 h-5 w-5" />
            View Repository
          </a>
        ) : (
          <>
            {project.link.frontend && (
              <a
                href={project.link.frontend}
                className="hover:border-sky-blue border-light text-light inline-flex items-center rounded-sm border bg-transparent px-6 py-3 text-lg font-semibold shadow-lg transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SquareArrowOutUpRight className="text-vibrant-teal mr-2 h-5 w-5" />
                Frontend Repo
              </a>
            )}
            {project.link.backend && (
              <a
                href={project.link.backend}
                className="hover:border-sunset-orange border-light text-light inline-flex items-center rounded-sm border bg-transparent px-6 py-3 text-lg font-semibold shadow-lg transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SquareArrowOutUpRight className="text-rich-terracotta mr-2 h-5 w-5" />
                Backend Repo
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};
