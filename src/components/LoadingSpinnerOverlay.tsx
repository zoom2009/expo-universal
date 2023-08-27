import theme from '@/utilities/theme'
import { Modal, ActivityIndicator, View, Text } from 'react-native'

interface ILoadingSpinnerOverlayProps {
  visible: boolean
  text?: string
  backgroundColor?: string
  textColor?: string
  spinnerColor?: string
}

export const LoadingSpinnerOverlay = (props: ILoadingSpinnerOverlayProps) => {
  const { 
    visible = false,
    text,
    backgroundColor = theme.backdropColor,
    textColor = 'white',
    spinnerColor = 'white',
  } = props

  return (
    <Modal animationType="fade" visible={visible} transparent>
      <View style={{ backgroundColor }} className="w-screen h-screen flex flex-1 justify-center items-center">
        <ActivityIndicator size="large" color={spinnerColor} />
        <View className="h-4" />
        {!!text && <Text style={{ color: textColor }} className="text-md text-center">{text}</Text>}
      </View>
    </Modal>
  )
}
