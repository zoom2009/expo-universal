import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Label from '@/components/Label'
import { OutsidePressHandler } from '@/components/OutsidePressHandler'
import { useFocusEffect } from 'expo-router'
import CodeHighLighter from '@/components/CodeHighLighter'
import PageContainer from '@/layout/PageContainer'

const _10OutsidePressHandler = () => {
  const [counter, setCounter] = useState(0)
  const [isFocus, setIsFocus] = useState(true)

  useFocusEffect(
    React.useCallback(() => {
      setIsFocus(true)
      return () => {
        setIsFocus(false)
        setCounter(0)
      }
    }, [])
  )

  return (
    <PageContainer>
      <View className="h-2" />
      <Label bold>Basic</Label>
      <View className="h-4" />
      {isFocus && (
      <OutsidePressHandler onOutside={() => setCounter(prev => prev + 1)}>
        <View className="rounded-md w-64 h-64 bg-danger flex justify-center items-center">
          <Text className="text-md text-white">Click Outside This View</Text>
        </View>
      </OutsidePressHandler>
      )}
      <View className="h-4" />
      <Text className="text-md">Outside click count: {counter}</Text>
      <View className="h-8" />
      <Label required bold>NOTE</Label>
      <View className="h-2" />
      <CodeHighLighter language="typescript">
        {`// You should render <OutsidePressHandler /> only when screen focus for more performace`}
      </CodeHighLighter>
      <View className="h-4" />
      <CodeHighLighter>
        {`<OutsidePressHandler onOutside={onCount}>\n\t<Box />\n</OutsidePressHandler>`}
      </CodeHighLighter>
    </PageContainer>
  )
}

export default _10OutsidePressHandler
