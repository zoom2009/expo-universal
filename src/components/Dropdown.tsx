import React, { useCallback, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { OutsidePressHandler } from '@/components/OutsidePressHandler'
import WithLabelAndError from './Hoc/WithLabelAndError'

export type TOption = { label: string, value: string }

export interface IDropdownProps {
  label?: string
  error?: string
  bold?: boolean
  required?: boolean
  placeholder?: string
  searchable?: boolean
  searchPlaceholder?: string
  options: TOption[]
  value: string | null
  onChange: (value: string) => void
}

const Dropdown = (props: IDropdownProps) => {
  const {
    label,
    error,
    bold = false,
    required = false,
    searchable = false,
    searchPlaceholder,
    placeholder,
    options,
    value,
    onChange,
  } = props
  const [open, setOpen] = useState(false)
  const onOutside = useCallback(() => {
    open && setOpen(false)
  }, [open])

  return (
    <OutsidePressHandler onOutside={onOutside}>
      <WithLabelAndError label={label} bold={bold} required={required} error={error}>
        <DropDownPicker
          searchable={searchable}
          searchPlaceholder={searchPlaceholder}
          open={open}
          items={options}
          setOpen={setOpen}
          value={value as any}
          setValue={onChange as any}
          listMode="SCROLLVIEW"
          placeholder={placeholder}
          placeholderStyle={{ color: '#999' }}
        />
      </WithLabelAndError>
    </OutsidePressHandler>
  )
}

export default Dropdown
