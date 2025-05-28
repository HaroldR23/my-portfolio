"use client"

import { useMemo, useState } from "react";
import { PreferencesContext } from "./PreferencesContext";

const PreferencesProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<string>("english");
	
  useMemo(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("language");
      if (storedLanguage) {
        setLanguage(storedLanguage);
      }
    }
  }, []);

  const handleLanguageChange = (value: string) => {
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
