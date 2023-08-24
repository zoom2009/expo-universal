import { useEffect, useRef, useState } from 'react'
import { View } from 'react-native'
import { StandaloneSearchBox, LoadScript, GoogleMap, Marker } from '@react-google-maps/api'
import { useGeolocated } from 'react-geolocated'
import * as R from 'ramda'
import Input from '@/components/Input'
import { isEmpty } from '@/utilities/validate'
import { IMapPickerProps } from './interface'

export const MapPicker = (props: IMapPickerProps) => {
  const { defaultLocation, googleMapsApiKey, onChangeEffect, value } = props
  const [center, setCenter] = useState({ lat: defaultLocation.lat, lng: defaultLocation.lng })
  const [marker, setMarker] = useState({ lat: defaultLocation.lat, lng: defaultLocation.lng })

  const [typeLat, setTypeLat] = useState('')
  const [typeLng, setTypeLng] = useState('')

  // const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({}) <Maybe will use later>
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
        onChangeEffect && onChangeEffect(currentLocation)
      }
    },
    onError: () => {
      // alert('ไม่สามารถขอที่อยู่ Location ได้')
      console.log('ไม่สามารถขอที่อยู่ Location ได้')
    },
  })

  const searchboxRef = useRef({ getPlaces: () => {} })

  const onPlacesChanged = () => {
    const places = searchboxRef.current.getPlaces()
    const lat = (R.pathOr(() => {}, [0, 'geometry', 'location', 'lat'], places)()) as any
    const lng = (R.pathOr(() => {}, [0, 'geometry', 'location', 'lng'], places)()) as any
    setCenter({ lat, lng })
    setMarker({ lat, lng })
    onChangeEffect && onChangeEffect({ lat, lng })
  }

  const onDblClick = ({ latLng }: any) => {
    const { lat: latFn, lng: lngFn } = latLng
    const lat = latFn()
    const lng = lngFn()
    setMarker({ lat, lng })
    onChangeEffect && onChangeEffect({ lat, lng })
  }

  const onTypeLocation = (type: 'lat' | 'lng') => (value: string) => {
    if (!isEmpty(value)) {
      if (type === 'lat') {
        const v = { lat: +value, lng: +(typeLng || 0) }
        setTypeLat(value)
        setCenter(v)
        setMarker(v)
        onChangeEffect && onChangeEffect(v)
      } else if (type === 'lng') {
        const v = { lat: +(typeLat || 0), lng: +value }
        setTypeLng(value)
        setCenter(v)
        setMarker(v)
        onChangeEffect && onChangeEffect(v)
      }
    }
  }

  const transformOnChangeLocationText = (text: string) => text.replace(/[^0-9.]/g, '')

  useEffect(() => {
    if (value) {
      setCenter({ lat: value.lat, lng: value.lng })
      setMarker({ lat: value.lat, lng: value.lng })
      setTypeLat(`${value.lat}`)
      setTypeLng(`${value.lng}`)
    }
  }, [value])

  return (
    <View className="w-full mt-8">
      <View className="flex flex-1 flex-row items-center flex-wrap">
        <View className="flex flex-1">
          <Input
            value={typeLat}
            label="ละติจูด"
            placeholder="ระบุละติจูด"
            transformOnChange={transformOnChangeLocationText}
            onChangeEffect={onTypeLocation('lat')}
          />
        </View>
        <View className="w-4" />
        <View className="flex flex-1">
          <Input
            value={typeLng}
            label="ลองติจูด"
            placeholder="ระบุลองติจูด"
            transformOnChange={transformOnChangeLocationText}
            onChangeEffect={onTypeLocation('lng')}
          />
        </View>
      </View>
      <View className="w-full h-[450px] mt-6">
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
                placeholder="พิมพ์เพื่อค้นหา"
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
