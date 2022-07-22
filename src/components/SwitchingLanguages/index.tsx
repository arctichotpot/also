import { Button, Select } from '@douyinfe/semi-ui'
import { IconLanguage } from '@douyinfe/semi-icons'
import { useRecoilState } from 'recoil'
import { selectorAppState } from '../../store/app'
import { useState } from 'react'

export default function SwitchingLanguages() {
  const [state, setState] = useRecoilState(selectorAppState)

  const [value, setValue] = useState(state.language)
  const handleChangeLanguage = (language: string) => {
    setState({ ...state, language })
    setValue(language)
  }

  return (
    <Select
      value={value}
      onChange={(value) => handleChangeLanguage(value as string)}
    >
      <Select.Option value="zh">中文</Select.Option>``
      <Select.Option value="en">English</Select.Option>
    </Select>
  )
}
