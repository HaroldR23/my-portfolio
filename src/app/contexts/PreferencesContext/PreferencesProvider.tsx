"use client"

import { useMemo, useState } from "react";
import { PreferencesContext } from "./PreferencesContext";

const PreferencesProvider = ({ children }: { children: React.ReactNode }) => {
  const [isEnglish, setIsEnglish] = useState<boolean>(true);
	
  useMemo(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("isEnglish");
      if (storedLanguage) {
        setIsEnglish(storedLanguage === "true");
      }
    }
  }, []);

  const handleIsEnglishChange = (value: boolean) => {
    setIsEnglish(value);
    localStorage.setItem("isEnglish", value.toString());
  };
  return (
    <PreferencesContext.Provider 
      value={{ isEnglish: isEnglish, setIsEnglish: handleIsEnglishChange }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export default PreferencesProvider;
