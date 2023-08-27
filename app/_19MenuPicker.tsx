import { View } from 'react-native'
import React, { useState } from 'react'
import PageContainer from '@/layout/PageContainer'
import MenuPicker from '@/components/MenuPicker'
import { Icon } from '@/components/Icon'
import theme from '@/utilities/theme'
import Button from '@/components/Button'
import Label from '@/components/Label'
import CodeHighLighter from '@/components/CodeHighLighter'

const _19MenuPicker = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const onOpenMenu = () => setIsOpenMenu(true)
  const onCloseMenu = () => setIsOpenMenu(false)
  const onSelectMenu = ({ text, index }: { text: string, index: number }) => {
    alert(`press ${text}`)
  }

  return (
    <PageContainer>
      <View className="h-2" />
      <Label bold>Basic Button</Label>
      <View className="h-4" />
      <Button
        text="Open Menu"
        type="danger-outline"
        onPress={onOpenMenu}
      />
      <View className="h-8" />
      <CodeHighLighter language="typescript">
        {`const [isOpenMenu, setIsOpenMenu] = useState(false)\n\nconst onOpenMenu = () => setIsOpenMenu(true)\n\nconst onCloseMenu = () => setIsOpenMenu(false)\n\nconst onSelectMenu = ({ text, index }) => {\n\talert('press '+text)\n}`}
      </CodeHighLighter>
      <View className="h-4" />
      <CodeHighLighter language="typescript">
        {`const menu = [\n\t{ text: 'Camera', Icon: <Icon1 /> },\n\t{ text: 'Images', Icon: <Icon2 /> },\n]`}
      </CodeHighLighter>
      <View className="h-4" />
      <CodeHighLighter>
        {`// This Component should be bottom of the file for fix zIndex error\n\n<MenuPicker\n\tvisible={isOpenMenu}\n\tonClose={onCloseMenu}\n\tlabel="Menu"\n\tonSelect={onSelectMenu}\n\tmenu={menu}\n/>`}
      </CodeHighLighter>
      <View className="h-10" />
      <MenuPicker
        visible={isOpenMenu}
        onClose={onCloseMenu}
        label="Menu"
        onSelect={onSelectMenu}
        menus={[
          { text: 'Camera', Icon: <Icon.Camera weight="bold" size={28} color={theme.colors.primary} /> },
          { text: 'Image', Icon: <Icon.Image weight="bold" size={28} color={theme.colors.primary} /> },
        ]}
      />
    </PageContainer>
  )
}

export default _19MenuPicker
