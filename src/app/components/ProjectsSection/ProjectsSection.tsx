"use client";

import { 
  PROJECTS_LIST_CONTAINER, 
  PROJECTS_SECTION_CONTAINER, 
  PROJECTS_SECTION_HEADER, 
  PROJECTS_SECTION_TITLE, 
} from "@/app/constants/styles/projectsSectionStyles";
import ProjectCard from "../ProjectCard/ProjectCard";
import { PROJECTS, PROJECTS_LIST } from "@/app/constants/data/data";
import usePreferencesContext from "@/app/hooks/usePreferencesContext";


const ProjectsSection = () => {
  const { language } = usePreferencesContext();

  return (
    <div id="projects" className={PROJECTS_SECTION_CONTAINER}>
      <div className={PROJECTS_SECTION_HEADER}>
        <h2 className={PROJECTS_SECTION_TITLE}>{PROJECTS[language]}</h2>
      </div>
      <div className={PROJECTS_LIST_CONTAINER}>
        {PROJECTS_LIST[language].map((project) => (
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
