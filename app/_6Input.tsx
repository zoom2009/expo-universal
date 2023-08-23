import { View, Text } from 'react-native'
import React from 'react'
import PageContainer from '@/layout/PageContainer'
import Input from '@/components/Input'

const _13Input = () => {
  return (
    <PageContainer>
      <View className="h-2" />
      <Input
        onChangeEffect={console.log}
        value="HI MOM, Ea deserunt minim adipisicing do adipisicing et anim."
        bold
        errorMessage="so sad you got some error message."
      />
      <View className="h-4" />
      <Input
        label="Mask Text input"
        onChangeEffect={console.log}
        value=""
        bold
        required
        isMask
        maskString="AAA-999"
        placeholder="ABC-123"
      />
    </PageContainer>
  )
}

export default _13Input
