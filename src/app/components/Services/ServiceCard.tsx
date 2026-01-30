import { ServiceCardProps } from "@/app/models/services";
import { motion } from "motion/react";
import Button from "../common/Button";
import { ArrowRight } from "lucide-react";
import { SERVICE_CTA_TEXT } from "@/app/constants/data/data";


const ServiceCard = ({ service, index, language }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <motion.div
      key={service.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="h-full bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl 
                              border border-blue-500/10 hover:border-blue-500/30 p-8 
                              transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10
                              hover:-translate-y-1">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 
                                flex items-center justify-center mb-6 group-hover:scale-110 
                                transition-transform shadow-lg shadow-blue-500/25">
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {service.title}
        </h3>
                  
        <p className="text-slate-400 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Benefits */}
        <ul className="space-y-2 mb-6">
          {service.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-2 text-sm text-slate-300">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              {benefit}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button 
          variant="ghost" 
          className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 p-0 h-auto font-medium group/btn"
          onClick={() => document.getElementById('contactMe')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {SERVICE_CTA_TEXT[language]}
          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  ); 
};

export default ServiceCard;
