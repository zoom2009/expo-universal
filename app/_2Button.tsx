import { View } from 'react-native'
import React, { useState } from 'react'
import CodeHighLighter from '@/components/CodeHighLighter'
import Button from '@/components/Button'
import Dropdown from '@/components/Dropdown'
import { buttonType as buttonTypeOptions } from '@/constants/buttonType'
import Label from '@/components/Label'
import { Icon } from '@/components/Icon'
import PageContainer from '@/layout/PageContainer'

const _2Button = () => {
  const [buttonType, setButtonType] = useState<string>('danger')

  return (
    <PageContainer>
      <View className="h-2" />
      <View className="z-10">
        <Dropdown
          label="Button Type"
          bold
          options={buttonTypeOptions.map((t: string) => ({ label: t, value: t }))}
          onChange={setButtonType}
          value={buttonType}
        />
      </View>
      <View className="h-10" />
      <Label bold>Basic Button</Label>
      <View className="h-4" />
      <Button type={buttonType as any} onPress={() => {}} text="Basic" />
      <View className="h-4" />
      <CodeHighLighter>{`<Button type="${buttonType}" onPress={...} text="Basic" />`}</CodeHighLighter>
      <View className="h-10" />
      <View className="w-full h-[1px] bg-[#999]" />
      <View className="h-10" />
      <Label bold>Button Full Width & Bold</Label>
      <View className="h-4" />
      <Button isFull bold type={buttonType as any} onPress={() => {}} text="is Full" />
      <View className="h-4" />
      <CodeHighLighter>{`<Button isFull bold type="${buttonType}" onPress={...} text="isFull" />`}</CodeHighLighter>
      <View className="h-10" />
      <View className="w-full h-[1px] bg-[#999]" />
      <View className="h-10" />
      <Label bold>Button With Icon</Label>
      <View className="h-4" />
      <Button
        RightIcon={<Icon.GameController weight="bold" size={24} color="white" />}
        LeftIcon={<Icon.Airplane weight="fill" size={24} color="white" />}
        bold
        type={buttonType as any}
        onPress={() => {}}
        text="Bold "
      />
      <View className="h-4" />
      <CodeHighLighter language="vbscriptHtml">{`<Button\n\tRightIcon={<Icon1 />}\n\tLeftIcon={<Icon2 />}\n\tbold\n\ttype="${buttonType}"\n\tonPress={...}\n\ttext="Bold"\n/>`}</CodeHighLighter>
    </PageContainer>
  )
}

export default _2Button
