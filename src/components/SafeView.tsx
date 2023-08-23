import { StyleProp, View, ViewStyle } from 'react-native'
import React from 'react'
import { getInsets } from '@/utilities/getInsets'

interface ISafeViewProps {
  children: React.ReactNode
  className?: string
  style?: StyleProp<ViewStyle>
}

const SafeView = (props: ISafeViewProps) => {
  const insets = getInsets()
  const { className, children, style } = props

  return (
    <View
      className={className}
      style={[{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right }, style]}
    >
      {children}
    </View>
  )
}

export default SafeView
