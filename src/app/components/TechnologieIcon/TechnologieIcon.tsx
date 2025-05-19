import { JSX } from "react";
import { 
  SiAmazondynamodb,
  SiAmazonwebservices,
  SiAntdesign,
  SiCss3,
  SiDart,
  SiExpress,
  SiFastapi,
  SiFlutter,
  SiHtml5,
  SiJavascript, 
  SiJest, 
  SiMaterialdesign, 
  SiNextdotjs, 
  SiOpenai,
  SiPostgresql, 
  SiPytest, 
  SiPython, 
  SiReact, 
  SiSass, 
  SiSqlalchemy, 
  SiTailwindcss, 
  SiTypescript, 
  SiVercel, 
  SiVite
} from "react-icons/si";
import { TechnologieIconProps } from "./TechnologieIconProps";



const TechnologieIcon = ({ techName }: TechnologieIconProps) => {
  const icons: Record<string, JSX.Element> = {
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
  };

  const techNameLower = techName.toLocaleLowerCase().replace(/[ ,.]/g, "");;
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full">
      {icons[techNameLower] || <SiJavascript />}
    </div>
  )

}

export default TechnologieIcon;