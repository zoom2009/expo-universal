import { Fragment } from 'react'
import _OutsidePressHandler from 'react-outside-click-handler'
import { IOutsidePressHandlerProps } from './interface'

export const EventProvider = Fragment

export const OutsidePressHandler = (props: IOutsidePressHandlerProps) => {
  const { children, onOutside } = props
  return (
    <_OutsidePressHandler onOutsideClick={onOutside}>
      {children}
    </_OutsidePressHandler>
  )
}
