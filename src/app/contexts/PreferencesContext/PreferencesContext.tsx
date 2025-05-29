"use client"

import { createContext } from "react";
import { PreferencesContextProps } from "./PreferencesContextProps";
import { Languages } from "@/app/constants/enums/languages";


export const PreferencesContext = createContext<PreferencesContextProps>({
  language: Languages.ENGLISH,
  setLanguage: () => {},
});
