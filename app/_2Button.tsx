import { ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import CodeHighLighter from '@/components/CodeHighLighter'
import Button from '@/components/Button'
import Dropdown from '@/components/Dropdown'
import { buttonType as buttonTypeOptions } from '@/constants/buttonType'
import Label from '@/components/Label'

const _2Button = () => {
  const [buttonType, setButtonType] = useState<string>('danger')

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: '2.5%' }}>
      <View className="h-2" />
      <Dropdown
        label="Button Type"
        bold
        required
        options={buttonTypeOptions.map((t: string) => ({ label: t, value: t }))}
        onChange={setButtonType}
        value={buttonType}
      />
      <View className="h-10" />
      <Label bold>Basic Button</Label>
      <View className="h-4" />
      <Button type={buttonType as any} onPress={() => {}} text="Basic" />
      <View className="h-4" />
      <CodeHighLighter>{`<Button type="${buttonType}" onPress={...} text="Basic" />`}</CodeHighLighter>
      <View className="h-10" />
      <View className="w-full h-[1px] bg-[#999]" />
      <View className="h-10" />
      <Label bold>Button Full Width</Label>
      <View className="h-4" />
      <Button isFull type={buttonType as any} onPress={() => {}} text="is Full" />
      <View className="h-4" />
      <CodeHighLighter>{`<Button isFull type="${buttonType}" onPress={...} text="isFull" />`}</CodeHighLighter>
      <View className="h-10" />
      <View className="w-full h-[1px] bg-[#999]" />
      <View className="h-10" />
      <Label bold>Button Bold</Label>
      <View className="h-4" />
      <Button bold type={buttonType as any} onPress={() => {}} text="Bold" />
      <View className="h-4" />
      <CodeHighLighter>{`<Button bold type="${buttonType}" onPress={...} text="Bold" />`}</CodeHighLighter>
    </ScrollView>
  )
}

export default _2Button
