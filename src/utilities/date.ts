import day from 'dayjs'
import { isEmpty } from '@/utilities/validate'
import localeData from 'dayjs/plugin/localeData'
import customParseFormat from 'dayjs/plugin/customParseFormat'

export const IS_THAI_DATE = true

IS_THAI_DATE && require('dayjs/locale/th')
day.extend(localeData)
day.extend(customParseFormat)

const d = (dateTimestamp?: number | Date | string, format?: string) => {
  if (IS_THAI_DATE) return day(dateTimestamp, format).locale('th')
  return day(dateTimestamp, format)
}

export const _day = d

export const getDateTimestamp = (date?: Date | number) => {
  return d(date).valueOf()
}

export const getThaiYear = (dateTimestamp?: number) => {
  return (+d(dateTimestamp).format('YYYY')) + (IS_THAI_DATE ? 543 : 0)
}

export const getThaiMonth = (dateTimestamp?: number) => {
  return d(dateTimestamp).format('MMM')
}

export const getThaiDay = (dateTimestamp?: number) => {
  return d(dateTimestamp).format('D')
}

export const getFullDate = (dateTimestamp: number, emptyText?: string) => {
  if (!isNaN(dateTimestamp)) {
    const thaiYear = getThaiYear(dateTimestamp)
    return `${d(dateTimestamp).format('D MMMM')} ${thaiYear}`
  } else {
    return emptyText || '-'
  }
}

export const getAge = (dateTimestamp: number) => {
  return d().diff(d(dateTimestamp), 'years')
}

export const getDateFromDateTimestamp = (dateTimestamp: number) => {
  if (isEmpty(dateTimestamp) || dateTimestamp === -999) {
    return undefined
  }
  return d(dateTimestamp).toDate()
}

export const getStartDayDateTimestamp = (dateTimestamp?: number) => d(dateTimestamp).startOf('day').valueOf()

export const getEndDayDateTimestamp = (dateTimestamp?: number) => d(dateTimestamp).endOf('day').valueOf()

export const getYearList = () => {
  const currentYear = getThaiYear()
  let years: number[] = []
  for (let i = currentYear - 100; i < currentYear + 100; i++) {
    years.push(i)
  }
  return years
}

export const getDayList = () => ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']

export const getMonthList = () => d().localeData().monthsShort()

export const getCurrentYear = () => +d().year() + (IS_THAI_DATE ? 543 : 0)

export const isValidDate = (d: string, m: string, y: string) => {
  const str = `${y}-${m}-${d}`
  const isValid = day(str, 'YYYY-M-D', true).isValid()
  return isValid
}
