export interface IMapPickerProps {
  googleMapsApiKey: string
  width?: string | number
  height?: string | number
  placeholder?: string
  searchPlaceholder?: string
  onChange: ({ lat, lng  }: { lat: number, lng: number }) => void
  defaultLocation: {
    lat: number
    lng: number
  }
  value?: {
    lat: number
    lng: number
  }
}
