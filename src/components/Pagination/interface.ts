export interface IPaginationProps {
  current: number
  total: number
  onPageChange: (pageNo: number) => void
}
