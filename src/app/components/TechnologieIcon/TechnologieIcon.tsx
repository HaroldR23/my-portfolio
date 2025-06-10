import { ReactElement } from "react";
import { 
  SiAmazondynamodb,
  SiAmazonwebservices,
  SiAntdesign,
  SiCss3,
  SiDart,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiJavascript, 
  SiJest, 
  SiMaterialdesign, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiOpenai,
  SiPostgresql, 
  SiPytest, 
  SiPython, 
  SiReact, 
  SiSass, 
  SiSqlalchemy, 
  SiTailwindcss, 
  SiTerraform, 
  SiTypescript, 
  SiVercel, 
  SiVite
} from "react-icons/si";
import { TechnologieIconProps } from "./TechnologieIconProps";
import Image from "next/image";



const TechnologieIcon = ({ techName }: TechnologieIconProps) => {
  const icons: Record<string, ReactElement> = {
    javascript: <SiJavascript />,
    typescript: <SiTypescript />,
    python: <SiPython />,
    reactjs: <SiReact />,
    nextjs: <SiNextdotjs />,
    html: <SiHtml5 />,
    css: <SiCss3 />,
    fastapi: <SiFastapi />,
    aws: <SiAmazonwebservices />,
    postgresql: <SiPostgresql />,
    dynamodb: <SiAmazondynamodb />,
    flutter: <SiFlutter />,
    openaiapi: <SiOpenai />,
    sass: <SiSass />,
    tailwindcss: <SiTailwindcss />,
    material: <SiMaterialdesign />,
    antdesign: <SiAntdesign />,
    express: <SiExpress />,
    dart: <SiDart />,
    jest: <SiJest />,
    sqlalchemy: <SiSqlalchemy />,
    vite: <SiVite />,
    pytest: <SiPytest />,
    vercel: <SiVercel />,
    docker: <SiDocker />,
    materialui: <SiMaterialdesign />,
    amazondynamodb: <SiAmazondynamodb />,
    amazonwebservices: <SiAmazonwebservices />,
    openai: <SiOpenai />,
    nodejs: <SiNodedotjs />,
    git: <SiGit />,
    github: <SiGithub />,
    terraform: <SiTerraform />,
    cicd: <SiGithubactions />,
    pinecone: 
    <Image 
      src="/pinecone.png" 
      className="bg-white rounded-full" 
      alt="Pinecone Logo" 
      width={30} 
      height={30} 
    />,
    stabilityai: <Image src="/stabilityai.png" alt="Stability AI Logo" width={30} height={30} />,
  };

  const techNameLower = techName.toLocaleLowerCase().replace(/[ ,./]/g, "");
  return (
    <div>
      {icons[techNameLower] || <SiJavascript />}
    </div>
  )

}

export default TechnologieIcon;