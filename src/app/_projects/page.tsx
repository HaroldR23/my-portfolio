import ProjectCard from "../components/ProjectCard/ProjectCard";
import { PROJECTS_LIST } from "@/app/constants/data/english";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {
        PROJECTS_LIST.map((project) => (
          <ProjectCard 
            description={project.description} 
            id={project.id} name={project.name} 
            technologies={project.technologies} 
            url={project.url} key={project.id} 
            github={project.github} 
          />
        ))
      }
    </div>
  );
};

export default ProjectsPage;
