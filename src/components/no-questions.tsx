import { BsChatText } from 'react-icons/bs'
import { PiFloppyDiskThin } from 'react-icons/pi'

export const NoQuestions = () => {
  return (
    <div className='flex flex-col text-2xl text-amber-800'>
      <div className='flex justify-center'>
        <BsChatText className='h-6 w-6' />
        <span className='ml-3'>아직 질문이 없습니다.</span>
      </div>

      <div className='h-[333px] flex items-center justify-center '>
        <PiFloppyDiskThin className='h-40 w-40 text-amber-900/30' />
      </div>
    </div>
  )
}
