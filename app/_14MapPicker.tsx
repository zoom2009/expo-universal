import { View } from 'react-native'
import React, { useState } from 'react'
import PageContainer from '@/layout/PageContainer'
import { MapPicker } from '@/components/MapPicker'
import { GOOGLE_MAP_API_AKY } from '@/constants/mockKey'
import Label from '@/components/Label'
import CodeHighLighter from '@/components/CodeHighLighter'
import Head from 'expo-router/head'

const defaultLocation = {
  lat: 13.736717,
  lng: 100.523186,
}

const _14MapPicker = () => {
  const [location, setLocation] = useState(defaultLocation)

  return (
    <PageContainer>
      <Head><title>MapPicker</title></Head>
      <View className="h-2" />
      <Label bold>Basic</Label>
      <View className="h-4" />
      <MapPicker
        width="100%"
        height={300}
        defaultLocation={defaultLocation}
        googleMapsApiKey={GOOGLE_MAP_API_AKY}
        value={location}
        onChange={setLocation}
        placeholder="Select Location"
        searchPlaceholder="typing for search location"
      />
      <View className="h-4" />
      <CodeHighLighter language="typescript">
        {`const defaultLocation = {\n\tlat: 13.736717,\n\tlng: 100.523186,\n}`}
      </CodeHighLighter>
      <View className="h-4" />
      <CodeHighLighter language="typescript">
        {`const [location, setLocation] = useState(defaultLocation)`}
      </CodeHighLighter>
      <View className="h-4" />
      <CodeHighLighter>
        {`<MapPicker\n\twidth="100%"\n\theight={300}\n\tdefaultLocation={defaultLocation}\n\tgoogleMapsApiKey={GOOGLE_MAP_API_AKY}\n\tvalue={location}\n\tonChange={setLocation}\n\tplaceholder="Select Location"\n\tsearchPlaceholder="typing for search location"\n/>`}
      </CodeHighLighter>
      <View className="h-10" />
    </PageContainer>
  )
}

export default _14MapPicker
