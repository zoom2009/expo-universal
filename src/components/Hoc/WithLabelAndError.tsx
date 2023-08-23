import { View } from 'react-native'
import React from 'react'
import Label from '@/components/Label'
import ErrorMessage from '@/components/ErrorMessage'

interface IWithLabelProps {
  children: React.ReactNode
  label?: string
  bold?: boolean
  required?: boolean
  error?: string
}

const WithLabel = (props: IWithLabelProps) => {
  const {
    children,
    label,
    bold = false,
    required = false,
    error,
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
      {!!error && <ErrorMessage text={error} />}
    </View>
  )
}

export default WithLabel
