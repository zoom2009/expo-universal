import { View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { LoadingSpinnerOverlay } from '@/components/LoadingSpinnerOverlay'
import Label from '@/components/Label'
import Button from '@/components/Button'
import CodeHighLighter from '@/components/CodeHighLighter'

const _7LoadingSpinnerOverlay = () => {
  const [isShow1, setIsShow1] = useState(false)
  const [isShow2, setIsShow2] = useState(false)

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: '2.5%' }}>
      <LoadingSpinnerOverlay visible={isShow1} />
      <LoadingSpinnerOverlay
        visible={isShow2}
        text="Creating profile..."
        backgroundColor="green"
        textColor="red"
        spinnerColor="pink"
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
        {`<LoadingSpinnerOverlay\n\tvisible={isShow}\n\ttext="Creating profile..."\n\tbackgroundColor="green"\n\ttextColor="red"\n\tspinnerColor="pink"\n/>`}
      </CodeHighLighter>
      <View className="h-10" />
    </ScrollView>
  )
}

export default _7LoadingSpinnerOverlay
