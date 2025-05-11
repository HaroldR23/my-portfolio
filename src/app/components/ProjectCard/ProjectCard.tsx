import { Project } from "@/app/models/projects";

const ProjectCard = ({
  description,
  id,
  name,
  technologies,
  url,
}: Project) => {
  return (
    <div key={id}>
      <h1>{name}</h1>
      <p>{description}</p>
      <a href={url}>View Project</a>
      <div>
        {technologies.map((technology) => (
          <span key={technology.name}>
            {technology.name}
          </span>
        ))}
      </div>
    </div>
       
  );
};

export default ProjectCard;
