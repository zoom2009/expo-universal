export interface IMapPickerProps {
  googleMapsApiKey: string
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
