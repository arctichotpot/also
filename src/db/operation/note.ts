import { db, NotesProps } from "../db";
import { nanoid } from "nanoid"
import dayjs from "dayjs";
import { Toast } from "@douyinfe/semi-ui";

export default {
    // get all note list
    list: () => {
        return db.notes.toArray()
    },
    // add new note 
    add: async (content: string) => {
        const id = nanoid()

        try {
            db.notes.put({
                id,
                body: content,
                created_at: dayjs().toString(),
                updated_at: ""
            })
            Toast.success('Add success!')

        } catch (e) {
            Toast.error('Add error!')
        }
    },
    // update note 
    update: async (id: string, params: NotesProps) => {
        try {
            db.notes.update(id, params)
            Toast.success('Update success!')
        } catch (e) {
            Toast.success('Update error!')
        }

    },
    // delete note
    delete: async (id: string) => {
        try {
            db.notes.delete(id)
            Toast.success('Delete success!')
        } catch (e) {
            Toast.success('Delete error!')
        }
    }
}