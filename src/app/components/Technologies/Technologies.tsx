import { 
  TECHNOLOGIES_CONTAINER, 
  TECHNOLOGY_ICON, 
  TECHNOLOGY_ITEM,
  TECHNOLOGY_NAME
} from "@/app/constants/styles/technologiesStyles";
import TechnologieIcon from "../TechnologieIcon/TechnologieIcon"
import { TECHNOLOGIES_LIST } from "@/app/constants/data";

const Technologies = () => {
  return (
    <div className={TECHNOLOGIES_CONTAINER}>
      {
        TECHNOLOGIES_LIST.map((tech: string) => (
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
  );
};

export default Technologies;
