import { Platform } from 'react-native'
import React from 'react'
import { ToastContainer } from 'react-toast'
import { RootSiblingParent } from 'react-native-root-siblings'

interface IToastRootProviderProps {
  children: React.ReactNode
}

export const ToastRootProvider = (props: IToastRootProviderProps) => {
  if (Platform.OS === 'web') return (
    <>
      {props.children}
      <ToastContainer delay={4500} />
    </>
  )

  return <RootSiblingParent>{props.children}</RootSiblingParent>
}
