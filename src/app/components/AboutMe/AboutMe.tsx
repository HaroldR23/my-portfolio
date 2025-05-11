"use client";

import { ABOUT_ME_TEXT_ENG, COPYRIGHT_LOGO_URL, INTRODUCTION_MY_SELF_ENG } from "@/app/constants";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div>
      <div>
        <h1>{INTRODUCTION_MY_SELF_ENG}</h1>
        <p>
          {ABOUT_ME_TEXT_ENG}
        </p>
        <button onClick={() => console.log("Download CV")}>
          Downlad CV
        </button>
      </div>
      <Image alt="Here should be my photo" src={COPYRIGHT_LOGO_URL} width={100} height={100}/>
    </div>
  );
};

export default AboutMe;