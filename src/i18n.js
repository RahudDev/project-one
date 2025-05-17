import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translation files
import translationDE from './locales/de/translation.json';
import translationEN from './locales/en/translation.json';


// Add more languages as needed

const resources = {
  de: {
    translation: translationDE,
  },
  en : {
    translation : translationEN,
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
