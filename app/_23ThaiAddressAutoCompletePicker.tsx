import { View, Text } from 'react-native'
import React, { useState } from 'react'
import PageContainer from '@/layout/PageContainer'
import ThaiAddressAutoCompletePicker from '@/components/ThaiAddressAutoCompletePicker'
import Label from '@/components/Label'
import CodeHighLighter from '@/components/CodeHighLighter'
import Head from 'expo-router/head'

const _23ThaiAddressAutoCompletePicker = () => {
  const [address, setAddress] = useState({
    address: '',
    subDistrict: { label: '1', value: '' },
    district: { label: '2', value: '' },
    province: { label: '3', value: '' },
    zipcode: { label: '4', value: '' },
  })

  return (
    <PageContainer>
      <Head><title>ThaiAddressAutoCompletePicker</title></Head>
      <View className="h-2" />
      <Label bold>Basic</Label>
      <View className="h-8" />
      <ThaiAddressAutoCompletePicker
        currentState={address}
        errors={{
          address: '',
          province: 'mockError',
          district: '',
          subDistrict: '',
          zipcode: '',
        }}
        onChange={(values) => {
          setAddress({ ...address, ...values })
        }}
      />
      <View className="h-10" />
      <View className="w-full h-[1px] bg-[#999]" />
      <View className="h-10" />
      <CodeHighLighter language="typescript">
        {`const [address, setAddress] = useState({\n\taddress: '',\n\tsubDistrict: { label: '1', value: '' },\n\tdistrict: { label: '2', value: '' },\n\tprovince: { label: '3', value: '' },\n\tzipcode: { label: '4', value: '' },\n})`}
      </CodeHighLighter>
      <View className="h-4" />
      <CodeHighLighter>
        {`<ThaiAddressAutoCompletePicker\n\tcurrentState={address}\n\terrors={{\n\t\taddress: '',\n\t\tprovince: 'mockError',\n\t\tdistrict: '',\n\t\tsubDistrict: '',\n\t\tzipcode: '',\n\t}}\n\tonChange={(values) => {\n\t\tsetAddress({ ...address, ...values })\n\t}}\n/>`}
      </CodeHighLighter>
      <View className="h-10" />
    </PageContainer>
  )
}

export default _23ThaiAddressAutoCompletePicker
