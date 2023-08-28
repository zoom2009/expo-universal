import React from 'react'
import { View, Modal, TouchableOpacity } from 'react-native'
import { ACTIVE_OPACITY } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { getInsets } from '@/utilities/getInsets'
import ImageViewer from 'react-native-image-zoom-viewer'
import { IImageInfo } from 'react-native-image-zoom-viewer/built/image-viewer.type'

interface IImageZoomProps {
  imageIndex?: number
  visible: boolean
  onClose: () => void
  images?: IImageInfo[]
}

const ImageZoom = (props: IImageZoomProps) => {
  const {
    imageIndex = 0,
    visible,
    onClose,
    images,
  } = props

  const insets = getInsets()

  return (
    <Modal animationType="slide" visible={visible} transparent>
      <View style={{ paddingTop: insets.top }} className="flex flex-1 justify-center items-center bg-black relative">
        {images && (
          <ImageViewer
            style={{ width: '100%', height: '100%', marginTop: 0, padding: 0 }}
            imageUrls={images}
            onSwipeDown={onClose}
            enableSwipeDown
            index={imageIndex}
          />
        )}
        <TouchableOpacity
          activeOpacity={ACTIVE_OPACITY}
          onPress={onClose}
          style={{ top: insets.top + 5 }}
          className="absolute right-4 z-10"
        >
          <Icon.X size={28} weight="bold" color="white" />
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default ImageZoom
