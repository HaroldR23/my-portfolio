"use client";

import {
  ABOUT_ME_TEXT_ENG, COPYRIGHT_LOGO_URL, INTRODUCTION_MY_SELF_ENG 
} from "@/app/constants/data";
import { 
  ABOUT_ME_CONTAINER, 
  BUTTON_STYLE, 
  INTRODUCTION_MY_SELF_STYLE, 
  PARAGRAPH_STYLE, 
  TEXT_CONTAINER 
} from "@/app/constants/styles";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div id="aboutMe" className={ABOUT_ME_CONTAINER}>
      <div className={TEXT_CONTAINER}>
        <h1 className={INTRODUCTION_MY_SELF_STYLE}>{INTRODUCTION_MY_SELF_ENG}</h1>
        <p className={PARAGRAPH_STYLE}>
          {ABOUT_ME_TEXT_ENG}
        </p>
        <button className={BUTTON_STYLE} onClick={() => console.log("Download CV")}>
          Downlad CV
        </button>
      </div>
      <Image alt="Here should be my photo" src={COPYRIGHT_LOGO_URL} width={100} height={100}/>
    </div>
  );
};

export default AboutMe;