import { ExternalLink, Sparkles } from 'lucide-react';

import { motion } from 'motion/react';
import Badge from '../common/Badge';
import Image from 'next/image';
import Button from '../common/Button';
import { Languages } from '@/app/constants/enums/languages';
import { FEATURED_PROJECTS, FEATURED_PROJECTS_SUB, FEATURED_WORK, PRBLOEM_TITLE, PROJECTS_LIST, SOLUTION_TITLE, VIEW_PROJECT } from '@/app/constants/data/data';
import TechnologieIcon from '../TechnologieIcon/TechnologieIcon';


const FeaturedProjects = ({ language }: { language: Languages }) => {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            {FEATURED_WORK[language]}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{FEATURED_PROJECTS[language]}</h2>
          <p className="text-slate-400 text-lg">{FEATURED_PROJECTS_SUB[language]}</p>
        </motion.div>

        <div className="space-y-12">
          {PROJECTS_LIST[language].slice(0, 3).map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="grid lg:grid-cols-2 gap-8 bg-gradient-to-br from-slate-800/40 to-slate-900/40 
                            rounded-2xl overflow-hidden border border-blue-500/10 hover:border-blue-500/30 
                            transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <Image 
                    fill
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Problem → Solution */}
                  <div className="space-y-3 p-4 bg-slate-900/50 rounded-xl border border-blue-500/10">
                    <div>
                      <span className="text-sm md:text-base uppercase text-red-400 font-semibold">{PRBLOEM_TITLE[language]}</span>
                      <p className="text-sm md:text-base text-slate-400 mt-1">{project.problem}</p>
                    </div>
                    <div className="h-px bg-blue-500/20" />
                    <div>
                      <span className="text-sm md:text-base uppercase text-green-400 font-semibold">{SOLUTION_TITLE[language]}</span>
                      <p className="text-sm md:text-base text-slate-400 mt-1">{project.solution}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="bg-blue-500/5 text-blue-300 border-blue-500/20 text-sm"
                      >
                        {tech}
                        <TechnologieIcon techName={tech} />
                      </Badge>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 text-sm md:text-base"
                      asChild
                    >
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {VIEW_PROJECT[language].split(' ')[0]}
                      </a>
                    </Button>
                    {/* <Button 
                      variant="outline"
                      className="border-blue-500/30 text-blue-200 hover:bg-blue-500/10"
                      asChild
                    >
                      <a href={project.github[0]?.url} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        {REPOSITORY[language].replace('•', '')}
                      </a>
                    </Button> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
