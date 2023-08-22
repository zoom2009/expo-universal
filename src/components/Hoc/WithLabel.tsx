import { View, Text } from 'react-native'
import React from 'react'
import Label from '@/components/Label'

interface IWithLabelProps {
  children: React.ReactNode
  label?: string
  bold?: boolean
  required?: boolean
}

const WithLabel = (props: IWithLabelProps) => {
  const {
    children,
    label,
    bold = false,
    required = false,
  } = props

  return (
    <View className="flex">
      {label && (
      <>
        <Label bold={bold} required={required}>{label}</Label>
        <View className="h-2" />
      </>
      )}
      {children}
    </View>
  )
}

export default WithLabel
