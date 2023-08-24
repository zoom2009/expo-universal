import { useEffect, useRef, useState } from 'react'
import { View } from 'react-native'
import { StandaloneSearchBox, LoadScript, GoogleMap, Marker } from '@react-google-maps/api'
import { useGeolocated } from 'react-geolocated'
import * as R from 'ramda'
import { isEmpty } from '@/utilities/validate'
import { IMapPickerProps } from './interface'

export const MapPicker = (props: IMapPickerProps) => {
  const {
    defaultLocation,
    googleMapsApiKey,
    onChange,
    searchPlaceholder,
    placeholder,
    value,
    height = 450,
    width = '100%',
  } = props

  const [center, setCenter] = useState({ lat: defaultLocation.lat, lng: defaultLocation.lng })
  const [marker, setMarker] = useState({ lat: defaultLocation.lat, lng: defaultLocation.lng })

  useGeolocated({
    positionOptions: { enableHighAccuracy: false },
    userDecisionTimeout: 10000,
    onSuccess: ({ coords }) => {
      if (
        isEmpty(value?.lat) ||
        isEmpty(value?.lng) ||
        (value?.lat === defaultLocation.lat && value?.lng === defaultLocation.lng)
      ) { // default value only will set
        const currentLocation = { lat: coords.latitude, lng: coords.longitude }
        setCenter(currentLocation)
        setMarker(currentLocation)
        onChange && onChange(currentLocation)
      }
    },
    onError: () => {
      console.log('cannot request current location!')
    },
  })

  const searchboxRef = useRef({ getPlaces: () => {} })

  const onPlacesChanged = () => {
    const places = searchboxRef.current.getPlaces()
    const lat = (R.pathOr(() => {}, [0, 'geometry', 'location', 'lat'], places)()) as any
    const lng = (R.pathOr(() => {}, [0, 'geometry', 'location', 'lng'], places)()) as any
    setCenter({ lat, lng })
    setMarker({ lat, lng })
    onChange && onChange({ lat, lng })
  }

  const onDblClick = ({ latLng }: any) => {
    const { lat: latFn, lng: lngFn } = latLng
    const lat = latFn()
    const lng = lngFn()
    setMarker({ lat, lng })
    onChange && onChange({ lat, lng })
  }

  useEffect(() => {
    if (value) {
      setCenter({ lat: value.lat, lng: value.lng })
      setMarker({ lat: value.lat, lng: value.lng })
    }
  }, [value])

  return (
    <View className="w-full">
      <View style={{ height, width } as any} className="w-full">
        <LoadScript
          id="script-loader"
          googleMapsApiKey={googleMapsApiKey}
          libraries={["places"]}
        >
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%', borderRadius: 14 }}
            options={{ disableDoubleClickZoom: true }}
            center={center}
            zoom={10}
            onDblClick={onDblClick}
          >
            <StandaloneSearchBox
              onLoad={(ref: any) => searchboxRef.current = ref}
              onPlacesChanged={onPlacesChanged}
            >
              <input
                type="text"
                placeholder={placeholder || searchPlaceholder}
                style={{
                  boxSizing: `border-box`,
                  border: `1px solid transparent`,
                  width: `240px`,
                  height: `32px`,
                  padding: `0 12px`,
                  borderRadius: `3px`,
                  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                  fontSize: `14px`,
                  outline: `none`,
                  textOverflow: `ellipses`,
                  position: "absolute",
                  left: "50%",
                  marginLeft: "-120px"
                }}
              />
            </StandaloneSearchBox>
            <Marker position={marker} />
          </GoogleMap>
        </LoadScript>
      </View>
    </View>
  )
}
