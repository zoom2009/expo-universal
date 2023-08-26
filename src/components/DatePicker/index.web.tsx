import React, { useMemo, useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import * as R from 'ramda'
import { ACTIVE_OPACITY } from '@/components/Button'
import Input from '@/components/Input'
import { Icon } from '@/components/Icon'
import theme from '@/utilities/theme'
import { Calendar } from 'react-date-range'
import { Popover, ArrowContainer } from 'react-tiny-popover'
// @ts-ignore
import * as locales from 'react-date-range/dist/locale'
import { IDatePickerProps } from './interface'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { getDateTimestamp, getFullDate } from '@/utilities/date'

const DatePicker = (props: IDatePickerProps) => {
  const {
    startYear,
    endYear,
    label,
    bold,
    required,
    error,
    onChange,
    value,
    placeholder = 'select date',
  } = props
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false)

  const onOpenDatePicker = () => {
    setIsOpenDatePicker(true)
  }

  const onCloseDatePicker = () => {
    setIsOpenDatePicker(false)
  }

  const onChangeFunction = (date: Date) => {
    onChange(date)
    setTimeout(() => onCloseDatePicker(), 100)
  }

  const displayValue = useMemo(() => {
    if (value) {
      const dateTimestamp = getDateTimestamp(value)
      return getFullDate(dateTimestamp)
    }
    return ""
  }, [value])

  return (
    <>   
      <View className="flex flex-col">
        <Popover
          isOpen={isOpenDatePicker}
          positions={['bottom', 'top']}
          onClickOutside={onCloseDatePicker}
          content={({ position, childRect, popoverRect }) => (
            <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
              position={position}
              childRect={childRect}
              popoverRect={popoverRect}
              arrowColor="#74b9ff"
              arrowSize={12}
              className='popover-arrow-container'
              arrowClassName='popover-arrow'
            >
              <View className="p-1 bg-[#74b9ff] rounded-sm">
                <Calendar
                  onChange={onChangeFunction}
                  locale={locales['th']}
                  date={value || new Date()}
                  // TODO: will change 2 component below
                  // dayContentRenderer={}
                  // navigatorRenderer={}
                />
              </View>
            </ArrowContainer>
          )}
        >
          <TouchableOpacity
            activeOpacity={ACTIVE_OPACITY}
            onPress={onOpenDatePicker}
          >
            <Input
              disabledInput
              label={label}
              bold={bold}
              required={required}
              value={displayValue}
              error={error}
              onChangeEffect={R.T}
              placeholder={placeholder}
              RightIcon={<Icon.CaretDown color={theme.colors.info} size={26} />}
            />
          </TouchableOpacity>
        </Popover>
      </View>
    </>
  )
}

export default DatePicker
