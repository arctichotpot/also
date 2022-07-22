import { atom, selector } from "recoil";
import { save } from "../utils/save";
import i18n from "../local/i18n";

// app info
export const appState = atom({
    key: 'appState',
    default: {
        title: 'also',
        language: save.get('LANGUAGE') || 'en'
    }
})

export const selectorAppState = selector({
    key: 'selectorAppState',
    get: ({ get }) => {
        save.set('LANGUAGE', get(appState).language)
        try {
            i18n.changeLanguage(get(appState).language)
        } catch (e) {
            console.log(e)
        }
        return get(appState)
    },
    set: ({ set, get }, newValue) => {
        set(appState, newValue)
        save.set('LANGUAGE', get(appState).language)
        try {
            i18n.changeLanguage(get(appState).language)
        } catch (e) {
            console.log(e)
        }
    }
})