import React, { useMemo, useState } from 'react'
import { View, Image, ImageResizeMode, ImageSourcePropType, TouchableOpacity, useWindowDimensions, Platform } from 'react-native'
import Swiper from 'react-native-web-swiper'
import theme from '@/utilities/theme'
import ImageZoom from '@/components/ImageZoom'
import { Icon } from '@/components/Icon'
import { ACTIVE_OPACITY } from '@/components/Button'

interface IImageCarouselProps {
  images: ImageSourcePropType[]
  height: number
  loop?: boolean
  from?: number
  autoPlay?: boolean
  resizeMode?: ImageResizeMode
  minHeight?: number
  maxHeight?: number
}

const NextComponent = (props: any) => (
  <TouchableOpacity
    onPress={props.onPress}
    activeOpacity={ACTIVE_OPACITY}
    className="w-[32px] sm:w-[38px] h-[32px] sm:h-[38px] md:h-[52px] md:w-[52px] rounded-full justify-center items-center bg-primary"
  >
    <Icon.CaretRight size={18} weight="bold" color="white" />
  </TouchableOpacity>
)

const PrevComponent = (props: any) => (
  <TouchableOpacity
    onPress={props.onPress}
    activeOpacity={ACTIVE_OPACITY}
    className="w-[32px] sm:w-[38px] h-[32px] sm:h-[38px] md:h-[52px] md:w-[52px] rounded-full justify-center items-center bg-primary"
  >
    <Icon.CaretLeft size={18} weight="bold" color="white" />
  </TouchableOpacity>
)

const ImageCarousel = (props: IImageCarouselProps) => {
  const {
    images,
    height,
    from = 0,
    loop = true,
    autoPlay,
    resizeMode = 'cover',
    minHeight = undefined,
    maxHeight = undefined,
  } = props
  const { width, height: h } = useWindowDimensions()
  const [imageZooming, setImageZooming] = useState<number | undefined>(undefined)
  const onOpenImageZooming = (imageIndex: number) => () => {
    setImageZooming(imageIndex)
  }
  const onCloseImageZooming = () => {
    setImageZooming(undefined)
  }
  const imagesTransform = useMemo(() => {
    return images.map(({ uri }: any) => ({
      url: uri,
      props: { width, height: h },
    }))
  }, [images, width, h])

  return (
    <>
      <View style={{ height, minHeight, maxHeight }}>
        <Swiper
          from={from}
          loop={loop}
          timeout={autoPlay ? 4 : undefined}
          controlsProps={{
            nextTitleStyle: { color: theme.colors.primary, fontWeight: 'bold' },
            prevTitleStyle: { color: theme.colors.primary, fontWeight: 'bold' },
            NextComponent: NextComponent as any,
            PrevComponent: PrevComponent as any,
            nextPos: 'right',
            prevPos: 'left',
          }}
        >
          {images.map((img, index) => (
            <TouchableOpacity
              key={`${index}`}
              activeOpacity={1}
              className="h-full w-full bg-[#191919]"
              onPress={onOpenImageZooming(index)}
              disabled={Platform.OS === 'web'}
            >
              <Image
                source={img}
                resizeMode={resizeMode}
                style={{ width: '100%', height: '100%' }}
              />
            </TouchableOpacity>
          ))}
        </Swiper>
      </View>
      <ImageZoom
        imageIndex={imageZooming}
        onClose={onCloseImageZooming}
        images={imagesTransform}
        visible={imageZooming !== undefined}
      />
    </>
  )
}

export default ImageCarousel
