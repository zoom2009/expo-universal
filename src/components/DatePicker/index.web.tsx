import React, { useMemo, useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import * as R from 'ramda'
import { ACTIVE_OPACITY } from '@/components/Button'
import Input from '@/components/Input'
import { Icon } from '@/components/Icon'
import theme from '@/utilities/theme'
import { Calendar, CalendarProps } from 'react-date-range'
import { Popover, ArrowContainer } from 'react-tiny-popover'
// @ts-ignore
import * as locales from 'react-date-range/dist/locale'
import { IS_THAI_DATE, _day, getDateTimestamp, getFullDate, getFullMonthList, getYearList } from '@/utilities/date'
import { IDatePickerProps } from './interface'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const monthList = getFullMonthList()
const yearList = getYearList()
const selectStyle = { outline: 'none', padding: '6px 4px', borderRadius: 4, width: 100, borderColor: '#999' }

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

  const navigatorRenderer = (
    currFocusedDate: Date,
    changeShownDate: (value: string | number | Date, mode?: "set" | "setYear" | "setMonth" | "monthOffset" | undefined) => void,
    props: CalendarProps,
  ) => {
    const onBack = () => {
      const d = _day(currFocusedDate)
      changeShownDate(d.month() - 1, 'setMonth')
    }

    const onNext = () => {
      const d = _day(currFocusedDate)
      changeShownDate(d.month() + 1, 'setMonth')
    }

    const onSelectMonth = (e: any) => {
      const monthIndex = e.target.value - 1
      changeShownDate(+monthIndex, 'setMonth')
    }

    const onSelectYear = (e: any) => {
      const year = (+e.target.value) - (IS_THAI_DATE ? 543 : 0)
      changeShownDate(year, 'setYear')
    }

    return (
      <View className="flex flex-row justify-between items-center px-4 pt-4 pb-2">
        <TouchableOpacity
          onPress={onBack}
          activeOpacity={ACTIVE_OPACITY}
          className="flex w-[26px] h-[26px] justify-center items-center rounded-md bg-disabled"
        >
          <Icon.CaretLeft weight="fill" size={16} color="black" />
        </TouchableOpacity>
        <View className="flex flex-row justify-center items-center z-10">
          <select
            style={selectStyle}
            onChange={onSelectMonth}
            defaultValue={`${_day(currFocusedDate).month() + 1}`}
          >
            {monthList.map((m, index) => (
              <option key={m} value={`${index + 1}`}>{m}</option>
            ))}
          </select>
          <View className="w-4" />
          <select
            style={selectStyle}
            onChange={onSelectYear}
            defaultValue={`${_day(currFocusedDate).year() + (IS_THAI_DATE ? 543 : 0)}`}
          >
            {yearList.map((y, index) => (
              <option key={`${y}`} value={`${y}`}>{y}</option>
            ))}
          </select>
        </View>
        <TouchableOpacity
          onPress={onNext}
          activeOpacity={ACTIVE_OPACITY}
          className="flex w-[26px] h-[26px] justify-center items-center rounded-md bg-disabled"
        >
          <Icon.CaretRight weight="fill" size={16} color="black" />
        </TouchableOpacity>
      </View>
    )
  }

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
                  locale={IS_THAI_DATE ? locales['th'] : locales['en']}
                  date={value}
                  navigatorRenderer={navigatorRenderer}
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
