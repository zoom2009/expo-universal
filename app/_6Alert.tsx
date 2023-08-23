import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react'
import { Alert } from '@/components/Alert'
import Button, { ACTIVE_OPACITY } from '@/components/Button'
import Label from '@/components/Label'
import CodeHighLighter from '@/components/CodeHighLighter'

const _6Alert = () => {
  const [showAlert, setShowAlert] = useState(false)
  const onHide = () => setShowAlert(false)

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: '2.5%' }}>
      <Alert
        show={showAlert}
        title="Alert Title"
        message="I have a message for you!"
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="No, cancel"
        confirmText="Yes, delete it"
        confirmButtonColor="#DD6B55"
        onCancelPressed={onHide}
        onConfirmPressed={onHide}
        onDismiss={onHide}
      />
      <View className="h-2" />
      <Label required bold>NOTE</Label>
      <View className="h-2" />
      <CodeHighLighter language="typescript">
        {`// This Alert component using react-native-awesome-alerts lib.`}
      </CodeHighLighter>
      <View className="h-8" />
      <Label bold>Basic</Label>
      <View className="h-4" />
      <Button
        text="Show Alert"
        type="warning"
        onPress={() => setShowAlert(true)}
      />
      <View className="h-4" />
      <CodeHighLighter language="typescript">
        {`const [showAlert, setShowAlert] = useState(false)\nconst onHide = () => setShowAlert(false)`}
      </CodeHighLighter>
      <View className="h-2" />
      <CodeHighLighter>
        {`<Alert\n\tshow={showAlert}\n\ttitle="Alert Title"\n\tmessage="I have a message for you!"\n\tcloseOnTouchOutside={false}\n\tcloseOnHardwareBackPress={false}\n\tshowCancelButton={true}\n\tshowConfirmButton={true}\n\tcancelText="No, cancel"\n\tconfirmText="Yes, delete it"\n\tconfirmButtonColor="#DD6B55"\n\tonCancelPressed={onHide}\n\tonConfirmPressed={onHide}\n/>`}
      </CodeHighLighter>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://github.com/rishabhbhatia/react-native-awesome-alerts')}
        activeOpacity={ACTIVE_OPACITY}
        className="mt-8 px-2"
      >
        <Text className="text-lg font-bold text-blue-400">More Info About Alert Lib.</Text>
      </TouchableOpacity>
      <View className="h-10" />
    </ScrollView>
  )
}

export default _6Alert
