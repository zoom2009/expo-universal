import { useEffect } from 'react'
import { Platform } from 'react-native'
import { NativeWindStyleSheet } from 'nativewind'
import { Drawer } from 'expo-router/drawer'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts, CourierPrime_400Regular } from '@expo-google-fonts/courier-prime'
import { EventProvider } from '@/components/OutsidePressHandler'
import 'react-native-reanimated'
import 'react-native-gesture-handler'

if (Platform.OS === 'web') {
  // @ts-ignore
  global._frameTimestamp = null
}

NativeWindStyleSheet.setOutput({
  default: 'native',
})

export default function Layout() {
  const [fontsLoaded] = useFonts({ Courier: CourierPrime_400Regular })

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync().catch(() => console.log('fail to hide splash screen'))
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return (
    <EventProvider>
      <Drawer>
        <Drawer.Screen name="index" options={{ title: 'Home' }} />
        <Drawer.Screen name="_1Label" options={{ title: 'Label' }} />
        <Drawer.Screen name="_2Button" options={{ title: 'Button' }} />
        <Drawer.Screen name="_3Dropdown" options={{ title: 'Dropdown' }} />
        <Drawer.Screen name="_4Icon" options={{ title: 'Icon' }} />
      </Drawer>
    </EventProvider>
  )
}
