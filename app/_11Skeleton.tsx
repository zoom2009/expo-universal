import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Skeleton } from '@/components/Skeleton'
import Label from '@/components/Label'
import CodeHighLighter from '@/components/CodeHighLighter'

const _11Skeleton = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: '2.5%' }}>
      <View className="h-2" />
      <Label bold>Basic</Label>
      <View className="h-4" />
      <View className="w-[400px] border-[1px] border-[#ccc] rounded-md p-4">
        <Skeleton isCenter borderRadius={100} width={100} height={100} />
        <View className="h-10" />
        <Skeleton width={370} height={35} />
        <View className="h-2" />
        <Skeleton width={200} height={35} />
        <View className="h-2" />
        <Skeleton width={180} height={35} />
      </View>
      <View className="h-4" />
      <CodeHighLighter>
        {`<View className="w-[400px] border-[1px] border-[#ccc] rounded-md p-4">\n\t<Skeleton isCenter borderRadius={100} width={100} height={100} />\n\t<View className="h-10" />\n\t<Skeleton width={370} height={35} />\n\t<View className="h-2" />\n\t<Skeleton width={200} height={35} />\n\t<View className="h-2" />\n\t<Skeleton width={180} height={35} />\n</View>`}
      </CodeHighLighter>
      <View className="h-10" />
    </ScrollView>
  )
}

export default _11Skeleton
