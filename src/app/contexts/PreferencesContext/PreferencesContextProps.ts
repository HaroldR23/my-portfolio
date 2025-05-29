import { Languages } from "@/app/constants/enums/languages";

export interface PreferencesContextProps {
    language: Languages;
    setLanguage: (language: string) => void;
}
