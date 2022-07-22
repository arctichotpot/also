export interface SavaProps {
    set(name: string, value: string): void,
    get(name: string): string | null,
    remove(name: string): void,
    clear(): void,
}


export const save: SavaProps = {
    set: (name: string, value: string) => {
        localStorage.setItem(name, value)
    },
    get: (name: string): string | null => localStorage.getItem(name),
    remove: (name: string) => {
        localStorage.removeItem(name)
    },
    clear: () => {
        localStorage.clear()
    }
}

