import { 
  PROJECT_DESCRIPTION, 
  PROJECT_NAME, 
  PROJECTS_TECHNOLOGIES_CONTAINER, 
  TECHNOLOGY_ITEM, 
  TECHNOLOGY_NAME } from "@/app/constants/styles/projectsSectionStyles";
import { Project } from "@/app/models/projects";
import { getProjectCardStyle } from "@/app/utils/utils";
import TechnologieIcon from "../TechnologieIcon/TechnologieIcon";

const ProjectCard = ({
  description,
  id,
  name,
  technologies,
  url = "",
}: Project) => {
  console.log(url);
  return (
    <div key={id} className={getProjectCardStyle(id)}>
      <div className={PROJECT_NAME}>
        {name}	
      </div>
      <p className={PROJECT_DESCRIPTION}>
        {description}
      </p>
      <div className={PROJECTS_TECHNOLOGIES_CONTAINER}>
        {technologies.map((techName, index) => (
          <div key={index} className={TECHNOLOGY_ITEM}>
            <TechnologieIcon techName={techName} />
            <span className={TECHNOLOGY_NAME}>{techName}</span>
          </div>
        ))}
      </div>
    </div>
       
  );
};

export default ProjectCard;
