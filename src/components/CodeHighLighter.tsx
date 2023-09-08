import React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CodeHighlighter from 'react-native-code-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import theme from '@/utilities/theme'
import * as Clipboard from 'expo-clipboard'
import { Icon } from './Icon'
import { ACTIVE_OPACITY } from './Button'

interface ICodeHighLighterProps {
  children: string
  language?: string
}

const CodeHighLighter = (props: ICodeHighLighterProps) => {
  const { children, language = 'xml' } = props

  const onCopy = () => {
    Clipboard.setStringAsync(children)
      .catch((e) => console.log('fail to copy e:', e))
  }

  return (
    <View className="flex flex-col relative w-full bg-white">
      <Text selectable style={{ width: '100%' }}>
        <CodeHighlighter
          hljsStyle={atomOneLight}
          textStyle={styles.text}
          language={language}
          containerStyle={styles.containerStyle}
        >
          {children}
        </CodeHighlighter>
      </Text>
      <TouchableOpacity
        activeOpacity={ACTIVE_OPACITY}
        className="absolute bottom-0 right-0 z-10 p-2.5"
        onPress={onCopy}
      >
        <Icon.CopySimple weight="bold" size={24} color={theme.colors.primary} />
      </TouchableOpacity>
    </View>
  )
}

export default CodeHighLighter

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    padding: 12,
    backgroundColor: 'white',
  },
  text: {
    fontSize: (Platform.OS === 'android' || Platform.OS === 'ios') ? 14.5 : 17.5
  },
})
