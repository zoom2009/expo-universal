import _OutsidePressHandler, { EventProvider as _EventProvider  } from 'react-native-outside-press'
import { IOutsidePressHandlerProps } from './interface'

export const EventProvider = _EventProvider

export const OutsidePressHandler = (props: IOutsidePressHandlerProps) => {
  const { children, onOutside } = props
  return (
    <_OutsidePressHandler style={{ zIndex: 1000 }} onOutsidePress={onOutside}>
      {children}
    </_OutsidePressHandler>
  )
}
