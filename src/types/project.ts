export type ProjectLink = string | {
  frontend?: string;
  backend?: string;
};

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link: ProjectLink;
}

export interface ProjectCardProps {
  project: Project;
}

export interface ProjectButtonProps {
  setSelectedProject: (project: Project) => void;
}