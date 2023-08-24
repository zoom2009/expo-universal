import { View, Text, ScrollView } from 'react-native'
import React, { useRef } from 'react'
import { scrollTo, getPositionView } from '@/utilities/scrollTo'
import Button from '@/components/Button'
import SafeView from '@/components/SafeView'
import Label from '@/components/Label'
import CodeHighLighter from '@/components/CodeHighLighter'

const _15ScrollTo = () => {
  const positionRef = useRef({ x: 0, y: 0 })
  const scrollViewRef = useRef(null)

  return (
    <SafeView style={{ paddingTop: 0, paddingBottom: 0 }}>
      <ScrollView ref={scrollViewRef} contentContainerStyle={{ flexGrow: 1, padding: 12 }}>
        <View className="h-2" />
        <Label bold>Basic</Label>
        <View className="h-4" />
        <CodeHighLighter language="typescript">
          {`const positionRef = useRef({ x: 0, y: 0 })\nconst scrollViewRef = useRef(null)`}
        </CodeHighLighter>
        <View className="h-4" />
        <CodeHighLighter language="typescript">
          {`const onMove = scrollTo({\n\tscrollViewRef,\n\tx: positionRef.current.x,\n\ty: positionRef.current.y\n})`}
        </CodeHighLighter>
        <View className="h-4" />
        <CodeHighLighter language="typescript">
          {`const onLayout = (e: any) => {\n\tif (positionRef.current.x === 0) {\n\t\tconst { x, y } = getPositionView(e)\n\t\tpositionRef.current = { x, y }\n\t}\n}`}
        </CodeHighLighter>
        <View className="h-4" />
        <CodeHighLighter>
          {`<ScrollView ref={scrollViewRef}>\n\t<Button onPress={onMove} />\n\t<View className="mt-[1000px]" />\n\t<TargetView onLayout={onLayout} />\n</ScrollView>`}
        </CodeHighLighter>
        <View className="h-8" />
        <Button
          type="info-outline"
          text="Scroll To Bottom View"
          onPress={() => scrollTo({ scrollViewRef, x: positionRef.current.x, y: positionRef.current.y })}
        />
        <View className="h-screen" />
        <View
          className="h-64 bg-warning justify-center items-center"
          onLayout={(e) => {
            if (positionRef.current.x === 0) {
              const { x, y } = getPositionView(e)
              positionRef.current = { x, y }
            }
          }}
        >
          <Text className="text-white text-lg font-bold">Hi ~ I'm here</Text>
        </View>
        <View className="h-10" />
      </ScrollView>
    </SafeView>
  )
}

export default _15ScrollTo
