import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { View } from 'react-native'
import LottieView from 'react-lottie'
import { ILottieProps } from './interface'

export const Lottie = forwardRef((props: ILottieProps, ref) => {
  const {
    source,
    height,
    width,
    autoplay = false,
    loop = false,
    resizeMode,
    speed,
  } = props

  const [isPaused, setIsPaused] = useState(false)
  const [isStopped, setIsStopped] = useState(false)

  useEffect(() => {
    if (autoplay) {
      setIsPaused(false)
      setIsStopped(false)
    } else {
      setIsPaused(false)
      setIsStopped(true)
    }
  }, [autoplay])

  useImperativeHandle(ref, () => ({
    play: () => {
      setIsPaused(false)
      setIsStopped(false)
    },
    pause: () => {
      setIsPaused(true)
      setIsStopped(false)
    },
    reset: () => {},
    resume: () => {
      setIsPaused(false)
      setIsStopped(false)
    },
  }))

  return (
    <View style={{ width, height }} pointerEvents="none">
      <LottieView
        isPaused={isPaused}
        isStopped={isStopped}
        options={{
          animationData: source,
          autoplay,
          loop,
        }}
        speed={speed}
        width={width}
        height={height}
        style={{ objectFit: resizeMode as any }}
      />
    </View>
  )
})
