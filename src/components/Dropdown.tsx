import React, { useState } from 'react'
import DropDownPicker, { ValueType } from 'react-native-dropdown-picker'
import { OutsidePressHandler } from '@/components/OutsidePressHandler'
import WithLabel from './Hoc/WithLabel'

export type TOption = { label: string, value: string }

export interface IDropdownProps {
  label?: string
  bold?: boolean
  required?: boolean
  placeholder?: string
  options: TOption[]
  value: string
  onChange: (value: string) => void
}

const Dropdown = (props: IDropdownProps) => {
  const {
    label,
    bold = false,
    required = false,
    placeholder,
    options,
    value,
    onChange,
  } = props
  const [open, setOpen] = useState(false)

  return (
    <OutsidePressHandler
      onOutside={() => setOpen(false)}
    >
      <WithLabel label={label} bold={bold} required={required}>
        <DropDownPicker
          open={open}
          items={options}
          setOpen={setOpen}
          value={value as any}
          setValue={onChange as any}
          listMode="SCROLLVIEW"
          placeholder={placeholder}
          placeholderStyle={{ color: '#999' }}
        />
      </WithLabel>
    </OutsidePressHandler>
  )
}

export default Dropdown
