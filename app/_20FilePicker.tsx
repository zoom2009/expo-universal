import { View } from 'react-native'
import React, { useState } from 'react'
import PageContainer from '@/layout/PageContainer'
import FilePicker from '@/components/FilePicker'
import { DocumentPickerResult } from 'expo-document-picker'
import Label from '@/components/Label'
import CodeHighLighter from '@/components/CodeHighLighter'

const _20FilePicker = () => {
  const [files, setFiles] = useState<any[]>([])
  const onChangeFiles = (files: DocumentPickerResult) => {
    if (!files.canceled) setFiles(files.assets)
  }

  return (
    <PageContainer>
      <View className="h-2" />
      <Label required bold>NOTE</Label>
      <View className="h-2" />
      <CodeHighLighter language="typescript">
        {`// For now this component force PDF file only.\n// Feel free to folk and open PR.`}
      </CodeHighLighter>
      <View className="h-8" />
      <Label bold>Basic</Label>
      <View className="h-4" />
      <CodeHighLighter language="typescript">
        {`const [files, setFiles] = useState<any[]>([])\nconst onChangeFiles = (files: DocumentPickerResult) => {\n\tif (!files.canceled) setFiles(files.assets)\n}`}
      </CodeHighLighter>
      <View className="h-4" />
      <CodeHighLighter>
        {`<FilePicker\n\tvalues={files}\n\tonChange={onChangeFiles}\n\tlabel="Choose Files"\n\tbuttonLabel="Press for upload"\n\tmaximum={6}\n\tmultiple\n/>`}
      </CodeHighLighter>
      <View className="h-8" />
      <FilePicker
        values={files}
        onChange={onChangeFiles}
        label="Choose Files"
        buttonLabel="Press for upload"
        maximum={6}
        multiple
      />
      <View className="h-10" />
    </PageContainer>
  )
}

export default _20FilePicker
