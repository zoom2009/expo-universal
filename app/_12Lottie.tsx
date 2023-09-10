import { View } from 'react-native'
import React, { useRef } from 'react'
import { Lottie } from '@/components/Lottie'
import Label from '@/components/Label'
import CodeHighLighter from '@/components/CodeHighLighter'
import { Layout } from '@/components/Layout'
import Button from '@/components/Button'
import PageContainer from '@/layout/PageContainer'
import Head from 'expo-router/head'

const _12Lottie = () => {
  const lottieRef: any = useRef()

  return (
    <PageContainer>
      <Head><title>Lottie</title></Head>
      <View className="h-2" />
      <Label bold>Basic</Label>
      <View className="h-4" />
      <Lottie
        autoplay
        loop
        width={200}
        height={200}
        source={require('@/mocks/animations/animation_llnzaoih.json')}
      />
      <CodeHighLighter>
        {`<Lottie\n\tautoplay\n\tloop\n\twidth={200}\n\theight={200}\n\tsource={require('@/mocks/animations/animation_llnzaoih.json')}\n/>`}
      </CodeHighLighter>
      <View className="h-10" />
      <View className="w-full h-[1px] bg-[#999]" />
      <View className="h-8" />
      <Label bold>Advance</Label>
      <View className="h-2" />
      <Lottie
        ref={lottieRef}
        autoplay
        loop
        width={200}
        height={200}
        source={require('@/mocks/animations/animation_llnzaoih.json')}
      />
      <Layout.Wrapper className="max-w-[800px]">
        <Layout._4_2>
          <View className="h-4" />
          <Button onPress={() => lottieRef.current.play()} type="success-outline" text="Play" />
        </Layout._4_2>
        <Layout._4_2>
          <View className="h-4" />
          <Button onPress={() => lottieRef.current.pause()} type="danger-outline" text="Pause" />
        </Layout._4_2>
        <Layout._4_2>
          <View className="h-4" />
          <Button onPress={() => lottieRef.current.resume()} type="warning-outline" text="Resume" />
        </Layout._4_2>
        <Layout._4_2>
          <View className="h-4" />
          <Button onPress={() => lottieRef.current.reset()} type="info-outline" text="Reset" />
        </Layout._4_2>
      </Layout.Wrapper>
      <View className="h-8" />
      <CodeHighLighter language="typescript">
        {`const lottieRef: any = useRef()`}
      </CodeHighLighter>
      <View className="h-4" />
      <CodeHighLighter>
        {`<Lottie ref={lottieRef} />`}
      </CodeHighLighter>
      <View className="h-4" />
      <CodeHighLighter language="typescript">
        {`const play = () => lottieRef.current.play()\nconst pause = () => lottieRef.current.pause()\nconst resume = () => lottieRef.current.resume()\nconst reset = () => lottieRef.current.reset()`}
      </CodeHighLighter>
      <View className="h-10" />
    </PageContainer>
  )
}

export default _12Lottie
