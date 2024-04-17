import { useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'

type Props = {
  count: number
  page: number
}

export const Footer = ({ count, page }: Props) => {
  const totalPages = Math.ceil(count / 6)
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(page)
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

  const generatePageNumbers = () => {
    const pages = []
    const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={currentPage === i ? 'font-bold' : ''}
        >
          {i}
        </button>,
      )
    }

    return pages
  }

  return (
    <div className='flex justify-center'>
      <button
        onClick={goToPrevPage}
        disabled={currentPage === 1}
        className='disabled:text-gray-200'
      >
        <BiChevronLeft className='h-6 w-6' />
      </button>
      <div className='flex gap-x-5 mx-10'>{generatePageNumbers()}</div>
      <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        className='disabled:text-gray-200'
      >
        <BiChevronRight className='h-6 w-6' />
      </button>
    </div>
  )
}
