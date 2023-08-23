import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import * as R from 'ramda'
import WithLabel from '@/components/Hoc/WithLabel'
import cn from '@/utilities/cn'
import { Icon } from '@/components/Icon'
import theme from '@/utilities/theme'

export type TValue = { label?: string, value: boolean }
type TType = 'radio' | 'checkbox'
type TDirection = 'vertical' | 'horizontal'

interface IToggleSingleProps {
  type: TType
  label?: string
  bold?: boolean
  required?: boolean
  multiple?: false | undefined
  value: boolean
  onToggle: (value: boolean) => void
}

interface IToggleMultipleProps {
  type: TType
  label?: string
  bold?: boolean
  required?: boolean
  multiple: true
  value: TValue[]
  direction: TDirection
  onToggle: (value: TValue[]) => void
}

interface ISingleToggle {
  label?: string
  direction?: TDirection
  type: TType
  checked: boolean
  onToggle: (value: boolean) => void
}

const iconProps: any = { weight: 'fill', size: 30, color: theme.colors.info }

const SingleToggle = (props: ISingleToggle) => {
  const { onToggle, type, label, checked, direction } = props
  const onToggleFunction = () => onToggle(!checked)

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onToggleFunction}
      className={cn([
        'flex flex-row items-center self-start',
        direction === 'vertical' && 'mb-2',
      ])}
    >
      {type === 'checkbox' ? (
        <>
          {checked ? <Icon.CheckSquare {...iconProps} /> : <Icon.Square {...iconProps} weight="regular" />}
        </>
      ) : (
        <>
          {checked ? <Icon.RadioButton {...iconProps} /> : <Icon.Circle {...iconProps} weight="regular" />}
        </>
      )}
      <Text className="text-md px-2">{label}</Text>
    </TouchableOpacity>
  )
}

interface IOnToggleProps {
  value: boolean
  label?: string
}

const Toggle = (props: IToggleSingleProps | IToggleMultipleProps) => {
  const {
    type,
    label,
    multiple,
    value,
    onToggle,
    bold,
    required,
  } = props

  const onToggleSingle = ({  value: _v, label: _l  }: IOnToggleProps) => () => {
    if (type === 'checkbox') {
      onToggle(!_v as any)
    } else {
      if (_v === false) {
        onToggle(!_v as any)
      }
    }
  }

  const onToggleMultiple = ({ value: _v, label: _l }: IOnToggleProps) => () => {
    const toggleIndex = (value as TValue[]).findIndex(({ label: _label, value: _value }) => _label === _l && _value === _v)
    if (type === 'checkbox') {
      const newValue = R.assocPath([toggleIndex, 'value'], !_v, value) as any
      onToggle(newValue)
    } else {
      let newValue: TValue[] = []
      for (let i = 0; i < (value as TValue[]).length; i++) {
        const v = (value as TValue[])[i]
        if (v.value === _v && v.label === _l) {
          newValue.push({ value: true, label: v.label })
        } else {
          newValue.push({ value: false, label: v.label })
        }
      }
      onToggle(newValue as any)
    }
  }

  if (multiple) return (
    <WithLabel label={label} bold={bold} required={required}>
      <View
        className={cn([
          'flex',
          props.direction === 'vertical' ? 'flex-col' : 'flex-row gap-2 flex-wrap',
        ])}
      >
        {value.map(({ value, label }, index) => (
          <SingleToggle
            key={`${index}`}
            type={type}
            label={label}
            checked={value}
            onToggle={onToggleMultiple({ value, label })}
            direction={props.direction}
          />
        ))}
      </View>
    </WithLabel>
  )

  return (
    <WithLabel label={label} bold={bold} required={required}>
      <SingleToggle
        type={type}
        label={label}
        checked={value}
        onToggle={onToggleSingle({ value, label })}
      />
    </WithLabel>
  )
}

export default Toggle
