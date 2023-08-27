export const getPaginationData = (data: any[], recordPerPage: number, currentPage: number) => {
  return data.slice((currentPage - 1) * recordPerPage, currentPage * recordPerPage)
}
