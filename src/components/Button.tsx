import { memo } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Label from '@/components/Label'
import cn from '@/utilities/cn'

export const ACTIVE_OPACITY = 0.6

export type IButtonType = 'disabled' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'transparent' | 'muted' | 'disabled-outline' | 'primary-outline' | 'secondary-outline' | 'info-outline' | 'success-outline' | 'warning-outline' | 'danger-outline' | 'transparent-outline' | 'muted-outline'

interface IButtonProps {
  text: string
  type: IButtonType
  onPress: (() => void) | undefined
  bold?: boolean
  LeftIcon?: any
  RightIcon?: any
  textColor?: string
  backgroundColor?: string
  borderColor?: string
  containerClassName?: string
  isFull?: boolean
}

const getColor = (type: IButtonType) => {
  if (type === 'disabled') return { backgroundColor: 'bg-disabled', textColor: 'text-white', borderColor: 'border-disabled' }
  if (type === 'primary') return { backgroundColor: 'bg-primary', textColor: 'text-white', borderColor: 'border-primary' }
  if (type === 'secondary') return { backgroundColor: 'bg-secondary', textColor: 'text-black', borderColor: 'border-secondary' }
  if (type === 'info') return { backgroundColor: 'bg-info', textColor: 'text-white', borderColor: 'border-info' }
  if (type === 'success') return { backgroundColor: 'bg-success', textColor: 'text-white', borderColor: 'border-success' }
  if (type === 'warning') return { backgroundColor: 'bg-warning', textColor: 'text-white', borderColor: 'border-warning' }
  if (type === 'danger') return { backgroundColor: 'bg-danger', textColor: 'text-white', borderColor: 'border-danger' }
  if (type === 'transparent') return { backgroundColor: 'bg-transparent', textColor: 'text-black', borderColor: 'border-transparent' }
  if (type === 'muted') return { backgroundColor: 'bg-muted', textColor: 'text-white', borderColor: 'border-muted' }
  if (type === 'disabled-outline') return { backgroundColor: 'bg-disabled-outline', textColor: 'text-white', borderColor: 'border-disabled' }
  if (type === 'primary-outline') return { backgroundColor: 'bg-primary-outline', textColor: 'text-primary', borderColor: 'border-primary' }
  if (type === 'secondary-outline') return { backgroundColor: 'bg-secondary-outline', textColor: 'text-secondary', borderColor: 'border-secondary' }
  if (type === 'info-outline') return { backgroundColor: 'bg-info-outline', textColor: 'text-info', borderColor: 'border-info' }
  if (type === 'success-outline') return { backgroundColor: 'bg-success-outline', textColor: 'text-success', borderColor: 'border-success' }
  if (type === 'warning-outline') return { backgroundColor: 'bg-warning-outline', textColor: 'text-warning', borderColor: 'border-warning' }
  if (type === 'danger-outline') return { backgroundColor: 'bg-danger-outline', textColor: 'text-danger', borderColor: 'border-danger' }
  if (type === 'transparent-outline') return { backgroundColor: 'bg-transparent-outline', textColor: 'text-black', borderColor: 'border-transparent' }
  if (type === 'muted-outline') return { backgroundColor: 'bg-muted-outline', textColor: 'text-muted', borderColor: 'border-muted' }
  return { backgroundColor: '', textColor: '', borderColor: '' }
}

const Button = memo((props: IButtonProps) => {
  const {
    text,
    type,
    onPress,
    bold,
    LeftIcon,
    RightIcon,
    textColor,
    backgroundColor,
    borderColor,
    containerClassName,
    isFull = false,
  } = props

  const {
    backgroundColor: _backgroundColor,
    borderColor: _borderColor,
    textColor: _textColor,
  } = getColor(type)

  return (
    <TouchableOpacity
      activeOpacity={ACTIVE_OPACITY}
      onPress={onPress}
      className={cn([
        containerClassName,
        backgroundColor || _backgroundColor,
        borderColor || _borderColor,
        'border-2 h-[50px] self-center rounded-full justify-center items-center flex-row',
        isFull && 'w-full',
      ])}
    >
      {LeftIcon ? (
      <View className="pl-8 pr-2">
        {LeftIcon}
      </View>
      ) : (
      <View className="pl-8" />
      )}
      <Label textClassName={textColor || _textColor} bold={bold}>
        {text}
      </Label>
      {RightIcon ? (
      <View className="pr-8 pl-1">
        {RightIcon}
      </View>
      ) : (
      <View className="pr-8" />
      )}
    </TouchableOpacity>
  )
})

export default Button
