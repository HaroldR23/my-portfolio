import { 
  TECHNOLOGIE_CARD_CONTAINER, 
  TECHNOLOGIE_TITLE, 
  TECHNOLOGIES_LIST_CONTAINER, 
  TECHNOLOGY_ICON, 
  TECHNOLOGY_ITEM,
  TECHNOLOGY_NAME
} from "@/app/constants/styles/technologiesStyles";

import { TechnologieCardProps } from "./TechnologieCardProps";
import TechnologieIcon from "../TechnologieIcon/TechnologieIcon";

const TechnologieCard = ({ title, technologies }: TechnologieCardProps) => {
  return (
    <div className={TECHNOLOGIE_CARD_CONTAINER}>
      <h2 className={TECHNOLOGIE_TITLE}>{title}</h2>
      <div className={TECHNOLOGIES_LIST_CONTAINER}>
        {
          technologies.map((tech: string) => (
            <div 
              key={tech} 
              className={TECHNOLOGY_ITEM}
            >
              <div className={TECHNOLOGY_ICON}>
                <TechnologieIcon techName={tech} />
              </div>
              <span className={TECHNOLOGY_NAME}>{tech}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default TechnologieCard;
