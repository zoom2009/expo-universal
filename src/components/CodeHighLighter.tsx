import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import CodeHighlighter from 'react-native-code-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface ICodeHighLighterProps {
  children: string
}

const CodeHighLighter = (props: ICodeHighLighterProps) => {
  const { children } = props

  return (
    <CodeHighlighter
      hljsStyle={atomOneLight}
      textStyle={styles.text}
      language="xml"
      containerStyle={styles.containerStyle}
    >
      {children}
    </CodeHighlighter>
  )
}

export default CodeHighLighter

const styles = StyleSheet.create({
  containerStyle: {
    padding: 12,
  },
  text: {
    fontSize: (Platform.OS === 'android' || Platform.OS === 'ios') ? 14.5 : 17.5
  },
})
