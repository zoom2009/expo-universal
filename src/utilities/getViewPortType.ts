import { useWindowDimensions } from 'react-native'

// more info https://tailwindcss.com/docs/responsive-design
const getViewPortType = (width: number) => {
  if (width >= 1536) return '2xl'
  if (width >= 1280) return 'xl'
  if (width >= 1024) return 'lg'
  if (width >= 768) return 'md'
  if (width >= 640) return 'sm'
  return 'normal'
}

export default getViewPortType
