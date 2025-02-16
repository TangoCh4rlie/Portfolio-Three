export interface Project {
  title: string;
  description: string;
  img: {
    path?: string;
  };
  link?: string;
  repo?: string;
  tech: string[];
  tags: string[];
  date: string;
  competence?: boolean;
  misc?: boolean;
}
