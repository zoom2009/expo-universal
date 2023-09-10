import { View } from 'react-native'
import React from 'react'
import PageContainer from '@/layout/PageContainer'
import Button from '@/components/Button'
import { displayToast } from '@/utilities/displayToast'
import Label from '@/components/Label'
import CodeHighLighter from '@/components/CodeHighLighter'
import Head from 'expo-router/head'

const _17Toast = () => {
  return (
    <PageContainer>
      <Head><title>Toast</title></Head>
      <View className="h-2" />
      <Label bold>Basic</Label>
      <View className="h-4" />
      <Button
        type="warning"
        onPress={() => displayToast({ message: 'Hello Toast', type: 'warning' })}
        text="Show Toast"
      />
      <View className="h-8" />
      <Label>Wrap provider to root App</Label>
      <View className="h-2" />
      <CodeHighLighter>
        {`<ToastRootProvider>\n\t<App />\n</ToastRootProvider>`}
      </CodeHighLighter>
      <View className="h-6" />
      <Label>And call Function every where you want.</Label>
      <View className="h-2" />
      <CodeHighLighter language="typescript">
        {`displayToast({\n\tmessage: 'Hello Toast',\n\ttype: 'warning'\n})`}
      </CodeHighLighter>
      <View className="h-10" />
    </PageContainer>
  )
}

export default _17Toast
