import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

type Props = {
  startPage: number
  endPage: number
  currentPage: number
  totalPages: number
  goToPrevPage: () => void
  goToNextPage: () => void
  goToPage: (page: number) => void
}

export const Pagination = ({
  startPage,
  endPage,
  currentPage,
  totalPages,
  goToPrevPage,
  goToNextPage,
  goToPage,
}: Props) => {
  const generatePageNumbers = () => {
    const pages = []
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={
            currentPage === i ? 'font-bold text-xl text-indigo-500' : ''
          }
        >
          {i}
        </button>,
      )
    }

    return pages
  }

  return (
    <div className='pt-10 flex justify-center'>
      <button
        onClick={goToPrevPage}
        disabled={currentPage === 1}
        className='disabled:text-gray-200'
      >
        <BiChevronLeft className='h-6 w-6' />
      </button>
      <div className='flex gap-x-5 mx-10 items-center'>
        {generatePageNumbers()}
      </div>
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
