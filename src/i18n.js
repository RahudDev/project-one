import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translation files
import translationEN from './locales/en/translation.json';
import translationHE from './locales/he/translation.json';
import translationAR from './locales/ar/translation.json';
import translationRU from './locales/ru/translation.json';
import translationZH from './locales/zh/translation.json';
import translationDE from './locales/de/translation.json';





// Add more languages as needed

const resources = {
  en : {
    translation : translationEN,
  },
   he : {
    translation : translationHE,
  },
   ar : {
    translation : translationAR,
  },
   ru : {
    translation : translationRU,
  },
   zh : {
    translation : translationZH,
  },
  de : {
    translation : translationDE,
  },
  // Add more languages as needed
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // Default language
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
