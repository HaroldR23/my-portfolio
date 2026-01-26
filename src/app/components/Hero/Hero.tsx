"use client";

import { Calendar, Download } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

import { 
  ABOUT_ME_TEXT, 
  CV_BUTTON_TEXT,
  CV_DOWNLOAD_NAME, 
  CV_DOWNLOAD_URL, 
  INTRODUCTION_MY_SELF, 
  INTRODUCTION_MY_SELF_SUB_HEADER, 
  OPEN_TO_OPPORTUNITIES, 
  VIEW_PROJECT
} from "@/app/constants/data/data";
import usePreferencesContext from "@/app/hooks/usePreferencesContext";
import Button from "../common/Button";
import Badge from "../common/Badge";

const Hero = () => {
  const { language } = usePreferencesContext();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-slate-950 to-slate-950" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20">
            <Calendar className="w-3 h-3 mr-1" />
            {OPEN_TO_OPPORTUNITIES[language]}
          </Badge>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              {INTRODUCTION_MY_SELF[language]}
            </h1>
            <p className="text-xl md:text-2xl text-blue-200/80">
              {INTRODUCTION_MY_SELF_SUB_HEADER[language]}
            </p>
          </div>

          <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
            {ABOUT_ME_TEXT[language]}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
            >
              <a href={CV_DOWNLOAD_URL[language]} download={CV_DOWNLOAD_NAME} className="flex items-center">
                <Download className="w-5 h-5 mr-2" />
                {CV_BUTTON_TEXT[language]}
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-500/30 text-blue-200 hover:bg-blue-500/10 hover:border-blue-500/50 cursor-pointer"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {VIEW_PROJECT[language]}
            </Button>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Gradient Ring */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 rounded-full blur-xl opacity-30 animate-pulse" />
            
            {/* Profile Image */}
            <Image
              src="/hr_picture.png"
              alt="Harold Rodriguez"
              width={520}
              height={520}
              className="relative w-64 h-64 md:w-120 md:h-120 rounded-full object-cover border-4 border-blue-500/20 shadow-2xl"
            />
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )

  // return (
  //   <div id="Hero" className={ABOUT_ME_CONTAINER}>
  //     {isMobile && <Image
  //       alt="public/hr_picture.png" 
  //       src="/hr_picture.png" className={IMAGE_STYLE} width={250} height={250}
  //     />}
  //     <div className={TEXT_CONTAINER}>
  //       <h1 className={INTRODUCTION_MY_SELF_STYLE}>{INTRODUCTION_MY_SELF[language]}</h1>
  //       <h3 className="text-base sm:text-lg md:text-lg lg:text-xl font-bold tracking-tight">
  //         {INTRODUCTION_MY_SELF_SUB_HEADER[language]}
  //       </h3>
  //       <p className={PARAGRAPH_STYLE}>
  //         {ABOUT_ME_TEXT[language]}
  //       </p>
  //       <a 
  //         href={CV_DOWNLOAD_URL[language]} 
  //         download={CV_DOWNLOAD_NAME}
  //         className={BUTTON_STYLE}
  //       >
  //         {CV_BUTTON_TEXT[language]}
  //       </a>
  //     </div>
  //     {!isMobile && <Image
  //       alt="public/hr_picture.png" 
  //       src="/hr_picture.png" 
  //       className={IMAGE_STYLE} width={400} height={400}
  //     />}
  //   </div>
  // );
};

export default Hero;