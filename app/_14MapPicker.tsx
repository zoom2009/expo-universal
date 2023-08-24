import { View, Text } from 'react-native'
import React, { useState } from 'react'
import PageContainer from '@/layout/PageContainer'
import { MapPicker } from '@/components/MapPicker'
import { GOOGLE_MAP_API_AKY } from '@/constants/mockKey'

const defaultLocation = {
  lat: 13.736717,
  lng: 100.523186,
}

const _14MapPicker = () => {
  const [location, setLocation] = useState(defaultLocation)
  console.log('location:', location)

  return (
    <PageContainer>
      <View className="h-2" />
      <MapPicker
        defaultLocation={defaultLocation}
        googleMapsApiKey={GOOGLE_MAP_API_AKY}
        value={location}
        onChange={setLocation}
      />
    </PageContainer>
  )
}

export default _14MapPicker
