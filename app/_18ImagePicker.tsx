import React, { useState } from 'react'
import { View } from 'react-native'
import PageContainer from '@/layout/PageContainer'
import ImagePicker from '@/components/ImagePicker'
import { ImagePickerResult } from 'expo-image-picker'

const _18ImagePicker = () => {
  const [images, setImages] = useState<any>([])
  const onChangeImages = (images: ImagePickerResult) => {
    setImages(images.assets)
  }

  return (
    <PageContainer>
      <View className="h-2" />
      <ImagePicker
        values={images}
        onChange={onChangeImages}
        multiple
        // editable
      />
    </PageContainer>
  )
}

export default _18ImagePicker
