"use client";

import { PROJECTS_LIST } from "@/app/constants/data";
import { 
  PROJECTS_LIST_CONTAINER, 
  PROJECTS_SECTION_CONTAINER, 
  PROJECTS_SECTION_HEADER, 
  PROJECTS_SECTION_TITLE, 
} from "@/app/constants/styles/projectsSectionStyles";
import ProjectCard from "../ProjectCard/ProjectCard";



const ProjectsSection = () => {
  return (
    <div id="projects" className={PROJECTS_SECTION_CONTAINER}>
      <div className={PROJECTS_SECTION_HEADER}>
        <h2 className={PROJECTS_SECTION_TITLE}>Projects</h2>
      </div>
      <div className={PROJECTS_LIST_CONTAINER}>
        {PROJECTS_LIST.map((project) => (
          <ProjectCard
            description={project.description} 
            id={project.id} 
            name={project.name} 
            technologies={project.technologies} 
            url={project.url} 
            key={project.id} 
            github={project.github} 
          />
        ))}
      </div>
    </div>
  );
};  

export default ProjectsSection;
