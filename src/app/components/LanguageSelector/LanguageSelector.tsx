"use client";
import { SiGoogletranslate } from "react-icons/si";
import LanguageSelectorModal from "./LanguageSelectorModal";
import usePreferencesContext from "@/app/hooks/usePreferencesContext";
import { useState } from "react";
import { LANGUAGE_OPTIONS } from "@/app/constants/data/data";
import { Languages } from "@/app/constants/enums/languages";
import { 
  BACKGROUND_OVERLAY, 
  BUTTON_CONTAINER, TOOLTIP 
} from "@/app/constants/styles/languageSelectorStyles";

const LanguageSelector = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { setLanguage, language } = usePreferencesContext();

  const handleLanguageSelect = (language: Languages) => {
    setLanguage(language);
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className={BUTTON_CONTAINER}
        aria-label="Change language"
      >
        <SiGoogletranslate />
        <span className={TOOLTIP}>
          {language.charAt(0).toUpperCase() + language.slice(1)}
        </span>
      </button>

      <LanguageSelectorModal
        isOpen={isModalOpen}
        handleLanguageSelect={handleLanguageSelect}
        currentLanguage={language}
        languages={LANGUAGE_OPTIONS}
      />

      {isModalOpen && (
        <div 
          className={BACKGROUND_OVERLAY}
          onClick={() => setIsModalOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default LanguageSelector;
