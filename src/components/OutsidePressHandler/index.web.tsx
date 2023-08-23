import { Fragment, useEffect, useState } from 'react'
import _OutsidePressHandler from 'react-outside-click-handler'
import { IOutsidePressHandlerProps } from './interface'

export const EventProvider = Fragment

export const OutsidePressHandler = (props: IOutsidePressHandlerProps) => {
  const [isReady, setIsReady] = useState(false)
  const { children, onOutside } = props

  useEffect(() => {
    setIsReady(true)
    return () => {
      setIsReady(false)
    }
  }, [])

  if (!isReady) return null

  return (
    <_OutsidePressHandler display="contents" onOutsideClick={onOutside}>
      {children}
    </_OutsidePressHandler>
  )
}
