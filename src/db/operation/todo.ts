import { db, TodoChildrenProps, TodoProps } from "../db";
import { nanoid } from "nanoid"
import dayjs from "dayjs";
import { Toast } from "@douyinfe/semi-ui";

export default {
    // get all note list
    list: () => {
        console.log(db.todo.toArray())
        return db.todo.orderBy('created_at').toArray()
    },

    // add new note 
    add: async (title: string) => {
        const id = nanoid()

        try {
            await db.todo.add({
                id,
                title: title,
                created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
                children: []
            })
            Toast.success('Add success!')

        } catch (e) {
            console.log(e)
            Toast.error('Add error!')
        }
    },
    // update note 
    update: async (id: string, params: TodoProps) => {
        try {
            await db.todo.update(id, params)
            // Toast.success('Update success!')
        } catch (e) {
            Toast.success('Update error!')
        }

    },
    // delete note
    delete: async (id: string) => {
        try {
            await db.todo.delete(id)
            Toast.success('Delete success!')
        } catch (e) {
            Toast.success('Delete error!')
        }
    }
}