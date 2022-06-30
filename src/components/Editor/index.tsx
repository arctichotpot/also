import { Card, Button } from '@douyinfe/semi-ui'
import { EditorContent, useEditor, Editor } from '@tiptap/react'

import StarterKit from '@tiptap/starter-kit'
import styled from 'styled-components'

import './styles.scss'

interface MenuBarProps {
  editor: Editor
}

const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) {
    return null
  }

  return (
    <>
      <Button
        theme="borderless"
        type="primary"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        粗体
      </Button>
      <Button
        theme="borderless"
        type="primary"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        斜体
      </Button>

      <Button
        theme="borderless"
        type="primary"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        标题
      </Button>
    </>
  )
}

const EditorCard = styled(Card)`
  height: auto;
`

export default function EditorComponents() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `hello`,
  })

  return (
    <EditorCard
      bodyStyle={{
        padding: 10,
      }}
    >
      <EditorContent editor={editor} />
      <MenuBar editor={editor as Editor} />
    </EditorCard>
  )
}
