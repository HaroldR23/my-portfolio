import { Languages } from "@/app/constants/enums/languages";
import { LanguageOption } from "@/app/models/languageOption";

export interface LanguageSelectorModalProps {
    isOpen: boolean;
    handleLanguageSelect: (Language: Languages) => void;
    currentLanguage: Languages;
    languages: LanguageOption[];
}
