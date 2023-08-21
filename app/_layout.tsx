import { NativeWindStyleSheet } from 'nativewind'
import { Drawer } from 'expo-router/drawer'

NativeWindStyleSheet.setOutput({
  default: 'native',
})

export default function Layout() {
  return <Drawer />
}
