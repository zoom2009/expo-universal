import { View, Text, Modal, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React, { memo, useState } from 'react'
import { IMenuPickerProps } from './interface'
import theme from '@/utilities/theme'
import Label from '@/components/Label'
import { ACTIVE_OPACITY } from '@/components/Button'
import cn from '@/utilities/cn'

const TouchableWithHover = memo((props: TouchableOpacityProps) => {
  const [isHover, setIsHover] = useState(false)
  const onMouseEnter = () => setIsHover(true)
  const onMouseLeave = () => setIsHover(false)

  return (
    <TouchableOpacity
      {...props}
      className={cn([props.className, isHover && 'bg-primary-outline'])}
      // @ts-ignore
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {props.children}
    </TouchableOpacity>
  )
})

const MenuPicker = (props: IMenuPickerProps) => {
  const {
    label,
    visible = false,
    menus,
    cencelText = 'cancel',
    onClose,
    onSelect,
  } = props

  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={{ backgroundColor: theme.backdropColor }} className="flex flex-1 justify-center items-center">
        <View className="justify-center items-center pt-3 bg-white min-w-[360px] rounded-md">
          <Label textClassName="text-[#777]">{label}</Label>
          <View className="h-[1px] bg-[#e9e9e9] w-full mt-3" />
          <View className="flex flex-col w-full">
            {menus.map(({ text, color, Icon }, index) => {
              const onSelectFunction = () => {
                onSelect({ text, index })
                onClose()
              }

              return (
                <TouchableWithHover
                  key={`${index}`}
                  onPress={onSelectFunction}
                  className={"flex flex-row w-full p-4 justify-center items-center border-b-[1px] border-b-[#e9e9e9] relative"}
                >
                  {Icon && (
                    <View className="absolute left-6">
                      {Icon}
                    </View>
                  )}
                  <Text className="text-[23px]" style={{ color: color || theme.colors.primary }}>
                    {text}
                  </Text>
                </TouchableWithHover>
              )
            })}
          </View>
          <TouchableOpacity
            activeOpacity={ACTIVE_OPACITY}
            onPress={onClose}
            className="w-full justify-center items-center"
          >
            <Text className="text-[23px] text-danger p-4">
              {cencelText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default MenuPicker
