import { View } from 'react-native'
import React, { useState } from 'react'
import PageContainer from '@/layout/PageContainer'
import DatePicker from '@/components/DatePicker'
import { getCurrentYear } from '@/utilities/date'
import Label from '@/components/Label'
import CodeHighLighter from '@/components/CodeHighLighter'
import Head from 'expo-router/head'

const currentYear = getCurrentYear()

const _16DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

  return (
    <PageContainer>
      <Head><title>DatePicker</title></Head>
      <View className="h-2" />
      <DatePicker
        bold
        label="Basic"
        startYear={currentYear - 100}
        endYear={currentYear}
        onChange={setSelectedDate}
        value={selectedDate}
      />
      <View className="h-4" />
      <CodeHighLighter language="typescript">
        {`const [selectedDate, setSelectedDate] = (\n\tuseState<Date | undefined>(undefined)\n)`}
      </CodeHighLighter>
      <View className="h-4" />
      <CodeHighLighter>
        {`<DatePicker\n\tstartYear={currentYear - 100}\n\tendYear={currentYear}\n\tonChange={setSelectedDate}\n\tvalue={selectedDate}\n/>`}
      </CodeHighLighter>
      <View className="h-10" />
    </PageContainer>
  )
}

export default _16DatePicker