import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import enLang from './locales/en/en.json';
import brLang from './locales/br/br.json';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: enLang
  },

  br: {
    translation: brLang
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'br',
    supportedLngs: ['br', 'en'],
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
