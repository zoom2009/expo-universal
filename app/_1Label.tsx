import { View } from 'react-native'
import React from 'react'
import CodeHighLighter from '@/components/CodeHighLighter'
import Label from '@/components/Label'
import PageContainer from '@/layout/PageContainer'
import Head from 'expo-router/head'

const _1Label = () => {
  return (
    <PageContainer>
      <Head><title>Label</title></Head>
      <View className="h-2" />
      <Label>Basic</Label>
      <View className="h-2" />
      <CodeHighLighter>{`<Label>Basic</Label>`}</CodeHighLighter>
      <View className="h-4" />
      <Label required>With Required</Label>
      <View className="h-2" />
      <CodeHighLighter>{`<Label required>With Required</Label>`}</CodeHighLighter>
      <View className="h-4" />
      <Label bold>With Bold</Label>
      <View className="h-2" />
      <CodeHighLighter>{`<Label bold>With Bold</Label>`}</CodeHighLighter>
    </PageContainer>
  )
}

export default _1Label
