import { Project } from "../models/project";
import projetJson from "../assets/json/projects.json";
import "../assets/styles/projects.css";

interface Projectproject {
  project: Project;
}

function ProjectCard({ project }: Projectproject) {
  return (
    <div className="project-card">
      <img src={project.img.path} alt={`${project.title} image`} />
      <div className="text-content">
        <h3>{project.title}</h3>
        <p className="text-sm">{project.description}</p>
      </div>
    </div>
  );
}

export const ProjectsComponent = () => {
  const projects: Project[] = projetJson;
  return (
    <div>
      <h2 className="text-2xl mb-4">Projets</h2>
      <div className="flex flex-col gap-4">
        {projects
          .filter((p) => !p.competence)
          .map((p) => (
            <ProjectCard project={p} />
          ))}
      </div>
    </div>
  );
};
