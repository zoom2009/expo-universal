import React, { useEffect, useState } from 'react'
import { View, Text, Image, Platform, TouchableOpacity } from 'react-native'
import * as R from 'ramda'
import { Icon } from '@/components/Icon'
import Button, { ACTIVE_OPACITY } from '@/components/Button'
import { Layout } from '@/components/Layout'
import theme from '@/utilities/theme'
import MenuPicker from '@/components/MenuPicker'
import * as ImagePickerModule from 'expo-image-picker'

interface IImagePickerProps {
  multiple?: boolean
  editable?: boolean
  aspect?: [number, number]
  type?: 'All' | 'Images' | 'Videos'
  label?: string
  buttonLabel?: string
  maximum?: number
  values: any[]
  onChange: (medias: ImagePickerModule.ImagePickerResult) => void
}

const menus = [
  { text: 'Camera', Icon: <Icon.Camera weight="bold" size={28} color={theme.colors.primary} /> },
  { text: 'Image', Icon: <Icon.Image weight="bold" size={28} color={theme.colors.primary} /> },
]

const ImagePicker = (props: IImagePickerProps) => {
  const {
    label = 'choose images',
    buttonLabel = 'Click for upload',
    multiple = false,
    editable = false,
    aspect,
    type = 'Images',
    values,
    onChange,
    maximum = 9999,
  } = props

  const [status, requestPermission] = ImagePickerModule.useCameraPermissions()
  const [isShowImageAndCameraMenu, setIsShowImageAndCameraMenu] = useState(false)
  const onCloseImageAndCameraMenu = () => {
    setIsShowImageAndCameraMenu(false)
  }
  const onSelectImageAndCameraMenu = ({ text, index }: { text: string, index: number }) => {
    if (index === 0) {
      openCameraPicker()
    } else if (index === 1) {
      openImagePicker()
    }
    onCloseImageAndCameraMenu()
  }

  const openImagePicker = () => {
    ImagePickerModule.launchImageLibraryAsync({
      mediaTypes: type as ImagePickerModule.MediaTypeOptions,
      allowsEditing: editable,
      allowsMultipleSelection: multiple,
      aspect,
    }).then((result) => {
      if (!result.canceled) {
        onChange({
          canceled: false,
          assets: R.slice(0, maximum, [...result.assets, ...values]),
        })
      }
    }).catch((e) => {
      console.log('fail to pick image e:', e)
    })
  }

  const openCameraPicker = () => {
    ImagePickerModule.launchCameraAsync({ allowsEditing: editable })
      .then((resuslt) => {
        if (!resuslt.canceled) {
          onChange(resuslt)
        }
      })
      .catch((e) => {
        console.log('fail to pick camera e:', e)
      })
  }

  const onOpenImagePicker = () => {
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      setIsShowImageAndCameraMenu(true)
    } else {
      openImagePicker()
    }
  }

  useEffect(() => {
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      requestPermission()
    }
  }, [])

  return (
    <>
      <Layout.Wrapper className="items-start">
        <Layout._2_1>
          <View className="flex flex-col border-dashed border-2 border-info rounded-lg justify-center items-center px-5 py-6">
            <Icon.UploadSimple size={48} color={theme.colors.primary} />
            <View className="h-4" />
            <Text className="text-md font-bold text-[#333]">{label}</Text>
            <View className="h-6" />
            <Button
              bold
              onPress={onOpenImagePicker}
              type="primary-outline"
              text={buttonLabel}
              containerClassName="self-center rounded-md"
            />
          </View>
        </Layout._2_1>
        <Layout._2_1>
          <View className="h-2 sm:h-0" />
          <View className="flex flex-1 flex-col border-dashed rounded-lg px-2 sm:px-4 pb-6">
            <View className="flex flex-row flex-wrap">
              {values.map((v, index) => {
                const onRemove = () => {
                  onChange({
                    canceled: false,
                    assets: R.remove(index, 1, values),
                  })
                }

                return (
                  <View key={`${index}`} className="w-1/3 flex justify-center items-center relative">
                    <Image
                      resizeMode="cover"
                      source={{ uri: v.uri }}
                      className="w-[90%] h-[100px] rounded-md mt-4 self-center"
                    />
                    <TouchableOpacity
                      activeOpacity={ACTIVE_OPACITY}
                      className="absolute -top-0 -right-0 z-10 w-[28px] h-[28px] flex justify-center items-center bg-danger rounded-full"
                      onPress={onRemove}
                    >
                      <Icon.X weight="bold" size={14} color="white" />
                    </TouchableOpacity>
                  </View>
                )
              })}
            </View>
          </View>
        </Layout._2_1>
      </Layout.Wrapper>
      <MenuPicker
        label="Menu"
        visible={isShowImageAndCameraMenu}
        onClose={onCloseImageAndCameraMenu}
        onSelect={onSelectImageAndCameraMenu}
        menus={menus}
      />
    </>
  )
}

export default ImagePicker
