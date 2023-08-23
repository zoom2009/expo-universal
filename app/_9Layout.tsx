import { View, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import Label from '@/components/Label'
import { Layout } from '@/components/Layout'
import Dropdown from '@/components/Dropdown'
import CodeHighLighter from '@/components/CodeHighLighter'

const Box = () => (
  <View className="h-24 my-4 w-full border-[1px] border-[#ccc] bg-gray-200" />
)

const itemLengthOptions = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '10', value: '10' },
  { label: '11', value: '11' },
  { label: '12', value: '12' },
  { label: '13', value: '13' },
  { label: '14', value: '14' },
  { label: '15', value: '15' },
  { label: '16', value: '16' },
]

const _9Layout = () => {
  const [itemLength, setItemLength] = useState('4')

  const items = useMemo(() => {
    const result = []
    for (let i = 0; i < (+itemLength); i++) {
      result.push(`${i}`)
    }
    return result
  }, [itemLength])

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: '2.5%' }}>
      <View className="h-2" />
      <View className="z-10">
        <Dropdown
          label="Item Length"
          bold
          required
          options={itemLengthOptions}
          onChange={setItemLength}
          value={itemLength}
        />
      </View>
      <View className="h-4" />
      <Label bold required>Layout Will Responsive Layout by component name</Label>
      <View className="h-4" />
      <CodeHighLighter language="typescript">
        {`// Wrapping with Layout.Wrapper and child with Layout.<Custom>`}
      </CodeHighLighter>
      <View className="h-4" />
      <CodeHighLighter>
        {`<Layout.Wrapper>\n\t<Layout._2_1>\n\t\t<Box />\n\t</Layout._2_1>\n\t<Layout._2_1>\n\t\t<Box />\n\t</Layout._2_1>\n</Layout.Wrapper>`}
      </CodeHighLighter>
      <View className="h-8" />
      <Label bold>Layout._2_1</Label>
      <View className="h-8" />
      <Layout.Wrapper className="bg-slate-300">
        {items.map((i) => (
          <Layout._2_1 key={`_2_1${i}`}><Box /></Layout._2_1>
        ))}
      </Layout.Wrapper>
      <View className="h-8" />

      <Label bold>Layout._3_1</Label>
      <View className="h-8" />
      <Layout.Wrapper className="bg-slate-300">
        {items.map((i) => (
          <Layout._3_1 key={`_3_1${i}`}><Box /></Layout._3_1>
        ))}
      </Layout.Wrapper>
      <View className="h-8" />

      <Label bold>Layout._4_2_1</Label>
      <View className="h-8" />
      <Layout.Wrapper className="bg-slate-300">
        {items.map((i) => (
          <Layout._4_2_1 key={`_4_2_1${i}`}><Box /></Layout._4_2_1>
        ))}
      </Layout.Wrapper>
      <View className="h-8" />

      <Label bold>Layout._4_2</Label>
      <View className="h-8" />
      <Layout.Wrapper className="bg-slate-300">
        {items.map((i) => (
          <Layout._4_2 key={`_4_2${i}`}><Box /></Layout._4_2>
        ))}
      </Layout.Wrapper>
      <View className="h-8" />

      <Label bold>Layout._6_4_2_1</Label>
      <View className="h-8" />
      <Layout.Wrapper className="bg-slate-300">
        {items.map((i) => (
          <Layout._6_4_2_1 key={`_6_4_2_1${i}`}><Box /></Layout._6_4_2_1>
        ))}
      </Layout.Wrapper>
      <View className="h-8" />

      <Label bold>Layout._6_4_2</Label>
      <View className="h-8" />
      <Layout.Wrapper className="bg-slate-300">
        {items.map((i) => (
          <Layout._6_4_2 key={`_6_4_2${i}`}><Box /></Layout._6_4_2>
        ))}
      </Layout.Wrapper>
      <View className="h-8" />

      <Label bold>Layout._6_3_1</Label>
      <View className="h-8" />
      <Layout.Wrapper className="bg-slate-300">
        {items.map((i) => (
          <Layout._6_3_1 key={`_6_3_1${i}`}><Box /></Layout._6_3_1>
        ))}
      </Layout.Wrapper>
      <View className="h-8" />

      <Label bold>Layout._6_3</Label>
      <View className="h-8" />
      <Layout.Wrapper className="bg-slate-300">
        {items.map((i) => (
          <Layout._6_3 key={`_6_3${i}`}><Box /></Layout._6_3>
        ))}
      </Layout.Wrapper>
      <View className="h-8" />

      <Label bold>Layout._8_6_4_2_1</Label>
      <View className="h-8" />
      <Layout.Wrapper className="bg-slate-300">
        {items.map((i) => (
          <Layout._8_6_4_2_1 key={`_8_6_4_2_1${i}`}><Box /></Layout._8_6_4_2_1>
        ))}
      </Layout.Wrapper>
      <View className="h-8" />

      <Label bold>Layout._8_6_4_2</Label>
      <View className="h-8" />
      <Layout.Wrapper className="bg-slate-300">
        {items.map((i) => (
          <Layout._8_6_4_2 key={`_8_6_4_2${i}`}><Box /></Layout._8_6_4_2>
        ))}
      </Layout.Wrapper>
      <View className="h-8" />

      <Label bold>Layout._8_6_4</Label>
      <View className="h-8" />
      <Layout.Wrapper className="bg-slate-300">
        {items.map((i) => (
          <Layout._8_6_4 key={`_8_6_4${i}`}><Box /></Layout._8_6_4>
        ))}
      </Layout.Wrapper>
      <View className="h-8" />

      <Label bold>Layout._8_4</Label>
      <View className="h-8" />
      <Layout.Wrapper className="bg-slate-300">
        {items.map((i) => (
          <Layout._8_4 key={`_8_4${i}`}><Box /></Layout._8_4>
        ))}
      </Layout.Wrapper>
      <View className="h-10" />
    </ScrollView>
  )
}

export default _9Layout
