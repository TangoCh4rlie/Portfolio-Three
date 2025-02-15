import { Project } from "../models/project";
import projetJson from "../assets/json/projects.json";
import "../assets/styles/projects.css";
import { Button, Card } from "pixel-retroui";
import { Techno } from "../models/techno";
import technoJson from "../assets/json/techno.json";

interface Projectproject {
  project: Project;
}

function ProjectCard({ project }: Projectproject) {
  const technos: Techno[] = technoJson;
  return (
    <a href={project.link} target="_blank">
      <Card
        bg="#fefcd0"
        textColor="black"
        borderColor="black"
        shadowColor="#c381b5"
        className="project-card"
      >
        <img src={project.img.path} alt={`${project.title} image`} />
        <div className="text-content">
          <h3>{project.title}</h3>
          <p className="text-sm">{project.description}</p>
          <div className="flex gap-2 mb-4">
            {project.tech.map((t) => {
              // TODO: Si utilisation de devicon remplacer ca
              const { img } = technos.find((techno) => techno.name === t) || {};
              return (
                <svg className="w-10" key={t} viewBox="0 0 128 128">
                  <path fill={img?.fill} d={img?.d} />
                </svg>
              );
            })}
          </div>
          <Button
            bg="#fefcd0"
            textColor="black"
            borderColor="black"
            shadow="#c381b5"
            className="w-14 h-14 flex content-center items-center"
          >
            <a href={project.repo} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="size-12 p-1"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M11.999 1C5.926 1 1 5.925 1 12c0 4.86 3.152 8.983 7.523 10.437c.55.102.75-.238.75-.53c0-.26-.009-.952-.014-1.87c-3.06.664-3.706-1.475-3.706-1.475c-.5-1.27-1.221-1.61-1.221-1.61c-.999-.681.075-.668.075-.668c1.105.078 1.685 1.134 1.685 1.134c.981 1.68 2.575 1.195 3.202.914c.1-.71.384-1.195.698-1.47c-2.442-.278-5.01-1.222-5.01-5.437c0-1.2.428-2.183 1.132-2.952c-.114-.278-.491-1.397.108-2.91c0 0 .923-.297 3.025 1.127A10.5 10.5 0 0 1 12 6.32a10.5 10.5 0 0 1 2.754.37c2.1-1.424 3.022-1.128 3.022-1.128c.6 1.514.223 2.633.11 2.911c.705.769 1.13 1.751 1.13 2.952c0 4.226-2.572 5.156-5.022 5.428c.395.34.747 1.01.747 2.037c0 1.47-.014 2.657-.014 3.017c0 .295.199.637.756.53C19.851 20.979 23 16.859 23 12c0-6.075-4.926-11-11.001-11"
                />
              </svg>
            </a>
          </Button>
        </div>
      </Card>
    </a>
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
