import cn from '@/utilities/cn'
import { View } from 'react-native'
import AwesomeAlert, { AwesomeAlertProps } from 'react-native-awesome-alerts'

// ** Note ** Alert Component should place outside ScrollView
export const Alert = (props: AwesomeAlertProps) => {
  console.log('props:', props.show)
  return (
    <View
      pointerEvents={!props.show ? 'none' : 'auto'}
      className={cn([
        'absolute w-full z-50 top-0 right-0 left-0 bottom-0',
      ])}
    >
      <AwesomeAlert {...props} />
    </View>
  )
}
