'use client';

import projects from '@/data/projects';
import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function MyProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const dataId = entry.target.getAttribute('data-id');
            setSelectedProject(projects[Number(dataId?.split('-')[1])]);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    projectRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex min-h-screen p-6">
      <aside className="sticky top-0 flex h-screen w-1/4 flex-col items-center justify-center">
        <motion.ul
          className="border-rich-terracotta flex max-h-screen w-full flex-col items-end gap-2 border-r py-8 pr-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: selectedProject ? 1 : 0 }}
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
                projectRefs.current[index]?.scrollIntoView({
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
            ref={(el) => {
              projectRefs.current[index] = el;
            }}
            data-id={`project-${index}`}
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
