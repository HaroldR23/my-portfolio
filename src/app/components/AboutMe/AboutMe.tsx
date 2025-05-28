"use client";

import {
  ABOUT_ME_TEXT_ENG, 
  CV_BUTTON_TEXT_ENG, 
  CV_DOWNLOAD_NAME_ENG, 
  CV_DOWNLOAD_URL_ENG, 
  INTRODUCTION_MY_SELF_ENG, 
  INTRODUCTION_MY_SELF_ENG_SUB_HEADER
} from "@/app/constants/data/english";
import { 
  ABOUT_ME_CONTAINER, 
  BUTTON_STYLE, 
  IMAGE_STYLE, 
  INTRODUCTION_MY_SELF_STYLE, 
  PARAGRAPH_STYLE, 
  TEXT_CONTAINER 
} from "@/app/constants/styles/aboutMeStyles";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const AboutMe = () => {
  const isMobile = useMediaQuery( {maxWidth: 767} );

  return (
    <div id="aboutMe" className={ABOUT_ME_CONTAINER}>
      {isMobile && <Image
        alt="public/hr_picture.png" 
        src="/hr_picture.png" className={IMAGE_STYLE} width={250} height={250}
      />}
      <div className={TEXT_CONTAINER}>
        <h1 className={INTRODUCTION_MY_SELF_STYLE}>{INTRODUCTION_MY_SELF_ENG}</h1>
        <h3 className="text-base sm:text-lg md:text-lg lg:text-xl font-bold tracking-tight">
          {INTRODUCTION_MY_SELF_ENG_SUB_HEADER}
        </h3>
        <p className={PARAGRAPH_STYLE}>
          {ABOUT_ME_TEXT_ENG}
        </p>
        <a 
          href={CV_DOWNLOAD_URL_ENG} 
          download={CV_DOWNLOAD_NAME_ENG}
          className={BUTTON_STYLE}
        >
          {CV_BUTTON_TEXT_ENG}
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