import Toast from 'react-native-root-toast'
import { IDisplayToastProps } from './interface'

export const displayToast = (props: IDisplayToastProps) => {
  const { message } = props
  Toast.show(message, {
    duration: 4500,
    delay: 0,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
  })
}
