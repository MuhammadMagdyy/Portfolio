import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

// Ensure it is an 'export default'
export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[12px] font-medium border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
    >
      <Globe size={14} className="text-cyan-400" />
      <span className="dark:text-zinc-100 text-zinc-900">
        {i18n.language === 'en' ? 'العربية' : 'English'}
      </span>
    </button>
  );
}