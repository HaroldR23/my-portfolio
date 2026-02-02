'use client';

import { motion } from 'motion/react';

import { Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import Badge from '../common/Badge';
import { BLOG_SUBTITLE, BLOG_TITLE, LIST_BLOGS } from '@/app/constants/data/data';
import usePreferencesContext from '@/app/hooks/usePreferencesContext';


const Blog = () => {
  const { language } = usePreferencesContext();

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{BLOG_TITLE[language]}</h2>
          <p className="text-slate-400 text-lg">{BLOG_SUBTITLE[language]}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {LIST_BLOGS[language].map((post, index) => (
            <motion.a
              target="_blank" 
              rel="noopener noreferrer"
              href={post.url}
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="h-full bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl 
                            border border-blue-500/10 hover:border-blue-500/30 overflow-hidden
                            transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10
                            hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    fill
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-blue-500/90 text-white border-0">
                    {post.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 
                               transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-700/50">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
