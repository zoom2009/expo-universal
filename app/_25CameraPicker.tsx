import { View } from 'react-native'
import React, { useState } from 'react'
import PageContainer from '@/layout/PageContainer'
import Label from '@/components/Label'
import Button from '@/components/Button'
import CodeHighLighter from '@/components/CodeHighLighter'
import { CameraPicker } from '@/components/CameraPicker'

const _25CameraPicker = () => {
  const [openCamera, setOpenCamera] = useState(false)

  return (
    <PageContainer>
      <View className="h-2" />
      <Label bold>Basic</Label>
      <View className="h-4" />
      <Button
        text="Basic"
        onPress={() => setOpenCamera(true)}
        type="info"
      />
      <View className="h-6" />
      <CodeHighLighter language="typescript">
        {`const [openCamera, setOpenCamera] = useState(false)`}
      </CodeHighLighter>
      <View className="h-4" />
      <CodeHighLighter>
        {`<CameraPicker\n\tisShowCamera={openCamera}\n\tonClose={() => setOpenCamera(false)}\n\tonChangeEffect={console.log}\n/>`}
      </CodeHighLighter>
      <View className="h-10" />
      <CameraPicker
        isShowCamera={openCamera}
        onClose={() => setOpenCamera(false)}
        onChangeEffect={console.log}
      />
    </PageContainer>
  )
}

export default _25CameraPicker
