import { View } from 'react-native'
import React, { useState } from 'react'
import Toggle, { TValue } from '@/components/Toggle'
import CodeHighLighter from '@/components/CodeHighLighter'
import Dropdown from '@/components/Dropdown'
import PageContainer from '@/layout/PageContainer'

const defaultT1 = [
  { label: 'op1', value: false },
  { label: 'op2', value: false },
  { label: 'op3', value: false },
  { label: 'op4', value: false },
]

const _5Toggle = () => {
  const [type, setType] = useState('radio')
  const [t0, setT0] = useState(false)
  const [t1, setT1] = useState<TValue[]>(defaultT1)

  return (
    <PageContainer>
      <View className="h-2" />
      <View className="z-10">
        <Dropdown
          label="Toggle Type"
          bold
          options={[{ label: 'radio', value: 'radio' }, { label: 'checkbox', value: 'checkbox' }]}
          onChange={(v) => {
            setT0(false)
            setT1(defaultT1)
            setType(v)
          }}
          value={type}
        />
      </View>
      <View className="h-8" />
      <Toggle
        label={`Basic (${type})`}
        bold
        required
        type={type as 'radio' | 'checkbox'}
        value={t0}
        onToggle={setT0}
      />
      <View className="h-2" />
      <CodeHighLighter language="typescript">
        {`const [v0, setV0] = useState(false)`}
      </CodeHighLighter>
      <View className="h-2" />
      <CodeHighLighter>
        {`<Toggle\n\tlabel="Basic (${type})"\n\trequired\n\tbold\n\ttype="${type}"\n\tvalue={t0}\n\tonToggle={setT0}\n/>`}
      </CodeHighLighter>
      <View className="h-8" />
      <View className="w-full h-[1px] bg-[#999]" />
      <View className="h-10" />
      <Toggle
        label={`Multiple Options (${type})`}
        required
        bold
        multiple
        type={type as 'radio' | 'checkbox'}
        direction="vertical"
        value={t1}
        onToggle={setT1}
      />
      <View className="h-2" />
      <CodeHighLighter language="typescript">
        {`const options = [\n\t{ label: 'op1', value: false },\n\t{ label: 'op2', value: false },\n\t{ label: 'op3', value: false },\n\t{ label: 'op4', value: false },\n\t{ label: 'op5', value: false }\n]`}
      </CodeHighLighter>
      <View className="h-2" />
      <CodeHighLighter language="typescript">
        {`const [v1, setV1] = useState([])`}
      </CodeHighLighter>
      <View className="h-2" />
      <CodeHighLighter>
        {`<Toggle\n\tlabel="Multiple Options (${type})"\n\trequired\n\tbold\n\tmultiple\n\ttype="${type}"\n\tdirection="vertical"\n\tvalue={t1}\n\tonToggle={setT1}\n/>`}
      </CodeHighLighter>
      <View className="h-10" />
    </PageContainer>
  )
}

export default _5Toggle
