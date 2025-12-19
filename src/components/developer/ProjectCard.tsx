import { SquareArrowOutUpRight } from 'lucide-react';
import { ProjectCardProps } from '@/types/project';

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="from-misty-purple/50 to-deep-canyon/60 hover:shadow-vibrant-teal/30 rounded-md bg-gradient-to-br p-4 shadow-2xl transition-all duration-500 md:p-6 lg:p-8">
      <div className="flex flex-col gap-2 md:gap-4 lg:gap-4 pb-4 md:pb-6">
        <h3 className="text-lighter text-5xl font-bold">{project.title}</h3>
        <p className="text-desert-haze px-1 md:px-2 lg:px-4 font-sans text-2xl md:leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex flex-col gap-2 md:gap-4 font-mono font-light">
        <h4 className="text-vibrant-teal text-3xl">Tech Stack</h4>
        <div className="grid grid-cols-2 gap-1 md:gap-2 px-4 md:grid-cols-3">
          {project.techStack.map((tech, index) => (
            <div
              key={index}
              className="border-vibrant-teal bg-rich-terracotta/60 hover:border-sky-blue hover:bg-rust rounded-sm border px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 text-center transition-all duration-300"
            >
              <span className="text-lightest text-xl font-normal">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-misty-purple mt-6 md:mt-8 flex gap-4 lg:gap-6 border-t px-4 pt-6">
        {typeof project.link === 'string' ? (
          <a
            href={project.link}
            className="hover:border-sky-blue border-light text-light inline-flex items-center rounded-sm border bg-transparent px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 text-lg font-semibold shadow-lg transition-all duration-300"
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
                className="hover:border-sky-blue border-light text-light inline-flex items-center rounded-sm border bg-transparent px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 text-lg font-semibold shadow-lg transition-all duration-300"
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
                className="hover:border-sunset-orange border-light text-light inline-flex items-center rounded-sm border bg-transparent px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 text-lg font-semibold shadow-lg transition-all duration-300"
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
    </article>
  );
}
