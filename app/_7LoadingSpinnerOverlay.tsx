import { View } from 'react-native'
import React, { useState } from 'react'
import { LoadingSpinnerOverlay } from '@/components/LoadingSpinnerOverlay'
import Label from '@/components/Label'
import Button from '@/components/Button'
import CodeHighLighter from '@/components/CodeHighLighter'
import PageContainer from '@/layout/PageContainer'
import Head from 'expo-router/head'

const _7LoadingSpinnerOverlay = () => {
  const [isShow1, setIsShow1] = useState(false)
  const [isShow2, setIsShow2] = useState(false)

  return (
    <PageContainer>
      <Head><title>LoadingSpinnerOverlay</title></Head>
      <LoadingSpinnerOverlay visible={isShow1} />
      <LoadingSpinnerOverlay
        visible={isShow2}
        text="Creating profile..."
        backgroundColor="#95afc0"
        textColor="black"
        spinnerColor="white"
      />
      <View className="h-2" />
      <Label bold>Basic</Label>
      <View className="h-4" />
      <Button
        text="Show Loading Basic"
        type="info"
        onPress={() => {
          setIsShow1(true)
          setTimeout(() => setIsShow1(false), 1500)
        }}
      />
      <View className="h-4" />
      <CodeHighLighter>
        {`<LoadingSpinnerOverlay visible={isShow} />`}
      </CodeHighLighter>
      <View className="h-10" />
      <View className="w-full h-[1px] bg-[#999]" />
      <View className="h-10" />
      <Label bold>Custom Styles</Label>
      <View className="h-4" />
      <Button
        text="Show Loading Custom"
        type="danger-outline"
        onPress={() => {
          setIsShow2(true)
          setTimeout(() => setIsShow2(false), 1500)
        }}
      />
      <View className="h-4" />
      <CodeHighLighter>
        {`<LoadingSpinnerOverlay\n\tvisible={isShow}\n\ttext="Creating profile..."\n\tbackgroundColor="#95afc0"\n\ttextColor="black"\n\tspinnerColor="white"\n/>`}
      </CodeHighLighter>
      <View className="h-10" />
    </PageContainer>
  )
}

export default _7LoadingSpinnerOverlay
