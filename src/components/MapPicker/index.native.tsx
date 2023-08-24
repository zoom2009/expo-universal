import { useEffect, useState } from 'react'
import { View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import * as Location from 'expo-location'
import * as R from 'ramda'
import { GoogleAutoComplete } from 'react-native-google-autocomplete'
import { isEmpty } from '@/utilities/validate'
import Dropdown from '@/components/Dropdown'
import { IMapPickerProps } from './interface'

export const MapPicker = (props: IMapPickerProps) => {
  const {
    placeholder,
    searchPlaceholder,
    defaultLocation,
    googleMapsApiKey,
    onChange,
    value,
    width = '100%',
    height = 450,
  } = props

  const [center, setCenter] = useState({ lat: defaultLocation.lat, lng: defaultLocation.lng })
  const [marker, setMarker] = useState({ lat: defaultLocation.lat, lng: defaultLocation.lng })
  const [isReady, setIsReady] = useState(false)
  const [dropdownSelected, setDropdownSelected] = useState<any>(undefined)

  const onMapReady = () => {
    setTimeout(() => {
      setIsReady(true)
    }, 1500)
  }

  const requestPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      return alert('Permission to access location was denied')
    }

    if (
      isEmpty(value?.lat) ||
      isEmpty(value?.lng) ||
      (value?.lat === defaultLocation.lat && value?.lng === defaultLocation.lng)
    ) { // default value only will set
      let location = await Location.getCurrentPositionAsync({})
      const currentLocation = {
        lat: R.pathOr(defaultLocation.lat, ['coords', 'latitude'], location),
        lng: R.pathOr(defaultLocation.lng, ['coords', 'longitude'], location),
      }
  
      setCenter(currentLocation)
      setMarker(currentLocation)
      onChange && onChange(currentLocation)
    }
  }

  const onMarkerDrag = (props: any) => {
    const lat = R.pathOr(defaultLocation.lat, ['nativeEvent', 'coordinate', 'latitude'], props)
    const lng = R.pathOr(defaultLocation.lat, ['nativeEvent', 'coordinate', 'longitude'], props)
    setMarker({ lat, lng })
    onChange && onChange({ lat, lng })
  }

  useEffect(() => {
    requestPermission()
  }, [])

  useEffect(() => {
    if (value) {
      setCenter({ lat: value.lat, lng: value.lng })
      setMarker({ lat: value.lat, lng: value.lng })
    }
  }, [value])

  return (
    <View className="w-full">
      <GoogleAutoComplete
        apiKey={googleMapsApiKey}
        debounce={300}
        queryTypes="geocode"
      >
        {({ inputValue, handleTextChange, locationResults, fetchDetails }) => {
          const options = locationResults.map(({ place_id, structured_formatting, description }) => {
            const mainText = R.prop('main_text', structured_formatting)
            const secondaryText = R.prop('secondary_text', structured_formatting)
            const desc = description
            const label = mainText || desc || secondaryText
            return { label, value: place_id }
          })

          const onSelectLocation = (item: string) => {
            setDropdownSelected(item)
            fetchDetails(item).then((value: any) => {
              const lat = R.pathOr(-999, ['geometry', 'location', 'lat'], value)
              const lng = R.pathOr(-999, ['geometry', 'location', 'lng'], value)
              if (lat !== -999 && lng !== -999 && !isEmpty(lat) && !isEmpty(lng)) { // valid
                setCenter({ lat, lng, })
                setMarker({ lat, lng, })
              }
            }).catch((e) => {
              console.log('fail to get geolocation mobile from dropdown')
            })
          }

          return (
            <View className="z-10">
              <Dropdown
                value={dropdownSelected}
                searchable
                onChangeSearchText={handleTextChange}
                onChange={onSelectLocation}
                options={!isEmpty(inputValue) ? options : []}
                placeholder={placeholder}
                searchPlaceholder={searchPlaceholder}
              />
            </View>
          )
        }}
      </GoogleAutoComplete>
      <View style={{ marginTop: 20, width, height, alignItems: 'center' } as any}>
        <MapView
          onMapReady={onMapReady}
          provider={PROVIDER_GOOGLE}
          style={{ width: '100%', height, borderRadius: 10 } as any}
          region={isReady ? {
            latitude: center.lat,
            longitude: center.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          } : undefined}
          onMarkerDragEnd={onMarkerDrag}
        >
          <Marker
            draggable
            coordinate={{ latitude: marker.lat, longitude: marker.lng }}
            title="Your Location"
          />
        </MapView>
      </View>
    </View>
  )
}
