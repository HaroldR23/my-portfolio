'use client';

import { Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import Badge from '../common/Badge';
import { EXPERIENCE_HEADER, EXPERIENCE_SUB_TITLE, EXPERIENCE_TITLE, LIST_EXPERIENCES } from '@/app/constants/data/data';
import usePreferencesContext from '@/app/hooks/usePreferencesContext';
import ExperienceCard from './ExperienceCard';

const ExperienceSection = () => {
  const { language } = usePreferencesContext();
  return (
    <section className="py-20 px-4 relative" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 mb-4">
            <Briefcase className="w-3 h-3 mr-1" />
            {EXPERIENCE_HEADER[language]}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{EXPERIENCE_TITLE[language]}</h2>
          <p className="text-slate-400 text-lg">{EXPERIENCE_SUB_TITLE[language]}</p>

        </motion.div>

        <div className="space-y-8">
          {LIST_EXPERIENCES[language].map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
