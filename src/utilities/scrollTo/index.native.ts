import { LayoutChangeEvent } from 'react-native'
import { IScrollToProps } from './interface'

export const scrollTo = (props: IScrollToProps) => {
  const { scrollViewRef, x, y } = props
  try {
    scrollViewRef.current.scrollTo({ x, y, animated: true })
  } catch (e) {
    console.log('fail to scrollTo e:', e)
  }
}

export const getPositionView = (event: LayoutChangeEvent) => {
  const layout = event.nativeEvent.layout
  return { x: layout.x, y: layout.y }
}
