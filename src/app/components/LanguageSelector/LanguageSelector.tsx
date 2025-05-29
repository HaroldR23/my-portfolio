/* eslint-disable max-len */

"use client";
import { SiGlovo } from "react-icons/si";
import LanguageSelectorModal from "./LanguageSelectorModal";
import usePreferencesContext from "@/app/hooks/usePreferencesContext";
import { useState } from "react";
import { LANGUAGE_OPTIONS } from "@/app/constants/data/data";

const LanguageSelector = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { setLanguage, language } = usePreferencesContext();

  const handleLanguageSelect = (language: string) => {
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
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-10 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ease-in-out group"
        aria-label="Change language"
      >
        <SiGlovo />
        <span className="absolute bottom-14 right-0 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {language}
        </span>
      </button>

      <LanguageSelectorModal
        isOpen={isModalOpen}
        handleLanguageSelect={handleLanguageSelect}
        currentLanguage={language}
        languages={LANGUAGE_OPTIONS}
      />

      {/* Background overlay when modal is open */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-10 z-30"
          onClick={() => setIsModalOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default LanguageSelector;
