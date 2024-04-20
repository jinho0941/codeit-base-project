type Props = {
  onDelete: () => void
  onModifyOpen: () => void
}

export const AnswerActionMenu = ({ onDelete, onModifyOpen }: Props) => {
  return (
    <div className='absolute top-7 left-4'>
      <div className='flex flex-col items-center w-[100px] bg-white border rounded-xl shadow-lg'>
        <button
          onClick={onModifyOpen}
          className='py-2 w-full rounded-t-xl hover:bg-slate-200 transition-all'
        >
          수정하기
        </button>
        <div className='border-t w-full' />
        <button
          onClick={onDelete}
          className='py-2 w-full rounded-b-xl hover:bg-slate-200 transition-all'
        >
          삭제하기
        </button>
      </div>
    </div>
  )
}
