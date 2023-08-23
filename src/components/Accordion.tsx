import React, { useEffect, useRef } from 'react'
import { MotiView } from 'moti'
import { StyleSheet } from 'react-native'
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

const noop = () => {}

export type AnimateHeightProps = {
  children?: React.ReactNode
  id: string
  hide?: boolean
  initialHeight?: number
  onHeightDidAnimate?: (height: number) => void
} & React.ComponentProps<typeof MotiView>

const transition = { duration: 200 } as const

const sharedValueMap = new Map()
const useSharedValueMap = (id: string, initialHeight: number) => {
  const sharedValue = useSharedValue(initialHeight)

  if (!sharedValueMap.has(id)) {
    sharedValueMap.set(id, sharedValue)
  }

  return sharedValueMap.get(id)
}

const sharedRefMap = new Map()
const useSharedRefMap = (id: string, initialState: boolean) => {
  const ref = useRef(initialState)

  if (!sharedRefMap.has(id)) {
    sharedRefMap.set(id, ref)
  }

  return sharedRefMap.get(id)
}

const Accordion = ({
  children,
  hide = !children,
  style,
  onHeightDidAnimate = noop,
  initialHeight = 0,
  id,
}: AnimateHeightProps) => {
  const isInitialRenderRef = useSharedRefMap(id, true)
  const measuredHeight = useSharedValueMap(id, initialHeight)

  useEffect(() => {
    measuredHeight.value = initialHeight
  }, [id, initialHeight, measuredHeight])

  const childStyle = useAnimatedStyle(
    () => ({
      opacity: withTiming(!measuredHeight.value || hide ? 0 : 1, transition),
    }),
    [hide, measuredHeight, transition]
  )

  const containerStyle = useAnimatedStyle(() => {
    // don't animate on first render
    if (isInitialRenderRef.current) {
      isInitialRenderRef.current = false
      return {
        height: measuredHeight.value,
      }
    }

    return {
      height: withTiming(hide ? 0 : measuredHeight.value, transition, () => {
        runOnJS(onHeightDidAnimate)(measuredHeight.value)
      }),
    }
  }, [hide, measuredHeight])

  return (
    <Animated.View style={[styles.hidden, style, containerStyle]}>
      <Animated.View
        style={[StyleSheet.absoluteFill, styles.autoBottom, childStyle]}
        onLayout={({ nativeEvent }) => {
          measuredHeight.value = Math.ceil(nativeEvent.layout.height)
        }}>
        {children}
      </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  autoBottom: {
    bottom: 'auto',
  },
  hidden: {
    overflow: 'hidden',
  },
})

export default Accordion
