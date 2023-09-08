import { View, DimensionValue, ScrollView } from 'react-native'
import * as R from 'ramda'
import React from 'react'
import cn from '@/utilities/cn'

interface IWrapperProps {
  children: React.ReactNode
  className?: string
  borderStyle?: {
    borderWidth: number
    borderColor: string
  }
  padding?: number
}

const Wrapper = (props: IWrapperProps) => {
  const borderWidth = R.path(['borderStyle', 'borderWidth'], props) as number
  const borderColor = R.path(['borderStyle', 'borderColor'], props) as string

  const childrenWithProps = React.Children.map(props.children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { borderWidth, borderColor, padding: props.padding } as any)
    }
    return child
  })

  return (
    <View>
      <ScrollView horizontal contentContainerStyle={{ flexGrow: 1, paddingBottom: 10 }}>
        <View style={{ borderBottomWidth: borderWidth, borderColor }} className={cn("flex self-start", props.className || "")}>
          {childrenWithProps}
        </View>
      </ScrollView>
    </View>
  )
}

interface IRowProps {
  children: React.ReactNode
  className?: string
}

const Row = (props: IRowProps) => {
  const borderWidth = R.path(['borderWidth'], props) as number
  const borderColor = R.path(['borderColor'], props) as string
  const padding = R.path(['padding'], props) as string

  const childrenWithProps = React.Children.map(props.children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { borderWidth, borderColor, padding } as any)
    }
    return child
  })

  return (
    <View style={{ borderColor, borderLeftWidth: borderWidth, borderTopWidth: borderWidth }} className={cn(["flex flex-row items-center", props.className || ""])}>
      {childrenWithProps}
    </View>
  )
}

interface ICellProps {
  cellWidth: DimensionValue
  className?: string
  children: React.ReactNode
}

const Cell = (props: ICellProps) => {
  const { cellWidth, children, className } = props
  const borderWidth = R.path(['borderWidth'], props) as number
  const borderColor = R.path(['borderColor'], props) as string
  const padding = R.path(['padding'], props) as number

  return (
    <View style={{ width: cellWidth, height: '100%', borderRightWidth: borderWidth, borderColor, padding }} className={className}>
      {children}
    </View>
  )
}

export const Table = {
  Wrapper,
  Row,
  Cell,
}
