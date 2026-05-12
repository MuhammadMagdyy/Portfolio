import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "home": "Home",
      "about": "About",
      "services": "Services",
      "certificates": "Certificates",
      "projects": "Projects",
      "contact": "Contact",
      // Add keys for the rest of your sections here
      "hero_title": "Software Engineer", 
      "hero_subtitle": "Building production-ready RAG applications"
    }
  },
  ar: {
    translation: {
      "home": "الرئيسية",
      "about": "من أنا",
      "services": "الخدمات",
      "certificates": "الشهادات",
      "projects": "المشاريع",
      "contact": "تواصل معي",
      "hero_title": "مهندس برمجيات",
      "hero_subtitle": "بناء تطبيقات RAG جاهزة للإنتاج"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    react: {
      useSuspense: false // CRITICAL: This prevents the blank screen crash
    }
  });

i18n.on('languageChanged', (lng) => {
  document.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
});

export default i18n;