import { FaArrowRight } from 'react-icons/fa'

export const MobileHeader = () => {
  return (
    <div className='flex sm:hidden justify-end'>
      <button className='border border-amber-900 bg-amber-700/10 text-amber-900 px-3 py-2 flex items-center rounded-lg mt-10'>
        <span>질문하로 가기</span>
        <FaArrowRight className='inline ml-2' />
      </button>
    </div>
  )
}
