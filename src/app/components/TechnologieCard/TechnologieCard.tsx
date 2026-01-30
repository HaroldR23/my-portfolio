import { motion } from "motion/react";

import { TechnologieCardProps } from "./TechnologieCardProps";
import TechnologieIcon from "../TechnologieIcon/TechnologieIcon";

const TechnologieCard = ({ title, technologies, index }: TechnologieCardProps) => {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index ?? 0) * 0.1 }}
      className="space-y-6"
    >
      <h3 className="text-blue-400 font-semibold text-sm md:text-base uppercase tracking-wider">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: (index ?? 0) * 0.05 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="group"
          >
            <div className="px-4 py-2 rounded-full bg-slate-800/50 border border-blue-500/20 
                                  hover:bg-blue-500/10 hover:border-blue-500/40 transition-all cursor-default
                                  shadow-lg hover:shadow-blue-500/20"
            >
              <span className="text-sm lg:text-base text-slate-200 flex items-center gap-2">
                <span className="group-hover:scale-110 transition-transform">
                  <TechnologieIcon techName={tech} />
                </span>
                {tech}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default TechnologieCard;
