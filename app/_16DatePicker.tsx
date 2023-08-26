import { View, Text } from 'react-native'
import React, { useState } from 'react'
import PageContainer from '@/layout/PageContainer'
import DatePicker from '@/components/DatePicker'
import { getCurrentYear } from '@/utilities/date'

const currentYear = getCurrentYear()

const _16DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

  return (
    <PageContainer>
      <View className="h-2" />
      <DatePicker
        startYear={currentYear - 100}
        endYear={currentYear}
        onChange={setSelectedDate}
        value={selectedDate}
      />
    </PageContainer>
  )
}

export default _16DatePicker