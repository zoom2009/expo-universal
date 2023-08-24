import { LayoutChangeEvent } from 'react-native'
import { IScrollToProps } from './interface'

export const scrollTo = (props: IScrollToProps) => {
  const { x, y } = props
  window.scroll({ top: y, left: x, behavior: 'smooth' })
}

export const getPositionView = (event: LayoutChangeEvent) => {
  const layout = event.nativeEvent.layout
  return { x: layout.x, y: layout.y }
}
