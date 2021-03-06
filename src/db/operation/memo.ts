import { db, MemoProps } from "../db";
import { nanoid } from "nanoid"
import dayjs from "dayjs";
import { Toast } from "@douyinfe/semi-ui";

export default {
    // get all note list
    list: () => {
        return db.memo.orderBy('created_at').reverse().toArray()
    },
    // add new note 
    add: async (content: string) => {
        const id = nanoid()

        try {
            await db.memo.add({
                id,
                body: content,
                created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
            })
            Toast.success('Add success!')

        } catch (e) {
            Toast.error('Add error!')
        }
    },
    // update note 
    update: async (id: string, params: MemoProps) => {
        try {
            await db.memo.update(id, params)
            Toast.success('Update success!')
        } catch (e) {
            Toast.success('Update error!')
        }

    },
    // delete note
    delete: async (id: string) => {
        try {
            await db.memo.delete(id)
            Toast.success('Delete success!')
        } catch (e) {
            Toast.success('Delete error!')
        }
    }
}