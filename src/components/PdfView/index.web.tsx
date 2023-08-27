import { Text } from 'react-native'
import { IPdfViewProps } from './interface'

/*
  To use pdf viewer for web follow this steps

  const base64ToBlob = (base64String: string) => {
    const binStr = atob(base64String)
    const len = binStr.length;
    const arr = new Uint8Array(len)
    for (let i = 0; i < len; i++) {
      arr[i] = binStr.charCodeAt(i)
    }
    return new Blob([arr], { type: 'application/pdf' })
  }

  const openPdf = (base64) => {
    const blob = base64ToBlob(base64)
    const url = URL.createObjectURL(blob as any)
    const pdfWindow = window.open('')
    // @ts-ignore
    pdfWindow.document.write("<iframe width='100%' height='100%' src='" + url + "'></iframe>")
  }
*/

const PdfView = (props: IPdfViewProps) => {
  return <Text>This Component Only support mobile platform.</Text>
}

export default PdfView
