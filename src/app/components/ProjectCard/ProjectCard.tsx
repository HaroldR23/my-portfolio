"use client";

import { 
  LINK_STYLE,
  PROJECT_DESCRIPTION, 
  PROJECT_NAME, 
  PROJECTS_TECHNOLOGIES_CONTAINER, 
  TECHNOLOGY_ITEM, 
  TECHNOLOGY_NAME } from "@/app/constants/styles/projectsSectionStyles";
import { Project } from "@/app/models/projects";
import { getProjectCardStyle } from "@/app/utils/utils";
import TechnologieIcon from "../TechnologieIcon/TechnologieIcon";
import usePreferencesContext from "@/app/hooks/usePreferencesContext";
import { REPOSITORY, VIEW_PROJECT } from "@/app/constants/data/data";

const ProjectCard = ({
  description,
  id,
  name,
  technologies,
  url = "",
  github,
}: Project) => {
  const { language } = usePreferencesContext();

  return (
    <div key={id} className={getProjectCardStyle(id)}>
      <div className={PROJECT_NAME}>
        {name}	
      </div>
      <p className={PROJECT_DESCRIPTION}>
        {description}
      </p>
      <div className="flex justify-start items-center mt-3">
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_STYLE}
          >
            {VIEW_PROJECT[language]}
          </a>
        )}
        {github.map((repo, index) => (
          <a
            key={index}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_STYLE}
          > 
            {repo.repository.includes("Monorepo") ? REPOSITORY[language] : `• ${repo.repository}`}
          </a>
        ))}
      </div>

          
      <div className={PROJECTS_TECHNOLOGIES_CONTAINER}>
        {technologies.map((techName: string) => (
          <div key={techName} className={TECHNOLOGY_ITEM}>
            <TechnologieIcon techName={techName} />
            <span className={TECHNOLOGY_NAME}>{techName}</span>
          </div>
        ))}
      </div>
    </div>
        
  );
};

export default ProjectCard;
