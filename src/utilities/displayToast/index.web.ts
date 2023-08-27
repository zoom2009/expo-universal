import { toast } from 'react-toast'
import theme from '@/utilities/theme'
import { IDisplayToastProps } from './interface'

export const displayToast = (props: IDisplayToastProps) => {
  const { message, type } = props
  switch (type) {
    case 'info': {
      return toast.info(message, { backgroundColor: theme.colors.info })
    }
    case 'warning': {
      return toast.warn(message, { backgroundColor: theme.colors.warning })
    }
    case 'success': {
      return toast.success(message, { backgroundColor: theme.colors.success })
    }
    case 'error': {
      return toast.error(message, { backgroundColor: theme.colors.danger })
    }
    default: {
      return toast.info(message, { backgroundColor: theme.colors.info })
    }
  }
}
