import { View, Text, TouchableOpacity } from 'react-native'
import Head from 'expo-router/head'
import React from 'react'
import PageContainer from '@/layout/PageContainer'
import { ACTIVE_OPACITY } from '@/components/Button'
import { useRouter } from 'expo-router'

const COMPONENT_LIST = [
  'Label', 'Button', 'Dropdown', 'Icon', 'Toggle', 'Input', 'LoadingSpinnerOverlay', 'Accordion', 'Layout', 'OutsidePressHandler', 'Skeleton', 'Lottie', 'Alert', 'MapPicker', 'ScrollTo',
  'DatePicker', 'Toast', 'MenuPicker', 'ImagePicker', 'FilePicker', 'Pagination', 'ImageCarousel', 'ThaiAddressAutoCompletePicker', 'FullModal', 'CameraPicker', 'Table',
]

const Line = () => (
  <>
    <View className="h-8" />
    <View className="h-[1px] bg-gray-500 w-full" />
    <View className="h-8" />
  </>
)

const Home = () => {
  const { push } = useRouter()
  const onMove = (pageName: string) => () => push(pageName)

  return (
    <PageContainer>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Welcome to expo-universal lib support both platform mobile and web." />
      </Head>
      <View className="flex flex-1 px-8 py-4">
        <Text className="font-bold text-4xl text-primary">
          Welcome to Expo-Universal lib
        </Text>
        <Line />
        <Text className="text-2xl font-bold text-primary">About</Text>
        <View className="h-8" />
        <Text className="text-xl">
          • Expo-Universal lib support both of mobile and web platform!
        </Text>
        <View className="h-4" />
        <Text className="text-xl">
          • All component base on expo and nativewind (tailwind css)
        </Text>
        <View className="h-4" />
        <Text className="text-xl">
          • This lib provide many ui component for easy to use
        </Text>
        <Line />
        <Text className="text-2xl font-bold text-primary">
          Component List <Text className="text-lg">({COMPONENT_LIST.length})</Text>
        </Text>
        <View className="h-8" />
        {COMPONENT_LIST.map((name, index) => (
          <React.Fragment key={name}>
            <TouchableOpacity activeOpacity={ACTIVE_OPACITY} onPress={onMove(`_${index+1}${name}`)} className="self-start">
              <Text className="text-xl text-black ">
                • <Text className="underline">{name}</Text>
              </Text>
            </TouchableOpacity>
            <View className="h-3" />
          </React.Fragment>
        ))}
        <Line />
        <Text className="text-md text-danger">
          <Text className="font-bold">Create By: </Text>Sikarin Punsawat
        </Text>
        <View className="h-10" />
      </View>
    </PageContainer>
  )
}

export default Home
