import { useState } from 'react'
import { DeleteModal } from './delete-modal'

export const DeleteButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && <DeleteModal onClose={() => setIsOpen(false)} />}
      <button
        onClick={() => setIsOpen(true)}
        className='absolute -top-12 right-0 rounded-full bg-amber-900 text-white py-2 px-5 hover:bg-rose-500 shadow-md'
      >
        삭제하기
      </button>
    </>
  )
}
