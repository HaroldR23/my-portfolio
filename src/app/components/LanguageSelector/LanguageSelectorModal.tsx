import { LanguageSelectorModalProps } from "./LanguageSelectorModalProps";

const LanguageSelectorModal = ({
  isOpen, 
  handleLanguageSelect, 
  currentLanguage,
  languages
}: LanguageSelectorModalProps) => {
  if (!isOpen) return null;
	
  return (
    <div 
      className={
        `fixed bottom-20 right-6 sm:right-10 z-50 bg-white
				 rounded-lg shadow-lg p-4 w-64 transform transition-all duration-300 ease-in-out ${
    	isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
    }`}
    >
      <div className="grid gap-2 max-h-80 overflow-y-auto">
        {languages.map((lang, index) => (
          <button
            key={index}
            onClick={() => handleLanguageSelect(lang)}
            className={`flex items-center p-2 rounded-md transition-colors ${
              currentLanguage === lang 
                ? 'bg-blue-50 text-blue-600' 
                : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            <div className="flex flex-col items-start">
              <span className="font-medium">{lang}</span>
            </div>
          </button>
        ))}
      </div>
			
    </div>
  );
}

export default LanguageSelectorModal;
