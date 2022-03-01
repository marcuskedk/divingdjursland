import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from '../public/locales/en/translation.json';
import translationDA from '../public/locales/da/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    da: {
        translation: translationDA
    }
};
  

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'da'
  });

export default i18n;