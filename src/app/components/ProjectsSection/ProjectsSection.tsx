"use client";

import { PROJECTS_LIST } from "@/app/constants/data";
import { 
  PROJECT_CARD,
  PROJECT_DESCRIPTION,
  PROJECT_NAME,
  PROJECTS_LIST_CONTAINER, 
  PROJECTS_SECTION_CONTAINER, 
  PROJECTS_SECTION_HEADER, 
  PROJECTS_SECTION_TITLE, 
  PROJECTS_TECHNOLOGIES_CONTAINER, 
  TECHNOLOGY_ITEM, 
  TECHNOLOGY_NAME, 
  VIEW_ALL_BUTTON 
} from "@/app/constants/styles";
import { Technologie } from "@/app/models/projects";
import Link from "next/link";
import { VscChevronRight } from "react-icons/vsc";
import TechnologieIcon from "../TechnologieIcon/TechnologieIcon";


const ProjectsSection = () => {
  return (
    <div className={PROJECTS_SECTION_CONTAINER}>
      <div className={PROJECTS_SECTION_HEADER}>
        <h2 className={PROJECTS_SECTION_TITLE}>Projects</h2>
        <Link className={VIEW_ALL_BUTTON} href="/projects">
          View all
          <VscChevronRight />
        </Link>
      </div>
      <div className={PROJECTS_LIST_CONTAINER}>
        {PROJECTS_LIST.slice(0, 3).map((project) => (
          <div key={project.id} className={PROJECT_CARD}>
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
