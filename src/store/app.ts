import { atom, selector } from "recoil";
import { save } from "../utils/save";

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
        return get(appState)
    },
    set: ({ set, get }, newValue) => {
        set(appState, newValue)
        save.set('LANGUAGE', get(appState).language)
    }
})