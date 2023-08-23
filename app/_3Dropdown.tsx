import { View } from 'react-native'
import React, { useState } from 'react'
import Dropdown from '@/components/Dropdown'
import CodeHighLighter from '@/components/CodeHighLighter'
import PageContainer from '@/layout/PageContainer'

const options = [
  { label: 'op1', value: 'op1' },
  { label: 'op2', value: 'op2' },
  { label: 'op3', value: 'op3' },
  { label: 'op4', value: 'op4' },
  { label: 'op5', value: 'op5' },
]

const _3DropDown = () => {
  const [v1, setV1] = useState<string | null>(null)
  const [v2, setV2] = useState<string | null>(null)

  return (
    <PageContainer>
      <View className="h-2" />
      <View style={{ zIndex: 3 }}>
        <Dropdown
          label="Basic"
          required
          bold
          options={options}
          value={v1}
          onChange={setV1}
        />
      </View>
      <View className="h-4" />
      <CodeHighLighter language="typescript">
        {`const options = [\n\t{ label: 'op1', value: 'op1' },\n\t{ label: 'op2', value: 'op2' },\n\t{ label: 'op3', value: 'op3' },\n\t{ label: 'op4', value: 'op4' },\n\t{ label: 'op5', value: 'op5' }\n]`}
      </CodeHighLighter>
      <View className="h-2" />
      <CodeHighLighter language="typescript">
        {`const [v1, setV1] = useState<string | null>(null)`}
      </CodeHighLighter>
      <View className="h-2" />
      <CodeHighLighter>
        {`<Dropdown\n\tlabel="Basic"\n\trequired\n\tbold\n\toptions={options}\n\tvalue={v1}\n\tonChange={setV1}\n/>`}
      </CodeHighLighter>
      <View className="h-10" />
      <View className="w-full h-[1px] bg-[#999]" />
      <View className="h-10" />
      <View style={{ zIndex: 2 }}>
        <Dropdown
          label="With Searchable"
          required
          bold
          options={options}
          searchable
          value={v2}
          onChange={setV2}
        />
      </View>
      <View className="h-4" />
      <CodeHighLighter>
        {`<Dropdown\n\tlabel="With Searchable"\n\tsearchable\n\trequired\n\tbold\n\toptions={options}\n\tvalue={v2}\n\tonChange={setV2}\n/>`}
      </CodeHighLighter>
      <View className="h-10" />
    </PageContainer>
  )
}

export default _3DropDown
