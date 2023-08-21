import { NativeWindStyleSheet } from 'nativewind'
import { Drawer } from 'expo-router/drawer'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts, CourierPrime_400Regular } from '@expo-google-fonts/courier-prime'
import { useEffect } from 'react'

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
    <Drawer>
      <Drawer.Screen name="index" options={{ title: 'Home' }} />
      <Drawer.Screen name="_1Label" options={{ title: 'Label' }} />
    </Drawer>
  )
}
