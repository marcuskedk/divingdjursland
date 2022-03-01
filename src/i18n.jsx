import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './assets/locales/en/translation.json';
import translationDA from './assets/locales/da/translation.json';

const resources = {
  en: {
      translation: translationEN
  },
  da: {
      translation: translationDA
  }
};
  

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'da',
    debug: false,
    keySeparator: false, // we do not use keys in form messages.welcome
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    }
  });

export default i18n;