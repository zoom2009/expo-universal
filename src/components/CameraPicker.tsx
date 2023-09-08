import React, { useEffect, useRef, useState } from 'react'
import { Image, SafeAreaView, TouchableOpacity, Text, View, Modal, Platform, Switch, useWindowDimensions } from 'react-native'
import CameraModule, { CameraCapturedPicture, Camera } from 'expo-camera'
import Button, { ACTIVE_OPACITY } from '@/components/Button'
import { Icon } from '@/components/Icon'
import theme from '@/utilities/theme'

interface ICameraPickerProps {
  isShowCamera: boolean
  onClose: () => void
  onChangeEffect: (image: CameraCapturedPicture) => void
}

export const CameraPicker = (props: ICameraPickerProps) => {
  const {
    isShowCamera = true,
    onClose,
    onChangeEffect,
  } = props

  const { height, width } = useWindowDimensions()

  const onCloseFunction = () => {
    onClose()
  }
  const cameraRef: any = useRef()
  const [radio, setRadio] = useState('')
  const [picture, setPicture] = useState<CameraCapturedPicture | undefined>(undefined)
  const [cameraType, setCameraType] = useState<any>('front')
  const [permission, requestPermission] = Camera.useCameraPermissions()

  const prepareRatio = async () => {
    if (Platform.OS === 'android') {
      const DESIRED_RATIO = '16:9'
      const ratios = await cameraRef.current.getSupportedRatiosAsync()
      // @ts-ignore
      const ratio = ratios.find((ratio) => ratio === DESIRED_RATIO) || ratios[ratios.length - 1];
      setRadio(ratio)
    }
}

  const onSave = () => {
    if (picture) {
      onChangeEffect(picture)
      onCloseFunction()
      setTimeout(() => {
        setPicture(undefined)
      }, 1000)
    }
  }

  const onReject = () => setPicture(undefined)

  const onToggleSwitch = (value: boolean) => setCameraType(value ? CameraModule.CameraType.back : CameraModule.CameraType.front)

  const onTakePicture = () => {
    if (cameraRef.current && cameraRef.current.takePictureAsync) {
      cameraRef.current.takePictureAsync({
        quality: 1,
        scale: 1,
        base64: false,
      }).then((pic: CameraCapturedPicture) => {
        setPicture(pic)
      }).catch((e: any) => {
        console.log('e:', e)
      })
    }
  }

  useEffect(() => {
    if (isShowCamera) {
      requestPermission()
    }
  }, [isShowCamera])

  return (
    <Modal visible={isShowCamera} animationType="slide" onRequestClose={onCloseFunction}>
      <View className="w-screen h-screen">
        {picture && (
        <View className="flex flex-1 relative">
          <Image
            className="w-full h-full"
            source={{ uri: picture.uri }}
          />
          <View className="absolute z-10 bottom-10 w-full justify-center items-center flex flex-row">
            <Button
              LeftIcon={<Icon.FloppyDisk color="white" size={30} />}
              text="บันทึก"
              onPress={onSave}
              type="primary"
            />
            <View className="w-4" />
            <Button
              LeftIcon={<Icon.ArrowClockwise color="white" size={30} />}
              text="ถ่ายใหม่"
              onPress={onReject}
              type="danger"
            />
          </View>
        </View>
        )}
        {isShowCamera && permission && permission.granted && !picture && (
        <Camera
          ratio={radio}
          style={{ flex: 1, width, height: height - 100, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
          type={cameraType}
          onCameraReady={prepareRatio}
          ref={cameraRef}
        >
          <SafeAreaView style={{ flex: 1, width: '100%' }}>
            <View className="w-full justify-between flex flex-row p-4 items-start">
              <TouchableOpacity
                activeOpacity={ACTIVE_OPACITY}
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} className="rounded-full px-4 py-2"
                onPress={onCloseFunction}
              >
                <Icon.CaretLeft
                  size={36}
                  color="white"
                />
              </TouchableOpacity>
              {(Platform.OS === 'android' || Platform.OS === 'ios') && (
              <View className="rounded-xl px-3 py-0.5 bg-gray-300 items-center justify-center flex flex-row">
                <Text className="text-md">
                  สลับกล้อง
                </Text>
                <Switch
                  onValueChange={onToggleSwitch}
                  value={cameraType === CameraModule.CameraType.back}
                  thumbColor={theme.colors.primary}
                  trackColor={{ true: theme.colors.info }}
                />
              </View>
              )}
            </View>
            <View className="flex flex-1" />
            <View className="p-4">
            <TouchableOpacity
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
              className="mx-auto w-48 py-1.5 rounded-full justify-center items-center"
              activeOpacity={ACTIVE_OPACITY}
              onPress={onTakePicture}
            >
              <View className="bg-black p-4 rounded-full">
                <Icon.Camera size={30} color="white" />
              </View>
            </TouchableOpacity>
          </View>
          </SafeAreaView>
        </Camera>
        )}
      </View>
    </Modal>
  )
}
