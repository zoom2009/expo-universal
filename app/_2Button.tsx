import { ScrollView, View } from 'react-native'
import React from 'react'
import CodeHighLighter from '@/components/CodeHighLighter'
import Label from '@/components/Label'
import Button from '@/components/Button'
import Dropdown from '@/components/Dropdown'

const _2Button = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: '2.5%' }}>
      <Dropdown />
      <Label>Basic</Label>
      <View className="h-2" />
      <Button type="danger" onPress={() => {}} text="Basic" />
      <View className="h-2" />
      <CodeHighLighter>{`<Button type="danger" onPress={...} text="Basic" />`}</CodeHighLighter>
      <View className="h-4" />
      <Label required>With Required</Label>
      <View className="h-2" />
      <CodeHighLighter>{`<Label required>With Required</Label>`}</CodeHighLighter>
      <View className="h-4" />
      <Label bold>With Bold</Label>
      <View className="h-2" />
      <CodeHighLighter>{`<Label bold>With Bold</Label>`}</CodeHighLighter>
    </ScrollView>
  )
}

export default _2Button
