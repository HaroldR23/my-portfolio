"use client";

import { 
  ABOUT_ME_TEXT, 
  CV_BUTTON_TEXT,
  CV_DOWNLOAD_NAME, 
  CV_DOWNLOAD_URL, 
  INTRODUCTION_MY_SELF, 
  INTRODUCTION_MY_SELF_SUB_HEADER 
} from "@/app/constants/data/data";
import { 
  ABOUT_ME_CONTAINER, 
  BUTTON_STYLE, 
  IMAGE_STYLE, 
  INTRODUCTION_MY_SELF_STYLE, 
  PARAGRAPH_STYLE, 
  TEXT_CONTAINER 
} from "@/app/constants/styles/aboutMeStyles";
import usePreferencesContext from "@/app/hooks/usePreferencesContext";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const AboutMe = () => {
  const isMobile = useMediaQuery( {maxWidth: 767} );
  const { language } = usePreferencesContext();

  return (
    <div id="aboutMe" className={ABOUT_ME_CONTAINER}>
      {isMobile && <Image
        alt="public/hr_picture.png" 
        src="/hr_picture.png" className={IMAGE_STYLE} width={250} height={250}
      />}
      <div className={TEXT_CONTAINER}>
        <h1 className={INTRODUCTION_MY_SELF_STYLE}>{INTRODUCTION_MY_SELF[language]}</h1>
        <h3 className="text-base sm:text-lg md:text-lg lg:text-xl font-bold tracking-tight">
          {INTRODUCTION_MY_SELF_SUB_HEADER[language]}
        </h3>
        <p className={PARAGRAPH_STYLE}>
          {ABOUT_ME_TEXT[language]}
        </p>
        <a 
          href={CV_DOWNLOAD_URL[language]} 
          download={CV_DOWNLOAD_NAME}
          className={BUTTON_STYLE}
        >
          {CV_BUTTON_TEXT[language]}
        </a>
      </div>
      {!isMobile && <Image
        alt="public/hr_picture.png" 
        src="/hr_picture.png" 
        className={IMAGE_STYLE} width={400} height={400}
      />}
    </div>
  );
};

export default AboutMe;