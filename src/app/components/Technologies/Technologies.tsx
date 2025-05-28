import { 
  TECHNOLOGIES_CONTAINER,
  TECHNOLOGIES_LIST_CONTAINER, 
  TECHNOLOGIES_LIST_HEADER, 
  TECHNOLOGY_ICON, 
  TECHNOLOGY_ITEM,
  TECHNOLOGY_NAME
} from "@/app/constants/styles/technologiesStyles";
import TechnologieIcon from "../TechnologieIcon/TechnologieIcon"
import { TECHNOLOGIES_LIST } from "@/app/constants/data/english";

const Technologies = () => {
  return (
    <div className={TECHNOLOGIES_CONTAINER}>
      <h1 className={TECHNOLOGIES_LIST_HEADER}>Tech Stack</h1>
      <div className={TECHNOLOGIES_LIST_CONTAINER}>
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
    </div>
  );
};

export default Technologies;
