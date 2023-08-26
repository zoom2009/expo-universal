import { useMemo, useRef, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import * as R from 'ramda'
import Label from '@/components/Label'
import ScrollPicker from 'react-native-wheel-scrollview-picker'
import { IS_THAI_DATE, _day, getDateTimestamp, getDayList, getFullDate, getMonthList, isValidDate } from '@/utilities/date'
import theme from '@/utilities/theme'
import Input from '@/components/Input'
import { Icon } from '@/components/Icon'
import Button, { ACTIVE_OPACITY } from '@/components/Button'
import BottomSheet from '@gorhom/bottom-sheet'
import { IDatePickerProps } from './interface'
import { getInsets } from '@/utilities/getInsets'

const renderItem = (data: string, index: number, isSelected: boolean) => (
  <Label bold={isSelected} color={!isSelected ? '#aaa' : 'black'}>{data}</Label>
)

const pickerProps = {
  wrapperHeight: 180,
  itemHeight: 60,
  highlightColor: 'transparent',
  highlightBorderWidth: 0,
  wrapperBackground: 'white',
  renderItem,
}

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
    selectText = 'Select',
    cancelText = 'Cancel',
  } = props

  const insets = getInsets()
  const [day, setDay] = useState(_day().date() - 1)
  const [month, setMonth] = useState(_day().month())
  const [year, setYear] = useState(Math.floor((endYear - startYear) / 2))

  const bottomSheetRef = useRef<BottomSheet>(null)

  const onChangeDay = (day: string, index: number) => {
    setDay(index)
  }

  const onChangeMonth = (month: string, index: number) => {
    setMonth(index)
  }

  const onChangeYear = (year: string, index: number) => {
    setYear(index)
  }

  const dayList = useMemo(() => {
    return getDayList()
  }, [])

  const monthList = useMemo(() => {
    return getMonthList()
  }, [])

  const yearList = useMemo(() => {
    const years = []
    for (let i = startYear; i <= endYear; i++) {
      years.push(`${i}`)
    }
    return years
  }, [])

  const onOpenDatePicker = () => {
    bottomSheetRef.current?.expand()
  }

  const onCancel = () => {
    bottomSheetRef.current?.close()
  }

  const getDate = () => {
    return {
      day: dayList[day],
      month: `${month + 1}`,
      year: `${+yearList[year] - (IS_THAI_DATE ? 543 : 0)}`,
    }
  }

  const onSelect = () => {
    const d = getDate()
    const date = _day(`${d.year}-${d.month}-${d.day}`, 'YYYY-M-D').toDate()
    onChange(date)
    bottomSheetRef.current?.close()
  }

  const isCanSelect = useMemo(() => {
    const { day, month, year } = getDate()
    return isValidDate(day, month, year)
  }, [day, month, year])

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
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={[300 + insets.bottom]}
        enablePanDownToClose
        backgroundStyle={{ backgroundColor: 'white' }}
      >
        <View className="flex flex-1 flex-row">
          <View className="flex flex-1">
            <ScrollPicker
              dataSource={dayList}
              selectedIndex={day}
              onValueChange={onChangeDay}
              {...pickerProps}
            />
          </View>
          <View className="flex flex-1">
            <ScrollPicker
              dataSource={monthList}
              selectedIndex={month}
              onValueChange={onChangeMonth}
              {...pickerProps}
            />
          </View>
          <View className="flex flex-1">
            <ScrollPicker
              dataSource={yearList}
              selectedIndex={year}
              onValueChange={onChangeYear}
              {...pickerProps}
            />
          </View>
        </View>
        <View>
          <View className="flex flex-1" />
          <View className="h-[80px] border-t-[1px] border-t-[#e9e9e9] mt-[10px] pt-[10px] flex flex-row justify-between px-6">
            <Button
              bold
              type="primary-outline"
              text={cancelText}
              onPress={onCancel}
              containerClassName="rounded-md min-w-[120px]"
            />
            <Button
              bold
              disabled={!isCanSelect}
              text={selectText}
              type="primary"
              onPress={onSelect}
              containerClassName="rounded-md min-w-[120px]"
            />
          </View>
        </View>
        <View style={{ height: insets.bottom }} />
      </BottomSheet>
    </>
  )
}

export default DatePicker
