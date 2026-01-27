"use client";
import { motion } from "motion/react";
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
  TECH_STACK_SUBTITLE, 
  
} from "@/app/constants/data/data";
import usePreferencesContext from "@/app/hooks/usePreferencesContext";
import TechnologieCard from "../TechnologieCard/TechnologieCard";

const Technologies = () => {
  const { language } = usePreferencesContext();

  return (
    <section className={TECHNOLOGIES_CONTAINER}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className={TECHNOLOGIES_LIST_HEADER}>{TECH_STACK[language]}</h1>
          <p className="text-slate-400 text-lg">{TECH_STACK_SUBTITLE[language]}</p>
        </motion.div>

        <div className={TECHNOLOGIES_LIST_ITEMS_CONTAINER}>
          <TechnologieCard 
            index={1}
            title={FRONTEND_TEXT} 
            technologies={FRONTEND_TECH_STACK}
          />
          <TechnologieCard 
            index={2}
            title={BACKEND_TEXT} 
            technologies={BACKEND_TECH_STACK}
          />
          <TechnologieCard 
            index={3}
            title={DATA_BASES_TEXT[language]} 
            technologies={DATABASE_TECH_STACK}
          />
          <TechnologieCard 
            index={4}
            title={AI_TOOLS_TEXT[language]} 
            technologies={AI_TECH_STACK}
          />
          <TechnologieCard 
            index={5}
            title={DEVOPS_TOOLS_TEXT[language]} 
            technologies={DEVOPS_TECH_STACK}
          />
          <TechnologieCard 
            index={6}
            title={MOBILE_TECH_STACK_TEXT[language]} 
            technologies={MOBILE_TECH_STACK}
          />      
        </div>
      </div>
    </section>
  );
};

export default Technologies;
