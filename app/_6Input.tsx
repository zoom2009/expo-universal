import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react'
import PageContainer from '@/layout/PageContainer'
import Input from '@/components/Input'
import Label from '@/components/Label'
import CodeHighLighter from '@/components/CodeHighLighter'
import { ACTIVE_OPACITY } from '@/components/Button'

const _6Input = () => {
  const [v, setV] = useState('')
  const [m, setM] = useState('')

  return (
    <PageContainer>
      <View className="h-2" />
      <Input
        label="Basic Input"
        bold
        required
        onChangeEffect={setV}
        value={v}
        placeholder="input..."
        error={v.length === 0 ? "Please fill some text" : ""}
      />
      <View className="h-4" />
      <CodeHighLighter language="typescript">
        {`const [v, setV] = useState("")`}
      </CodeHighLighter>
      <View className="h-4" />
      <CodeHighLighter>
        {`<Input\n\tlabel="Basic Input"\n\tbold\n\trequired\n\tonChangeEffect={setV}\n\tvalue={v}\n\tplaceholder="input..."\n\terror={v.length === 0 ? "Please fill some text" : ""}\n/>`}
      </CodeHighLighter>
      <View className="h-10" />
      <View className="w-full h-[1px] bg-[#999]" />
      <View className="h-10" />
      <Input
        label="Mask Text input"
        onChangeEffect={setM}
        value={m}
        bold
        required
        isMask
        maskString="AAA-999"
        placeholder="ABC-123"
      />
      <View className="h-4" />
      <Label required bold>NOTE</Label>
      <View className="h-2" />
      <CodeHighLighter language="typescript">
        {`// This Mask Input using react-native-mask-text lib`}
      </CodeHighLighter>
      <View className="h-4" />
      <CodeHighLighter language="typescript">
        {`const [m, setM] = useState("")`}
      </CodeHighLighter>
      <View className="h-4" />
      <CodeHighLighter>
        {`<Input\n\tlabel="Mask Text input"\n\tonChangeEffect={setM}\n\tvalue={m}\n\tbold\n\trequired\n\tisMask\n\tmaskString="AAA-999"\n\tplaceholder="ABC-123"\n/>`}
      </CodeHighLighter>
      <View className="h-4" />
      <TouchableOpacity
        onPress={() => Linking.openURL('https://github.com/akinncar/react-native-mask-text')}
        activeOpacity={ACTIVE_OPACITY}
        className="mt-8 px-2"
      >
        <Text className="text-lg font-bold text-blue-400">More Detail About Mask Input.</Text>
      </TouchableOpacity>
      <View className="h-10" />
    </PageContainer>
  )
}

export default _6Input
