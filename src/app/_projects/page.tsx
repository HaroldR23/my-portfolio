import ProjectCard from "../components/ProjectCard/ProjectCard";
import { PROJECTS_LIST_ENG } from "../constants/data/english";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {
        PROJECTS_LIST_ENG.map((project) => (
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
