import { View} from 'react-native'
import React from 'react'
import { Skeleton } from '@/components/Skeleton'
import Label from '@/components/Label'
import CodeHighLighter from '@/components/CodeHighLighter'
import PageContainer from '@/layout/PageContainer'
import Head from 'expo-router/head'

const _11Skeleton = () => {
  return (
    <PageContainer>
      <Head><title>Skeleton</title></Head>
      <View className="h-2" />
      <Label bold>Basic</Label>
      <View className="h-4" />
      <View className="w-[400px] border-[1px] border-[#ccc] rounded-md p-4">
        <Skeleton isCenter borderRadius={100} width={100} height={100} />
        <View className="h-10" />
        <Skeleton width={300} height={35} />
        <View className="h-2" />
        <Skeleton width={180} height={35} />
        <View className="h-2" />
        <Skeleton width={130} height={35} />
      </View>
      <View className="h-4" />
      <CodeHighLighter>
        {`<View className="w-[400px] border-[1px] border-[#ccc] rounded-md p-4">\n\t<Skeleton isCenter borderRadius={100} width={100} height={100} />\n\t<View className="h-10" />\n\t<Skeleton width={370} height={35} />\n\t<View className="h-2" />\n\t<Skeleton width={200} height={35} />\n\t<View className="h-2" />\n\t<Skeleton width={180} height={35} />\n</View>`}
      </CodeHighLighter>
      <View className="h-10" />
    </PageContainer>
  )
}

export default _11Skeleton
