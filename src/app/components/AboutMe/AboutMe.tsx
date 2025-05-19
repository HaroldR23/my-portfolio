"use client";

import {
  ABOUT_ME_TEXT_ENG, 
  CV_BUTTON_TEXT_ENG, 
  CV_DOWNLOAD_NAME_ENG, 
  CV_DOWNLOAD_URL_ENG, 
  INTRODUCTION_MY_SELF_ENG, 
  INTRODUCTION_MY_SELF_ENG_SUB_HEADER
} from "@/app/constants/data";
import { 
  ABOUT_ME_CONTAINER, 
  BUTTON_STYLE, 
  INTRODUCTION_MY_SELF_STYLE, 
  PARAGRAPH_STYLE, 
  TEXT_CONTAINER 
} from "@/app/constants/styles/aboutMeStyles";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div id="aboutMe" className={ABOUT_ME_CONTAINER}>
      <div className={TEXT_CONTAINER}>
        <h1 className={INTRODUCTION_MY_SELF_STYLE}>{INTRODUCTION_MY_SELF_ENG}</h1>
        <h3 className="text-xl font-bold tracking-tight">{INTRODUCTION_MY_SELF_ENG_SUB_HEADER}</h3>
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
      <Image 
        alt="public/hr_picture.png" 
        src="/hr_picture.png" className="rounded-full" width={400} height={400}/>
    </div>
  );
};

export default AboutMe;