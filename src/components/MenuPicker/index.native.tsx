import React, { useEffect, useMemo, useRef } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import BottomSheet, { BottomSheetView, useBottomSheetDynamicSnapPoints } from '@gorhom/bottom-sheet'
import Label from '@/components/Label'
import { getInsets } from '@/utilities/getInsets'
import theme from '@/utilities/theme'
import { ACTIVE_OPACITY } from '@/components/Button'
import { IMenuPickerProps } from './interface'

const MenuPicker = (props: IMenuPickerProps) => {
  const {
    label,
    visible = false,
    menus,
    cencelText = 'cancel',
    onClose,
    onSelect,
  } = props

  const insets = getInsets()
  const bottomSheetRef = useRef<BottomSheet>(null)
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], [])

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints)

  useEffect(() => {
    if (visible) {
      bottomSheetRef.current?.expand()
    } else {
      bottomSheetRef.current?.close()
    }
  }, [visible])

  return (
    <BottomSheet
      index={-1}
      ref={bottomSheetRef}
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      enablePanDownToClose
      style={{ width: '95%', marginLeft: '2.5%' }}
      onClose={onClose}
    >
      <BottomSheetView onLayout={handleContentLayout}>
        <View className="justify-center items-center pt-3">
          <Label textClassName="text-[#777]">{label}</Label>
          <View className="h-[1px] bg-[#e9e9e9] w-full mt-3" />
          <View className="flex flex-col w-full">
            {menus.map(({ text, color, Icon }, index) => {
              const onSelectFunction = () => {
                onSelect({ text, index })
                onClose()
              }

              return (
                <TouchableOpacity
                  key={`${index}`}
                  onPress={onSelectFunction}
                  className="flex flex-row w-full p-4 justify-center items-center border-b-[1px] border-b-[#e9e9e9] relative"
                >
                  {Icon && (
                    <View className="absolute left-6">
                      {Icon}
                    </View>
                  )}
                  <Text className="text-[23px]" style={{ color: color || theme.colors.primary }}>
                    {text}
                  </Text>
                </TouchableOpacity>
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
        <View style={{ height: insets.bottom + 20 }} />
      </BottomSheetView>
    </BottomSheet>
  )
}

export default MenuPicker
