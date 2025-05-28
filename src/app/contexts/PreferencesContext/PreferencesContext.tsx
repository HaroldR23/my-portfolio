"use client"

import { createContext } from "react";
import { PreferencesContextProps } from "./PreferencesContextProps";

export const PreferencesContext = createContext<PreferencesContextProps>({
  language: "",
  setLanguage: () => {},
});
