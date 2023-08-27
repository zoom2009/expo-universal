import ResponsivePagination from 'react-responsive-pagination'
import { IPaginationProps } from './interface'
import 'react-responsive-pagination/themes/classic.css'

export const Pagination = (props: IPaginationProps) => {
  const {
    current,
    total,
    onPageChange,
  } = props

  return (
    <ResponsivePagination
      current={current}
      total={total}
      onPageChange={onPageChange}
    />
  )
}
