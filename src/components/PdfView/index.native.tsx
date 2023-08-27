import React from 'react'
import { WebView } from 'react-native-webview'
import { IPdfViewProps } from './interface'

const PdfView = (props: IPdfViewProps) => {
  const { uri } = props
  return (
    <WebView
      originWhitelist={['*']}
      source={{ uri }}
    />
  )
}

export default PdfView
