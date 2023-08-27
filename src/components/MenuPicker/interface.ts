export type TMenu = {
  text: string
  color?: string
  Icon?: any
}

export interface IMenuPickerProps {
  label: string
  visible: boolean
  menus: TMenu[]
  onClose: () => void
  cencelText?: string
  onSelect: ({ text, index }: { text: string, index: number }) => void
}
