import cn from '@/utilities/cn'
import { memo } from 'react'
import { Text, View, TextProps } from 'react-native'
import { clsx } from 'clsx'

interface ILabelProps {
  children: string
  required?: boolean
  fullText?: boolean
  bold?: boolean
  textClassName?: string
  color?: string
  otherTextProps?: TextProps
}

const Label = memo((props: ILabelProps) => {
  const {
    children,
    required = false,
    fullText = false,
    bold = false,
    textClassName = '',
    color,
    otherTextProps = {},
  } = props

  return (
    <View className="flex flex-row items-center">
      <Text
        style={color ? { color } : {}}
        className={cn('text-green-500', 'text-red-500', 'text-blue-500')}
        {...otherTextProps}
      >
        {children}
        <Text className="pl-0.5 text-danger text-sm sm:text-lg lg:text-xl">
          {required ? '*' : ''}
        </Text>
      </Text>
    </View>
  )
})

export default Label
