import { ScrollView } from 'react-native'
import React from 'react'
import SafeView from '@/components/SafeView'

interface IPageContainerProps {
  children: React.ReactNode
}

const PageContainer = (props: IPageContainerProps) => {
  const { children } = props
  return (
    <SafeView style={{ paddingTop: 0, paddingBottom: 0 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 12 }}>
        {children}
      </ScrollView>
    </SafeView>
  )
}

export default PageContainer
