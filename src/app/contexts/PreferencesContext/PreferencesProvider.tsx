"use client"

import { useEffect, useState } from "react";
import { PreferencesContext } from "./PreferencesContext";
import { Languages } from "@/app/constants/enums/languages";

const PreferencesProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Languages>(Languages.ENGLISH);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("language");
      if (storedLanguage && Object.values(Languages).includes(storedLanguage as Languages)) {
        setLanguage(storedLanguage as Languages);
      }
    }
  }, []);

  const handleLanguageChange = (value: Languages) => {
    setLanguage(value);
    localStorage.setItem("language", value.toString());
  };
  return (
    <PreferencesContext.Provider 
      value={{ language: language, setLanguage: handleLanguageChange }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export default PreferencesProvider;
