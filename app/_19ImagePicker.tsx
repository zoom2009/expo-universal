import React, { useState } from 'react'
import { Linking, Text, TouchableOpacity, View } from 'react-native'
import PageContainer from '@/layout/PageContainer'
import ImagePicker from '@/components/ImagePicker'
import { ImagePickerResult } from 'expo-image-picker'
import Label from '@/components/Label'
import CodeHighLighter from '@/components/CodeHighLighter'
import { ACTIVE_OPACITY } from '@/components/Button'

const _19ImagePicker = () => {
  const [images, setImages] = useState<any>([])
  const onChangeImages = (images: ImagePickerResult) => {
    setImages(images.assets)
  }

  return (
    <PageContainer>
      <View className="h-2" />
      <Label bold>Basic</Label>
      <View className="h-4" />
      <CodeHighLighter language="typescript">
        {`const [images, setImages] = useState<any>([])`}
      </CodeHighLighter>
      <View className="h-4" />
      <CodeHighLighter language="typescript">
        {`const onChangeImages = (images: ImagePickerResult) => {\n\tsetImages(images.assets)\n}`}
      </CodeHighLighter>
      <View className="h-4" />
      <CodeHighLighter>
        {`<ImagePicker\n\tvalues={images}\n\tonChange={onChangeImages}\n\tmultiple\n\tmaximum={6}\n\tlabel="Choose Images"\n\tbuttonLabel="Press for upload"\n/>`}
      </CodeHighLighter>
      <View className="h-4" />
      <TouchableOpacity
        onPress={() => Linking.openURL('https://docs.expo.dev/versions/latest/sdk/imagepicker')}
        activeOpacity={ACTIVE_OPACITY}
        className="px-2"
      >
        <Text className="text-lg font-bold text-blue-400">More Info About Expo Image Picker</Text>
      </TouchableOpacity>
      <View className="h-10" />
      <View className="w-full h-[1px] bg-[#999]" />
      <View className="h-14" />
      <ImagePicker
        values={images}
        onChange={onChangeImages}
        multiple
        maximum={6}
        label="Choose Images"
        buttonLabel="Press for upload"
      />
      <View className="h-10" />
    </PageContainer>
  )
}

export default _19ImagePicker
