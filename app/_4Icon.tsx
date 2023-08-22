import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import CodeHighLighter from '@/components/CodeHighLighter'
import { Icon } from '@/components/Icon'
import Label from '@/components/Label'

const _4Icon = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: '2.5%' }}>
      <View className="h-2" />
      <Label required bold>Basic</Label>
      <View className="h-4" />
      <View className="flex flex-row items-center flex-wrap gap-4">
        <Icon.Activity size={36} color="red" />
        <Icon.Car size={36} color="blue" />
        <Icon.Alarm size={36} color="#e67e22" />
        <Icon.Book size={36} color="#95a5a6" />
        <Icon.FileZip size={36} color="brown" />
      </View>
      <View className="h-4" />
      <CodeHighLighter language="typescript">
        {`// typing <Icon. this will be auto complete list of icons`}
      </CodeHighLighter>
      <View className="h-2" />
      <CodeHighLighter>
        {`<Icon.Activity size={28} color="red" />`}
      </CodeHighLighter>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://phosphoricons.com/')}
        activeOpacity={0.6}
        className="mt-8 px-2"
      >
        <Text className="text-lg font-bold text-blue-400">See all icons.</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default _4Icon
