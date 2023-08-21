import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Stack } from 'expo-router'

const Home = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Home' }} />
      <Text className="text-red-200 font-bold text-4xl">
        Home
      </Text>
    </View>
  )
}

export default Home
