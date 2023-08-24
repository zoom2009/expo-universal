import React, { useCallback, useMemo, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { OutsidePressHandler } from '@/components/OutsidePressHandler'
import WithLabelAndError from '@/components/Hoc/WithLabelAndError'
import { Icon } from '@/components/Icon'
import theme from '@/utilities/theme'
import { useWindowDimensions } from 'react-native'
import getViewPortType from '@/utilities/getViewPortType'

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
  onChangeSearchText?: (text: string) => void
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
    onChangeSearchText,
  } = props
  const { width } = useWindowDimensions()
  const [open, setOpen] = useState(false)

  const onChangeFunction = (item: string | Function) => {
    if (typeof item === 'function') {
      onChange(item() as string)
    } else {
      onChange(item)
    }
  }

  const onOutside = useCallback(() => {
    open && setOpen(false)
  }, [open])

  const ArrowUpIconComponent = useCallback(() => <Icon.CaretUp color={theme.colors.info} size={26} />, [])
  const ArrowDownIconComponent = useCallback(() => <Icon.CaretDown color={theme.colors.info} size={26} />, [])
  const fontSize = useMemo(() => {
    const vp = getViewPortType(width)
    if (vp === 'sm' || vp === 'normal') return +(theme.fontSize.sm.replace(/[^\d]/g, ''))
    return +(theme.fontSize.md.replace(/[^\d]/g, ''))
  }, [width])

  return (
    <OutsidePressHandler onOutside={onOutside}>
      <WithLabelAndError label={label} bold={bold} required={required} error={error}>
        <DropDownPicker
          onChangeSearchText={onChangeSearchText}
          searchable={searchable}
          searchPlaceholder={searchPlaceholder}
          open={open}
          items={options}
          setOpen={setOpen}
          value={value as any}
          setValue={onChangeFunction}
          listMode="SCROLLVIEW"
          placeholder={placeholder}
          placeholderStyle={{ color: '#999' }}
          ArrowUpIconComponent={ArrowUpIconComponent}
          ArrowDownIconComponent={ArrowDownIconComponent}
          style={{ borderColor: !open ? '#555' : theme.colors.info }}
          labelStyle={{ fontSize }}
          dropDownContainerStyle={{ borderColor: theme.colors.info }}
          searchTextInputStyle={{ borderColor: theme.colors.info, height: 40 }}
          searchContainerStyle={{ borderBottomWidth: 1, borderBottomColor: theme.colors.info }}
          listItemLabelStyle={{ fontSize }}
        />
      </WithLabelAndError>
    </OutsidePressHandler>
  )
}

export default Dropdown
