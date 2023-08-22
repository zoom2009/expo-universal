import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { OutsidePressHandler } from '@/components/OutsidePressHandler'

const Dropdown = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ])

  return (
    <OutsidePressHandler
      onOutside={() => setOpen(false)}
    >
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        listMode="SCROLLVIEW"
        onClose={() => console.log('aaa')}
      />
    </OutsidePressHandler>
  )
}

export default Dropdown
