'use client';

import { motion } from 'motion/react';

import usePreferencesContext from '@/app/hooks/usePreferencesContext';
import { LIST_SERVICES, SERVICES_SUBTITLE, SERVICES_TITLE } from '@/app/constants/data/data';
import ServiceCard from './ServiceCard';



const ServicesSection = () => {
  const { language } = usePreferencesContext();

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="services">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950" />
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{SERVICES_TITLE[language]}</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {SERVICES_SUBTITLE[language]}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {LIST_SERVICES[language].map((service, index) => (
            <ServiceCard key={index} service={service} index={index} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
