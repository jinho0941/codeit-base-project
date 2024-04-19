import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const usePagination = (count: number, page: number) => {
  const [currentPage, setCurrentPage] = useState(page)
  const navigate = useNavigate()

  const totalPages = Math.ceil(count / 6)
  const maxVisiblePages = 5

  const goToPrevPage = () => {
    const page = Math.max(currentPage - maxVisiblePages, 1)
    setCurrentPage(page)
    navigate(`/list/${page}`)
  }

  const goToNextPage = () => {
    const page = Math.min(currentPage + maxVisiblePages, totalPages)
    setCurrentPage(page)
    navigate(`/list/${page}`)
  }

  const goToPage = (page: number) => {
    setCurrentPage(page)
    navigate(`/list/${page}`)
  }

  const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

  return {
    startPage,
    endPage,
    currentPage,
    totalPages,
    goToPrevPage,
    goToNextPage,
    goToPage,
  }
}

export default usePagination
