import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import ptTranslations from "../../locale/pt.json"
import enTranslations from "../../locale/en.json"


i18n.use(initReactI18next).init({
  resources: {
    en: {
      ...enTranslations
    },
    pt: {
      ...ptTranslations
    },
  },
  lng: 'pt',
})