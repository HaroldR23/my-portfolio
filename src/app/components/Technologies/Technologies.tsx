"use client";

import { 
  TECHNOLOGIES_CONTAINER,
  TECHNOLOGIES_LIST_HEADER,
  TECHNOLOGIES_LIST_ITEMS_CONTAINER, 
} from "@/app/constants/styles/technologiesStyles";
import { 
  AI_TECH_STACK,
  AI_TOOLS_TEXT,
  BACKEND_TECH_STACK,
  BACKEND_TEXT,
  DATA_BASES_TEXT,
  DATABASE_TECH_STACK,
  DEVOPS_TECH_STACK,
  DEVOPS_TOOLS_TEXT,
  FRONTEND_TECH_STACK, 
  FRONTEND_TEXT, MOBILE_TECH_STACK, MOBILE_TECH_STACK_TEXT, TECH_STACK, 
  
} from "@/app/constants/data/data";
import usePreferencesContext from "@/app/hooks/usePreferencesContext";
import TechnologieCard from "../TechnologieCard/TechnologieCard";

const Technologies = () => {
  const { language } = usePreferencesContext();

  return (
    <div className={TECHNOLOGIES_CONTAINER}>
      <h1 className={TECHNOLOGIES_LIST_HEADER}>{TECH_STACK[language]}</h1>
      <div className={TECHNOLOGIES_LIST_ITEMS_CONTAINER}>
        <TechnologieCard 
          title={FRONTEND_TEXT} 
          technologies={FRONTEND_TECH_STACK}
        />
        <TechnologieCard 
          title={BACKEND_TEXT} 
          technologies={BACKEND_TECH_STACK}
        />
        <TechnologieCard 
          title={DATA_BASES_TEXT[language]} 
          technologies={DATABASE_TECH_STACK}
        />
        <TechnologieCard 
          title={AI_TOOLS_TEXT[language]} 
          technologies={AI_TECH_STACK}
        />
        <TechnologieCard 
          title={DEVOPS_TOOLS_TEXT[language]} 
          technologies={DEVOPS_TECH_STACK}
        />
        <TechnologieCard 
          title={MOBILE_TECH_STACK_TEXT[language]} 
          technologies={MOBILE_TECH_STACK}
        />      
      </div>
    </div>
  );
};

export default Technologies;
