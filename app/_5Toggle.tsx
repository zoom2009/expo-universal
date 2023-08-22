import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Toggle, { TValue } from '@/components/Toggle'

const _5Toggle = () => {
  const [t1, setT1] = useState<TValue[]>([
    { label: '1', value: false },
    { label: '2', value: false },
    { label: '3', value: false },
    { label: '4', value: false },
  ])

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: '2.5%' }}>
      <View className="h-2" />
      <Toggle
        label="Ex incididunt sunt fugiat laboris eu pariatur ea exercitation cupidatat labore pariatur irure."
        required
        bold
        multiple
        type="radio"
        direction="vertical"
        value={t1}
        onToggle={setT1}
      />
    </ScrollView>
  )
}

export default _5Toggle
