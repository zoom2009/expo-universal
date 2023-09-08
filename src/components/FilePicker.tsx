import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, Platform } from 'react-native'
import * as R from 'ramda'
import { Layout } from '@/components/Layout'
import { Icon } from '@/components/Icon'
import Button, { ACTIVE_OPACITY } from '@/components/Button'
import theme from '@/utilities/theme'
import * as DocumentPicker from 'expo-document-picker'
import { getInsets } from '@/utilities/getInsets'
import PdfView from '@/components/PdfView'

interface IFilePickerProps {
  multiple?: boolean
  label?: string
  buttonLabel?: string
  maximum?: number
  values: any[]
  onChange: (files: DocumentPicker.DocumentPickerResult) => void
}

const base64ToBlob = (_base64String: string) => {
  const [, base64Data] = _base64String.split(',')
  const binStr = atob(base64Data)
  const len = binStr.length;
  const arr = new Uint8Array(len)
  for (let i = 0; i < len; i++) {
    arr[i] = binStr.charCodeAt(i)
  }
  return new Blob([arr], { type: 'application/pdf' })
}

const FilePicker = (props: IFilePickerProps) => {
  const {
    label = 'choose images',
    buttonLabel = 'Click for upload',
    multiple = false,
    values,
    onChange,
    maximum = 9999,
  } = props

  const insets = getInsets()
  const [previewPdfIndex, setPreviewPdfIndex] = useState(-1)

  const onClosePreview = () => {
    setPreviewPdfIndex(-1)
  }

  const onOpenFilePicker = () => {
    DocumentPicker.getDocumentAsync({ multiple, type: 'application/pdf' }).then((result) => {
      if (!result.canceled) {
        onChange({
          canceled: false,
          assets: R.slice(0, maximum, [...result.assets, ...values]),
        })
      }
    }).catch((e) => {
      console.log('fail to picking files:', e)
    })
  }

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
              onPress={onOpenFilePicker}
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
                const onView = () => {
                  if (Platform.OS === 'android' || Platform.OS === 'ios') {
                    setPreviewPdfIndex(index)
                  } else {
                    const blob = base64ToBlob(v.uri)
                    const url = URL.createObjectURL(blob as any)
                    const pdfWindow = window.open('')
                    // @ts-ignore
                    pdfWindow.document.write("<iframe width='100%' height='100%' src='" + url + "'></iframe>")
                  }
                }

                const onRemove = () => {
                  onChange({
                    canceled: false,
                    assets: R.remove(index, 1, values),
                  })
                }

                return (
                  <View key={`${index}`} className="w-1/3 flex justify-center items-center relative">
                    <View className="w-[96%] h-[114px] rounded-md mt-4 self-center bg-[#ccc] justify-center items-center">
                      <View className="-mt-[32px]" />
                      <Icon.FilePdf
                        weight="bold"
                        size={36}
                        color="#e74c3c"
                      />
                      <View className="h-1" />
                      <Text numberOfLines={3} className="px-1.5 text-sm text-[#555]">
                        {v.name}
                      </Text>
                    </View>
                    <TouchableOpacity
                      activeOpacity={ACTIVE_OPACITY}
                      className="absolute top-1 -right-1.5 z-10 w-[28px] h-[28px] flex justify-center items-center bg-danger rounded-full"
                      onPress={onRemove}
                    >
                      <Icon.X weight="bold" size={14} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={ACTIVE_OPACITY}
                      className="absolute bottom-0.5 right-1 z-10"
                      onPress={onView}
                    >
                      <Icon.ArrowSquareUpRight weight="regular" size={30} color={theme.colors.primary} />
                    </TouchableOpacity>
                  </View>
                )
              })}
            </View>
          </View>
        </Layout._2_1>
      </Layout.Wrapper>
      <Modal animationType="slide" transparent visible={previewPdfIndex !== -1}>
        <View className="flex flex-1 bg-white">
          <View style={{ paddingTop: insets.top + 15, paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: '#e9e9e9', position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
            <Text className="text-center font-bold text-xl">Preview</Text>
            <TouchableOpacity
              onPress={onClosePreview}
              activeOpacity={ACTIVE_OPACITY}
              style={{ paddingTop: insets.top + 15, paddingBottom: 15 }}
              className="absolute right-4"
            >
              <Icon.X weight="bold" size={24} color={theme.colors.info} />
            </TouchableOpacity>
          </View>
          {previewPdfIndex !== -1 && (
            <PdfView uri={R.pathOr('', [previewPdfIndex, 'uri'], values)} />
          )}
        </View>
      </Modal>
    </>
  )
}

export default FilePicker
