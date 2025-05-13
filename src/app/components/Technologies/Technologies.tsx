import { TECHNOLOGY_NAME } from "@/app/constants/styles"
import TechnologieIcon from "../TechnologieIcon/TechnologieIcon"
import { TECHNOLOGIES_LIST } from "@/app/constants/data";

const Technologies = () => {
  return (
    <div>
      {
        TECHNOLOGIES_LIST.map((tech: string) => (
          <div key={tech}>
            <TechnologieIcon techName={tech} />
            <span className={TECHNOLOGY_NAME}>{tech}</span>
          </div>
        ))
      }
    </div>
  );
};

export default Technologies;
