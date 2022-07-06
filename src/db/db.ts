import Dexie from 'dexie';
import { importInto, exportDB } from 'dexie-export-import';
import { saveAs } from 'file-saver';

export interface MemoProps {
    id: string
    body: string
    created_at: string
    updated_at: string
    text?: string
    // tags: {
    //     key: string;
    //     value: string;
    // }[];
}

class MySubClassedDexie extends Dexie {
    memo!: Dexie.Table<MemoProps, string>;

    constructor() {
        super('memoDB');
        this.version(3).stores({
            memo: 'id, body, created_at, updated_at,text',
        });
    }
}

export const db = new MySubClassedDexie();

export const exportFile = async () => {
    const dbBlob = await exportDB(db, { prettyJson: true });
    saveAs(dbBlob, `rfmoDB.backup.json`);
};

export const exportFileInfo = async () => {
    const dbBlob = await exportDB(db, { prettyJson: true });
    return dbBlob;
};

export const importFileInfo = async (file: Blob) => {
    await importInto(db, file, { overwriteValues: true });
};

