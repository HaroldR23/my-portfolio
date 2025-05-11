"use client";

import { PROJECTS_LIST } from "@/app/constants";
import Image from "next/image";
import { redirect } from "next/navigation";

const ProjectsSection = () => {
  return (
    <div>
      <div>
        <h2>Projects</h2>
        <button onClick={() => redirect("/projects")}>View all</button>
      </div>
      <div>
        {PROJECTS_LIST.slice(0, 3).map((project) => (
          <div key={project.id}>
            <div>
              {project.name}	
            </div>
            <p>
              {project.description}
            </p>
            <div>
              {project.technologies.map((tech) => (
                <div key={tech.name}>
                  <Image src={tech.icon} alt={tech.name} width={100} height={100}/>
                  <span>{tech.name}</span>
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
