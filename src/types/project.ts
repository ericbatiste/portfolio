export type ProjectLink = string | {
  frontend?: string;
  backend?: string;
};

export type ProjectColor = {
  bgColor: string;
  textColor: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link: ProjectLink;
  color: ProjectColor;
}

export interface ProjectCardProps {
  project: Project;
}

export interface ProjectButtonProps {
  setSelectedProject: (project: Project) => void;
}