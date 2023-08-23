import cn from '@/utilities/cn'
import { ReactNode } from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'

interface ILayoutProps {
  style?: StyleProp<ViewStyle>
  className?: string
  children?: ReactNode
}

interface ISubLayoutProps {
  gapSize?: number
  splitSize?: 'sm' | 'md' | 'lg' | 'xl'
}

const Wrapper = (props: ILayoutProps & { center?: boolean, top?: boolean }) => (
  <View
    style={props.style}
    className={cn([
      'flex flex-row flex-wrap',
      !props.top ? 'items-center' : 'items-start',
      props.center && 'justify-center',
      props.className,
    ])}
  >
    {props.children}
  </View>
)

const _1 = (props: ILayoutProps & ISubLayoutProps) => (
  <View
    style={[props.style, !!props.gapSize && { paddingHorizontal: props.gapSize }]}
    className={cn(['flex w-full', !props.gapSize && 'px-2 sm:px-4', props.className])}
  >
    {props.children}
  </View>
)

const _2_1 = (props: ILayoutProps & ISubLayoutProps) => {
  const { children, style, className, gapSize, splitSize = 'sm' } = props
  return (
    <View
      style={[style, !!gapSize && { paddingHorizontal: gapSize }]}
      className={cn([
        'flex w-full', !gapSize && 'px-2 sm:px-4', className,
        splitSize === 'sm' && 'sm:w-[50%]',
        splitSize === 'md' && 'md:w-[50%]',
        splitSize === 'lg' && 'lg:w-[50%]',
        splitSize === 'xl' && 'xl:w-[50%]',
      ])}
    >
      {children}
    </View>
  )
}

const _3_1 = (props: ILayoutProps & ISubLayoutProps) => {
  const { children, style, className, gapSize, splitSize = 'sm' } = props
  return (
    <View
      style={[style, !!gapSize && { paddingHorizontal: gapSize }]}
      className={cn([
        'flex w-full', !gapSize && 'px-2 sm:px-4', className,
        splitSize === 'sm' && 'sm:w-[33.33%]',
        splitSize === 'md' && 'md:w-[33.33%]',
        splitSize === 'lg' && 'lg:w-[33.33%]',
        splitSize === 'xl' && 'xl:w-[33.33%]',
      ])}
    >
      {children}
    </View>
  )
}

const _4_2_1 = (props: ILayoutProps & ISubLayoutProps) => {
  const { children, style, className, gapSize, splitSize = 'sm' } = props
  return (
    <View
      style={[style, !!gapSize && { paddingHorizontal: gapSize }]}
      className={cn([
        'flex w-full', !gapSize && 'px-2 sm:px-4', className,
        splitSize === 'sm' && 'sm:w-[50%] md:w-[25%]',
        splitSize === 'md' && 'md:w-[50%] lg:w-[25%]',
        splitSize === 'lg' && 'lg:w-[50%] xl:w-[25%]',
        splitSize === 'xl' && 'xl:w-[50%] 2xl:w-[25%]',
      ])}
    >
      {children}
    </View>
  )
}

const _4_2 = (props: ILayoutProps & ISubLayoutProps) => {
  const { children, style, className, gapSize, splitSize = 'sm' } = props
  return (
    <View
      style={[style, !!gapSize && { paddingHorizontal: gapSize }]}
      className={cn([
        'flex w-[50%]', !gapSize && 'px-2 sm:px-4', className,
        splitSize === 'sm' && 'sm:w-[25%]',
        splitSize === 'md' && 'md:w-[25%]',
        splitSize === 'lg' && 'lg:w-[25%]',
        splitSize === 'xl' && 'xl:w-[25%]',
      ])}
    >
      {children}
    </View>
  )
}

const _6_4_2_1 = (props: ILayoutProps & ISubLayoutProps) => {
  const { children, style, className, gapSize, splitSize = 'sm' } = props
  return (
    <View
      style={[style, !!gapSize && { paddingHorizontal: gapSize }]}
      className={cn([
        'flex w-full', !gapSize && 'px-2 sm:px-4', className,
        splitSize === 'sm' && 'sm:w-[50%] md:w-[25%] lg:w-[16.66%]',
        splitSize === 'md' && 'md:w-[50%] lg:w-[25%] xl:w-[16.66%]',
        splitSize === 'lg' && 'lg:w-[50%] xl:w-[25%] 2xl:w-[16.66%]',
        splitSize === 'xl' && 'xl:w-[50%] 2xl:w-[25%]',
      ])}
    >
      {children}
    </View>
  )
}

const _6_4_2 = (props: ILayoutProps & ISubLayoutProps) => {
  const { children, style, className, gapSize, splitSize = 'sm' } = props
  return (
    <View
      style={[style, !!gapSize && { paddingHorizontal: gapSize }]}
      className={cn([
        'flex w-[50%]', !gapSize && 'px-2 sm:px-4', className,
        splitSize === 'sm' && 'sm:w-[25%] md:w-[16.66%]',
        splitSize === 'md' && 'md:w-[25%] lg:w-[16.66%]',
        splitSize === 'lg' && 'lg:w-[25%] xl:w-[16.66%]',
        splitSize === 'xl' && 'xl:w-[25%] 2xl:w-[16.66%]',
      ])}
    >
      {children}
    </View>
  )
}

const _6_3_1 = (props: ILayoutProps & ISubLayoutProps) => {
  const { children, style, className, gapSize, splitSize = 'sm' } = props
  return (
    <View
      style={[style, !!gapSize && { paddingHorizontal: gapSize }]}
      className={cn([
        'flex w-full', !gapSize && 'px-2 sm:px-4', className,
        splitSize === 'sm' && 'sm:w-[33.33%] md:w-[16.66%]',
        splitSize === 'md' && 'md:w-[33.33%] lg:w-[16.66%]',
        splitSize === 'lg' && 'lg:w-[33.33%] xl:w-[16.66%]',
        splitSize === 'xl' && 'xl:w-[33.33%] 2xl:w-[16.66%]',
      ])}
    >
      {children}
    </View>
  )
}

const _6_3 = (props: ILayoutProps & ISubLayoutProps) => {
  const { children, style, className, gapSize, splitSize = 'sm' } = props
  return (
    <View
      style={[style, !!gapSize && { paddingHorizontal: gapSize }]}
      className={cn([
        'flex w-[33.33%]', !gapSize && 'px-2 sm:px-4', className,
        splitSize === 'sm' && 'sm:w-[16.66%]',
        splitSize === 'md' && 'md:w-[16.66%]',
        splitSize === 'lg' && 'lg:w-[16.66%]',
        splitSize === 'xl' && 'xl:w-[16.66%]',
      ])}
    >
      {children}
    </View>
  )
}

const _8_6_4_2_1 = (props: ILayoutProps & ISubLayoutProps) => {
  const { children, style, className, gapSize, splitSize = 'sm' } = props
  return (
    <View
      style={[style, !!gapSize && { paddingHorizontal: gapSize }]}
      className={cn([
        'flex w-full', !gapSize && 'px-2 sm:px-4', className,
        splitSize === 'sm' && 'sm:w-[50%] md:w-[25%] lg:w-[16.66%] xl:w-[12.5%]',
        splitSize === 'md' && 'md:w-[50%] lg:w-[25%] xl:w-[16.66%] 2xl:w-[12.5%]',
        splitSize === 'lg' && 'lg:w-[50%] xl:w-[25%] 2xl:w-[16.66%]',
        splitSize === 'xl' && 'xl:w-[50%] 2xl:w-[25%]',
      ])}
    >
      {children}
    </View>
  )
}

const _8_6_4_2 = (props: ILayoutProps & ISubLayoutProps) => {
  const { children, style, className, gapSize, splitSize = 'sm' } = props
  return (
    <View
      style={[style, !!gapSize && { paddingHorizontal: gapSize }]}
      className={cn([
        'flex w-[50%]', !gapSize && 'px-2 sm:px-4', className,
        splitSize === 'sm' && 'sm:w-[25%] md:w-[16.66%] lg:w-[12.5%]',
        splitSize === 'md' && 'md:w-[25%] lg:w-[16.66%] xl:w-[12.5%]',
        splitSize === 'lg' && 'lg:w-[25%] xl:w-[16.66%] 2xl:w-[12.5%]',
        splitSize === 'xl' && 'xl:w-[25%] 2xl:w-[16.66%]',
      ])}
    >
      {children}
    </View>
  )
}

const _8_6_4 = (props: ILayoutProps & ISubLayoutProps) => {
  const { children, style, className, gapSize, splitSize = 'sm' } = props
  return (
    <View
      style={[style, !!gapSize && { paddingHorizontal: gapSize }]}
      className={cn([
        'flex w-[25%]', !gapSize && 'px-2 sm:px-4', className,
        splitSize === 'sm' && 'sm:w-[16.66%] md:w-[12.5%]',
        splitSize === 'md' && 'md:w-[16.66%] lg:w-[12.5%]',
        splitSize === 'lg' && 'lg:w-[16.66%] xl:w-[12.5%]',
        splitSize === 'xl' && 'xl:w-[16.66%] 2xl:w-[12.5%]',
      ])}
    >
      {children}
    </View>
  )
}

const _8_4 = (props: ILayoutProps & ISubLayoutProps) => {
  const { children, style, className, gapSize, splitSize = 'sm' } = props
  return (
    <View
      style={[style, !!gapSize && { paddingHorizontal: gapSize }]}
      className={cn([
        'flex w-[25%]', !gapSize && 'px-2 sm:px-4', className,
        splitSize === 'sm' && 'sm:w-[12.5%]',
        splitSize === 'md' && 'md:w-[12.5%]',
        splitSize === 'lg' && 'lg:w-[12.5%]',
        splitSize === 'xl' && 'xl:w-[12.5%]',
      ])}
    >
      {children}
    </View>
  )
}

export const Layout = {
  Wrapper,
  _1,
  _2_1,
  _3_1,
  _4_2_1,
  _4_2,
  _6_4_2_1,
  _6_4_2,
  _6_3_1,
  _6_3,
  _8_6_4_2_1,
  _8_6_4_2,
  _8_6_4,
  _8_4,
}
