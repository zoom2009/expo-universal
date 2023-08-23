import { Text, View } from "react-native"

interface IErrorMessageProps {
  text?: string
}

const ErrorMessage = (props: IErrorMessageProps) => {
  const { text = '' } = props
  if (text === '') return null
  return (
    <View className="mt-2">
      <Text className="text-danger text-sm md:text-md">
        {text}
      </Text>
    </View>
  )
}

export default ErrorMessage
