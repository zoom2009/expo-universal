import { LayoutChangeEvent } from 'react-native'

interface IScrollToProps {
  /** To use this you should call onLayout at view-target for get x, y to get x, y you can use getPositionView fn. */
  scrollViewRef: any
  x?: number
  y?: number
}

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
