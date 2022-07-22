import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import language from "./language.json"

const resources = {
    en: {
        translation: { ...language.en }
    },
    zh: {
        translation: { ...language.zh }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;