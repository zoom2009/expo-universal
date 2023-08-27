import { View } from 'react-native'
import React, { useState } from 'react'
import PageContainer from '@/layout/PageContainer'
import Label from '@/components/Label'
import { Pagination } from '@/components/Pagination'
import CodeHighLighter from '@/components/CodeHighLighter'

const _21Pagination = () => {
  const [currentPage, setCurrentPage] = useState(10)

  return (
    <PageContainer>
      <View className="h-2" />
      <Label bold>Basic</Label>
      <View className="h-4" />
      <CodeHighLighter language="typescript">
        {`const [currentPage, setCurrentPage] = useState(10)`}
      </CodeHighLighter>
      <View className="h-4" />
      <CodeHighLighter>
        {`<Pagination\n\tcurrent={currentPage}\n\ttotal={40}\n\tonPageChange={setCurrentPage}\n/>`}
      </CodeHighLighter>
      <View className="h-4" />
      <Label required bold>NOTE</Label>
      <View className="h-2" />
      <CodeHighLighter language="typescript">
        {`// This component also provide getPaginationData function.\n\n// It will calculate for return data specific page.\n`}
      </CodeHighLighter>
      <View className="h-4" />
      <Pagination
        current={currentPage}
        total={40}
        onPageChange={setCurrentPage}
      />
      <View className="h-10" />
    </PageContainer>
  )
}

export default _21Pagination
