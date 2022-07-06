import Dexie from 'dexie';
import { importInto, exportDB } from 'dexie-export-import';
import { saveAs } from 'file-saver';

export interface MemoProps {
    id: string
    body: string
    created_at: string
}

export interface TodoProps {
    id: string
    title: string
    created_at: string
    children: TodoChildrenProps[]
}

export interface TodoChildrenProps {
    id: string
    content: string,
    pid: string
}

class MySubClassedDexie extends Dexie {
    memo!: Dexie.Table<MemoProps, string>;
    todo!: Dexie.Table<TodoProps, string>;

    constructor() {
        super('memoDB');
        this.version(3).stores({
            memo: 'id, content, created_at',
            todo: 'id,title,children,created_at'
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

