import { View, Text } from 'react-native'
import React from 'react'
import PageContainer from '@/layout/PageContainer'
import Label from '@/components/Label'
import { Table } from '@/components/Table'
import CodeHighLighter from '@/components/CodeHighLighter'

const _26Table = () => {
  const content = [
    ['r1 c1', 'r1 c2', 'r1 c3', 'r1 c4', 'r1 c5', 'r1 c3', 'r1 c4', 'r1 c5', 'r1 c6', 'r1 c7', 'r1 c8'],
    ['r2 c1', 'r2 c2', 'r2 c3', 'r2 c4', 'r2 c5', 'r1 c3', 'r1 c4', 'r1 c5', 'r2 c6', 'r2 c7', 'r2 c8'],
    ['r3 c1', 'r3 c2', 'r3 c3', 'r3 c4', 'r3 c5', 'r1 c3', 'r1 c4', 'r1 c5', 'r3 c6', 'r3 c7', 'r3 c8'],
    ['r4 c1', 'r4 c2', 'r4 c3', 'r4 c4', 'r4 c5', 'r1 c3', 'r1 c4', 'r1 c5', 'r4 c6', 'r4 c7', 'r4 c8'],
    ['r5 c1', 'r5 c2', 'r5 c3', 'r5 c4', 'r5 c5', 'r1 c3', 'r1 c4', 'r1 c5', 'r5 c6', 'r5 c7', 'r5 c8'],
  ]

  return (
    <PageContainer>
      <View className="h-2" />
      <Label required bold>NOTE</Label>
      <View className="h-2" />
      <CodeHighLighter language="typescript">
        {`// For advance table. You can try your own, It's just a component`}
      </CodeHighLighter>
      <View className="h-4" />
      <Label bold>Basic</Label>
      <View className="h-4" />
      <Table.Wrapper padding={10} borderStyle={{ borderColor: 'red', borderWidth: 2 }}>
        {content.map((row, i) => (
          <Table.Row key={`row${i}`}>
            {row.map((cell, j) => (
              <Table.Cell key={`cell${j}`} cellWidth={200}>
                <Text>{cell}</Text>
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Wrapper>
      <View className="h-6" />
      <CodeHighLighter language="typescript">
        {`const content = [\n\t['r1 c1', 'r1 c2', 'r1 c3', 'r1 c4', 'r1 c5', 'r1 c3', 'r1 c4', 'r1 c5', 'r1 c6', 'r1 c7', 'r1 c8'],\n\t['r2 c1', 'r2 c2', 'r2 c3', 'r2 c4', 'r2 c5', 'r1 c3', 'r1 c4', 'r1 c5', 'r2 c6', 'r2 c7', 'r2 c8'],\n\t['r3 c1', 'r3 c2', 'r3 c3', 'r3 c4', 'r3 c5', 'r1 c3', 'r1 c4', 'r1 c5', 'r3 c6', 'r3 c7', 'r3 c8'],\n\t['r4 c1', 'r4 c2', 'r4 c3', 'r4 c4', 'r4 c5', 'r1 c3', 'r1 c4', 'r1 c5', 'r4 c6', 'r4 c7', 'r4 c8'],\n\t['r5 c1', 'r5 c2', 'r5 c3', 'r5 c4', 'r5 c5', 'r1 c3', 'r1 c4', 'r1 c5', 'r5 c6', 'r5 c7', 'r5 c8'],\n]`}
      </CodeHighLighter>
      <View className="h-4" />
      <CodeHighLighter>
        {`<Table.Wrapper padding={10} borderStyle={{ borderColor: 'red', borderWidth: 2 }}>\n\t{content.map((row, i) => (\n\t\t<Table.Row key={\`row\${i}\`}>\n\t\t\t{row.map((cell, j) => (\n\t\t\t\t<Table.Cell key={\`cell\${j}\`} cellWidth={200}>\n\t\t\t\t\t<Text>{cell}</Text>\n\t\t\t\t</Table.Cell>\n\t\t\t))}\n\t\t</Table.Row>\n\t))}\n</Table.Wrapper>`}
      </CodeHighLighter>
      <View className="h-10" />
    </PageContainer>
  )
}

export default _26Table
