export type TDate = {
  day: string
  month: string
  year: string
}

export interface IDatePickerProps {
  startYear: number
  endYear: number
  label?: string
  bold?: boolean
  required?: boolean
  error?: string
  onChange: (props: Date) => void
  value: Date | undefined
  placeholder?: string
  selectText?: string
  cancelText?: string
}
