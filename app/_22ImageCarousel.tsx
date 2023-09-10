import { View, useWindowDimensions } from 'react-native'
import React from 'react'
import PageContainer from '@/layout/PageContainer'
import ImageCarousel from '@/components/ImageCarousel'
import Label from '@/components/Label'
import CodeHighLighter from '@/components/CodeHighLighter'
import Head from 'expo-router/head'

const imageList = [
  { uri: 'https://picsum.photos/id/1/500/500' },
  { uri: 'https://picsum.photos/id/30/500/500' },
  { uri: 'https://picsum.photos/id/100/500/500' },
  { uri: 'https://picsum.photos/id/300/500/500' },
  { uri: 'https://picsum.photos/id/500/500/500' },
]

const _22ImageCarousel = () => {
  const { width } = useWindowDimensions()
  return (
    <PageContainer>
      <Head><title>ImageCarousel</title></Head>
      <View className="h-2" />
      <Label bold>Basic</Label>
      <View className="h-4" />
      <ImageCarousel
        minHeight={300}
        maxHeight={500}
        height={width * 0.5}
        images={imageList}
        resizeMode="contain"
        autoPlay={false}
        from={1}
        loop
      />
      <View className="h-8" />
      <CodeHighLighter language="typescript">
        {`const imageList = [\n\t{ uri: 'https://picsum.photos/id/1/500/500' },\n\t{ uri: 'https://picsum.photos/id/30/500/500' },\n\t{ uri: 'https://picsum.photos/id/100/500/500' },\n\t{ uri: 'https://picsum.photos/id/300/500/500' },\n\t{ uri: 'https://picsum.photos/id/500/500/500' },\n]`}
      </CodeHighLighter>
      <View className="h-4" />
      <CodeHighLighter>
        {`<ImageCarousel\n\theight={300}\n\timages={imageList}\n\tprevTitle="Back"\n\tnextTitle="Next"\n\tresizeMode="contain"\n\tautoPlay={false}\n\tfrom={1}\n\tloop\n/>`}
      </CodeHighLighter>
      <View className="h-10" />
    </PageContainer>
  )
}

export default _22ImageCarousel
