import { forwardRef, useImperativeHandle, useRef } from 'react'
import LottieView from 'lottie-react-native'
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

  const lottieRef = useRef({
    play: () => {},
    pause: () => {},
    reset: () => {},
    resume: () => {},
  })

  useImperativeHandle(ref, () => ({
    play: () => lottieRef.current.play(),
    pause: () => lottieRef.current.pause(),
    reset: () => lottieRef.current.reset(),
    resume: () => lottieRef.current.resume(),
  }))

  return (
    <LottieView
      ref={lottieRef as any}
      source={source}
      style={{ height, width }}
      resizeMode={resizeMode}
      autoPlay={autoplay}
      loop={loop}
      speed={speed}
    />
  )
})
