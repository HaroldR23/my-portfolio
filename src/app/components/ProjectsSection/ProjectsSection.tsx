"use client";

import usePreferencesContext from "@/app/hooks/usePreferencesContext";
import FeaturedProjects from "./FeaturedProjects";
import OtherProjects from "./OtherProjects";


const ProjectsSection = () => {
  const { language } = usePreferencesContext();

  return (
    <div>
      <FeaturedProjects language={language}/>
      <OtherProjects language={language}/>
    </div>
  );
};  

export default ProjectsSection;
