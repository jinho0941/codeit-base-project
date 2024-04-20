import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='hidden sm:flex justify-end'>
      <Link
        to='/list'
        className='border border-amber-900 bg-amber-700/10 text-amber-900 px-4 py-3 flex items-center rounded-lg mr-20 mt-10 md:mr-40'
      >
        <span>질문하로 가기</span>
        <FaArrowRight className='inline ml-2' />
      </Link>
    </div>
  )
}
