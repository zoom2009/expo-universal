import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Accordion from '@/components/Accordion'
import Button from '@/components/Button'
import Label from '@/components/Label'
import CodeHighLighter from '@/components/CodeHighLighter'

const _8Accordion = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: '2.5%' }}>
      <View className="h-2" />
      <Label required bold>Basic</Label>
      <View className="h-4" />
      <Button
        text={isExpanded ? 'Show Less' : 'Show More'}
        type="info-outline"
        onPress={() => setIsExpanded(prev => !prev)}
      />
      <View className="h-4" />
      <Accordion id="1" hide={!isExpanded}>
        <Text>
          Tempor aute Lorem do exercitation sint commodo ut excepteur amet esse do qui aliqua. Nulla voluptate fugiat exercitation labore enim aliquip proident in sint duis labore et. Et ea consequat duis sit exercitation cupidatat nulla officia anim do adipisicing do laboris. Irure in adipisicing ex ut ipsum veniam. Consequat dolore laboris qui aliqua commodo excepteur est et ullamco enim dolore. Nisi in pariatur labore sit irure ea irure laboris. Aliqua proident commodo ullamco sit consectetur aute minim elit minim dolor dolore nostrud voluptate est. Adipisicing elit quis culpa irure est anim amet labore aute et enim dolore aute. Magna in irure sit tempor. Pariatur labore Lorem ipsum nostrud deserunt incididunt ullamco deserunt.
          Aliqua consectetur amet voluptate fugiat. Exercitation duis est culpa do incididunt occaecat velit nisi. Ea laboris in adipisicing non id excepteur proident dolor culpa excepteur. Anim et cillum Lorem dolor officia aliquip qui cillum cupidatat. Sint exercitation do duis laboris occaecat laborum in magna elit deserunt voluptate reprehenderit ullamco. Anim nisi dolore amet consectetur consequat voluptate incididunt aliquip fugiat. Consectetur sit ut amet elit.
          Irure irure voluptate cupidatat ex deserunt dolor excepteur. Consectetur deserunt eu sunt ad tempor duis nisi duis est officia sunt aute consequat. Laboris fugiat enim sint enim proident ad culpa sint non. Magna Lorem consequat consequat culpa tempor occaecat aliquip veniam aliqua. Pariatur aliqua aute eu nisi tempor ut. Et enim voluptate sunt nulla adipisicing officia elit laboris cupidatat incididunt labore eu.
          Tempor aute Lorem do exercitation sint commodo ut excepteur amet esse do qui aliqua. Nulla voluptate fugiat exercitation labore enim aliquip proident in sint duis labore et. Et ea consequat duis sit exercitation cupidatat nulla officia anim do adipisicing do laboris. Irure in adipisicing ex ut ipsum veniam. Consequat dolore laboris qui aliqua commodo excepteur est et ullamco enim dolore. Nisi in pariatur labore sit irure ea irure laboris. Aliqua proident commodo ullamco sit consectetur aute minim elit minim dolor dolore nostrud voluptate est. Adipisicing elit quis culpa irure est anim amet labore aute et enim dolore aute. Magna in irure sit tempor. Pariatur labore Lorem ipsum nostrud deserunt incididunt ullamco deserunt.
          Aliqua consectetur amet voluptate fugiat. Exercitation duis est culpa do incididunt occaecat velit nisi. Ea laboris in adipisicing non id excepteur proident dolor culpa excepteur. Anim et cillum Lorem dolor officia aliquip qui cillum cupidatat. Sint exercitation do duis laboris occaecat laborum in magna elit deserunt voluptate reprehenderit ullamco. Anim nisi dolore amet consectetur consequat voluptate incididunt aliquip fugiat. Consectetur sit ut amet elit.
          Irure irure voluptate cupidatat ex deserunt dolor excepteur. Consectetur deserunt eu sunt ad tempor duis nisi duis est officia sunt aute consequat. Laboris fugiat enim sint enim proident ad culpa sint non. Magna Lorem consequat consequat culpa tempor occaecat aliquip veniam aliqua. Pariatur aliqua aute eu nisi tempor ut. Et enim voluptate sunt nulla adipisicing officia elit laboris cupidatat incididunt labore eu.
          Tempor aute Lorem do exercitation sint commodo ut excepteur amet esse do qui aliqua. Nulla voluptate fugiat exercitation labore enim aliquip proident in sint duis labore et. Et ea consequat duis sit exercitation cupidatat nulla officia anim do adipisicing do laboris. Irure in adipisicing ex ut ipsum veniam. Consequat dolore laboris qui aliqua commodo excepteur est et ullamco enim dolore. Nisi in pariatur labore sit irure ea irure laboris. Aliqua proident commodo ullamco sit consectetur aute minim elit minim dolor dolore nostrud voluptate est. Adipisicing elit quis culpa irure est anim amet labore aute et enim dolore aute. Magna in irure sit tempor. Pariatur labore Lorem ipsum nostrud deserunt incididunt ullamco deserunt.
          Aliqua consectetur amet voluptate fugiat. Exercitation duis est culpa do incididunt occaecat velit nisi. Ea laboris in adipisicing non id excepteur proident dolor culpa excepteur. Anim et cillum Lorem dolor officia aliquip qui cillum cupidatat. Sint exercitation do duis laboris occaecat laborum in magna elit deserunt voluptate reprehenderit ullamco. Anim nisi dolore amet consectetur consequat voluptate incididunt aliquip fugiat. Consectetur sit ut amet elit.
          Irure irure voluptate cupidatat ex deserunt dolor excepteur. Consectetur deserunt eu sunt ad tempor duis nisi duis est officia sunt aute consequat. Laboris fugiat enim sint enim proident ad culpa sint non. Magna Lorem consequat consequat culpa tempor occaecat aliquip veniam aliqua. Pariatur aliqua aute eu nisi tempor ut. Et enim voluptate sunt nulla adipisicing officia elit laboris cupidatat incididunt labore eu.
        </Text>
      </Accordion>
      <View className="h-4" />
      <Label required bold>NOTE</Label>
      <View className="h-4" />
      <CodeHighLighter language="typescript">
        {`// give an id for increate more performance`}
      </CodeHighLighter>
      <View className="h-4" />
      <CodeHighLighter language="typescript">
        {`const [isExpanded, setIsExpanded] = useState(false)`}
      </CodeHighLighter>
      <View className="h-2" />
      <CodeHighLighter>
        {`<Accordion id="1" hide={!isExpanded}>\n\t<Text>{content}</Text>\n</Accordion>`}
      </CodeHighLighter>
      <View className="h-10" />
    </ScrollView>
  )
}

export default _8Accordion
