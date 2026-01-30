import { motion } from "motion/react";
import { Award } from "lucide-react";

import { LIST_EXPERIENCES } from "@/app/constants/data/data";
import Badge from "../common/Badge";
import { ExperienceCardProps } from "@/app/models/experiences";

  
const ExperienceCard = ({ exp, language }: ExperienceCardProps) => {
  return (
    <motion.div
      key={exp.id}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: exp.id * 0.2 }}
      className="relative"
    >
      {/* Timeline Line */}
      {exp.id !== LIST_EXPERIENCES[language].length - 1 && (
        <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent" />
      )}

      <div className="flex gap-6">
        {/* Icon */}
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 
                              flex items-center justify-center shadow-lg shadow-blue-500/25 relative z-10">
          <Award className="w-6 h-6 text-white" />
        </div>

        {/* Content */}
        <div className="flex-1 pb-8">
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-xl 
                                border border-blue-500/10 hover:border-blue-500/30 p-6 
                                transition-all duration-300 shadow-lg hover:shadow-blue-500/10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
                <p className="text-blue-400 font-medium">{exp.company}</p>
              </div>
              <Badge variant="outline" className="w-fit bg-blue-500/5 text-blue-300 border-blue-500/20">
                {exp.period}
              </Badge>
            </div>

            <ul className="space-y-3 mb-4">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-300">
                  <span className="text-blue-400 mt-1.5">▸</span>
                  <span className="text-sm md:text-base leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-xs rounded-full bg-slate-900/50 text-slate-400 border border-slate-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default ExperienceCard;
