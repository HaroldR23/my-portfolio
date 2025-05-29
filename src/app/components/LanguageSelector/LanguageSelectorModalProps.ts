import { Languages } from "@/app/constants/enums/languages";

export interface LanguageSelectorModalProps {
    isOpen: boolean;
    handleLanguageSelect: (Language: Languages) => void;
    currentLanguage: Languages;
    languages: Languages[];
}
