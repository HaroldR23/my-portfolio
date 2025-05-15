"use client";

import { PROJECTS_LIST } from "@/app/constants/data";
import { 
  PROJECT_DESCRIPTION,
  PROJECT_NAME,
  PROJECTS_LIST_CONTAINER, 
  PROJECTS_SECTION_CONTAINER, 
  PROJECTS_SECTION_HEADER, 
  PROJECTS_SECTION_TITLE, 
  PROJECTS_TECHNOLOGIES_CONTAINER, 
  TECHNOLOGY_ITEM, 
  TECHNOLOGY_NAME, 
} from "@/app/constants/styles/projectsSectionStyles";
import { Technologie } from "@/app/models/projects";
import TechnologieIcon from "@/app/components/TechnologieIcon/TechnologieIcon";
import { getProjectCardStyle } from "@/app/utils/utils";



const ProjectsSection = () => {
  return (
    <div id="projects" className={PROJECTS_SECTION_CONTAINER}>
      <div className={PROJECTS_SECTION_HEADER}>
        <h2 className={PROJECTS_SECTION_TITLE}>Projects</h2>
      </div>
      <div className={PROJECTS_LIST_CONTAINER}>
        {PROJECTS_LIST.slice(0, 3).map((project, index) => (
          <div key={project.id} className={getProjectCardStyle(index)}>
            <div className={PROJECT_NAME}>
              {project.name}	
            </div>
            <p className={PROJECT_DESCRIPTION}>
              {project.description}
            </p>
            <div className={PROJECTS_TECHNOLOGIES_CONTAINER}>
              {project.technologies.map((tech: Technologie) => (
                <div key={tech.name} className={TECHNOLOGY_ITEM}>
                  <TechnologieIcon techName={tech.name} />
                  <span className={TECHNOLOGY_NAME}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};  

export default ProjectsSection;
