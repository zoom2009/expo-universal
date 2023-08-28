import { View, TextInput, KeyboardTypeOptions, Platform } from 'react-native'
import { ReactNode, useEffect, useMemo, useState } from 'react'
import { MaskedTextInput } from 'react-native-mask-text'
import Label from '@/components/Label'
import ErrorMessage from '@/components/ErrorMessage'
import cn from '@/utilities/cn'

interface IInputProps {
  label?: string
  onChangeEffect: (text: string) => void
  value: string
  forceHighLight?: boolean
  placeholder?: string
  disabledStyle?: boolean
  disabledInput?: boolean
  error?: string
  bold?: boolean
  required?: boolean
  isPassword?: boolean
  isTextArea?: boolean
  numberOfLines?: number
  keyboardType?: KeyboardTypeOptions | undefined
  onFocus?: () => void
  onBlur?: () => void
  textColor?: string
  RightIcon?: ReactNode
  transformOnChange?: (text: string) => string
  /** look how to use options here doc => https://github.com/akinncar/react-native-mask-text */
  isMask?: boolean
  /** look how to use options here doc => https://github.com/akinncar/react-native-mask-text */
  maskType?: string
  /** look how to use options here doc => https://github.com/akinncar/react-native-mask-text */
  maskString?: string
  /** look how to use options here doc => https://github.com/akinncar/react-native-mask-text */
  maskOptions?: any
}

const Input = (props: IInputProps) => {
  const {
    label,
    onChangeEffect,
    value,
    placeholder,
    disabledStyle,
    disabledInput,
    error,
    bold,
    required,
    isPassword,
    isTextArea,
    numberOfLines,
    keyboardType,
    onFocus,
    onBlur,
    textColor,
    transformOnChange,
    RightIcon,
    isMask = false,
    maskType,
    maskString,
    maskOptions,
    forceHighLight = false,
  } = props

  const [isFocus, setIsFocus] = useState(false)

  const onFocusFunction = () => {
    setIsFocus(true)
    onFocus && onFocus()
  }

  const onBlurFunction = () => {
    setIsFocus(false)
    onBlur && onBlur()
  }

  const borderColor = useMemo(() => {
    if (!!error) return 'border-danger'
    if (isFocus) return 'border-info'
    return 'border-[#555]'
  }, [isFocus, error])

  // @ts-ignore
  const InputComponent: typeof TextInput = !isMask ? TextInput : MaskedTextInput
  const otherProps = !isMask
    ? {}
    : { mask: maskString, options: maskOptions, type: maskType }

  const onChangeText = (text: string) => {
    if (!transformOnChange) {
      onChangeEffect(text)
    } else {
      const transformedText = transformOnChange(text)
      onChangeEffect(transformedText)
    }
  }

  useEffect(() => {
    setIsFocus(forceHighLight)
  }, [forceHighLight])
  
  return (
    <View className="w-full">
      {label && (
      <>
        <View className="flex flex-row justify-start items-center">
          <Label textClassName="text-sm sm:text-md" bold={bold} required={required}>
            {label}
          </Label>
        </View>
        <View className="h-3" />
      </>
      )}
      <View
        pointerEvents={!disabledInput ? 'auto' : 'none'}
        className={cn([
          'border-[1px] w-full rounded-md flex flex-row justify-between items-center',
          borderColor,
        ])}
      >
        <InputComponent
          {...otherProps}
          className={cn([
            'w-full p-4 rounded-md text-sm md:text-md flex-1 border-0 bg-white',
            disabledStyle && 'text-muted',
            isTextArea && 'h-32',
          ])}
          style={[
            // @ts-ignore
            Platform.OS === 'web' && { outlineStyle: 'none' },
            { textAlignVertical: isTextArea ? 'top' : 'auto' },
            !!textColor && { color: textColor }
          ]}
          value={value}
          onFocus={onFocusFunction}
          onBlur={onBlurFunction}
          onChangeText={onChangeText}
          multiline={isTextArea}
          secureTextEntry={isPassword}
          placeholder={placeholder}
          keyboardType={keyboardType}
          textContentType="none"
          numberOfLines={isTextArea ? numberOfLines : undefined}
          autoCorrect={false}
          placeholderTextColor="#999"
          autoCapitalize="none"
        />
        {!!RightIcon && (
          <View className="pr-4">
            {RightIcon}
          </View>
        )}
      </View>
      <ErrorMessage text={error} />
    </View>
  )
}

export default Input
