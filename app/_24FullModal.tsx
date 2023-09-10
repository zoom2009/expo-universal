import { View, Text } from 'react-native'
import React, { useState } from 'react'
import PageContainer from '@/layout/PageContainer'
import Label from '@/components/Label'
import Button from '@/components/Button'
import { FullModal } from '@/components/FullModal'
import CodeHighLighter from '@/components/CodeHighLighter'
import Head from 'expo-router/head'

const _24FullModal = () => {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)

  return (
    <PageContainer>
      <Head><title>FullModal</title></Head>
      <View className="h-2" />
      <Label required bold>NOTE</Label>
      <View className="h-2" />
      <CodeHighLighter language="typescript">
        {`// For Normal Modal just use react-native Modal component`}
      </CodeHighLighter>
      <View className="h-6" />
      <Label bold>Basic</Label>
      <View className="h-4" />
      <Button
        text="Basic"
        onPress={() => setOpen1(true)}
        type="info"
      />
      <View className="h-6" />
      <CodeHighLighter language="typescript">
        {`const [open1, setOpen1] = useState(false)`}
      </CodeHighLighter>
      <View className="h-4" />
      <CodeHighLighter>
        {`<Button\n\ttext="Basic"\n\tonPress={() => setOpen1(true)}\n\ttype="info"\n/>\n\n<FullModal\n\tvisible={open1}\n\tonClose={() => setOpen1(false)}\n>\n\t<View className="flex flex-1 justify-center items-center">\n\t\t<Text>Hello Basic Modal</Text>\n\t</View>\n</FullModal>`}
      </CodeHighLighter>
      <View className="h-10" />
      <View className="w-full h-[1px] bg-[#999]" />
      <View className="h-10" />
      <Label bold>With Animation & Hide Close</Label>
      <View className="h-4" />
      <Button
        text="With Animation & Hide Close"
        onPress={() => setOpen2(true)}
        type="warning"
      />
      <View className="h-6" />
      <CodeHighLighter language="typescript">
        {`const [open2, setOpen2] = useState(false)`}
      </CodeHighLighter>
      <View className="h-4" />
      <CodeHighLighter>
        {`<Button\n\ttext="With Animation & Hide Close"\n\tonPress={() => setOpen2(true)}\n\ttype="warning"\n/>\n\n<FullModal\n\tvisible={open2}\n\tonClose={() => setOpen2(false)}\n\tshowClose={false}\n\tanimationType="fade"\n>\n\t<View className="flex flex-1 justify-center items-center">\n\t\t<Text>With Animation & Hide Close</Text>\n\t\t<Text className="text-xl font-bold" onPress={() => setOpen2(false)}>Close</Text>\n\t</View>\n</FullModal>`}
      </CodeHighLighter>
      <View className="h-10" />
      <FullModal
        visible={open1}
        onClose={() => setOpen1(false)}
      >
        <View className="flex flex-1 justify-center items-center">
          <Text>Hello Basic Modal</Text>
        </View>
      </FullModal>
      <FullModal
        visible={open2}
        onClose={() => setOpen2(false)}
        showClose={false}
        animationType="fade"
      >
        <View className="flex flex-1 justify-center items-center">
          <Text>With Animation & Hide Close</Text>
          <Text className="text-xl font-bold" onPress={() => setOpen2(false)}>Close</Text>
        </View>
      </FullModal>
    </PageContainer>
  )
}

export default _24FullModal
