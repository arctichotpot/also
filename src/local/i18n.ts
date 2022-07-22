import i18n from "i18next";
import language from "./language.json"
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: { ...language.en }
    },
    zh: {
        translation: { ...language.zh }
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    interpolation: {
        escapeValue: false
    }
});


export default i18n


export const Translate = (text: string): string => i18n.t(text)
