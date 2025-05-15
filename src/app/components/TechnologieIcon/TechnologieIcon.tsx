import { JSX } from "react";
import { 
  SiJavascript, 
  SiNextdotjs, 
  SiNodedotjs,
  SiPostgresql, 
  SiPython, 
  SiReact, 
  SiTailwindcss,
  SiTypescript 
} from "react-icons/si";
import { TechnologieIconProps } from "./TechnologieIconProps";



const TechnologieIcon = ({ techName }: TechnologieIconProps) => {
  const icons: Record<string, JSX.Element> = {
    react: <SiReact />,
    javascript: <SiJavascript />,
    typescript: <SiTypescript />,
    nodejs: <SiNodedotjs />,
    postgresql: <SiPostgresql />,
    nextjs: <SiNextdotjs />,
    tailwindcss: <SiTailwindcss />,
    python: <SiPython />,
  };
 

  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full">
      {icons[techName.toLocaleLowerCase()] || <SiJavascript />}
    </div>
  )

}

export default TechnologieIcon;