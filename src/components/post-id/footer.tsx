type Props = {
  onOpen: () => void
}

export const Footer = ({ onOpen }: Props) => {
  return (
    <footer className='mt-20 mb-10 mr-20 w-full flex justify-end'>
      <button
        onClick={onOpen}
        className='hidden sm:block bg-amber-900 hover:bg-amber-900/70 text-white rounded-full py-3 px-8'
      >
        질문 작성하기
      </button>
      <button
        onClick={onOpen}
        className='block sm:hidden bg-amber-900 hover:bg-amber-900/70 text-white rounded-full py-3 px-4'
      >
        질문 작성
      </button>
    </footer>
  )
}
