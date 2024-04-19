import { FaArrowRight } from 'react-icons/fa'
import { Logo } from '../../../components/logo'
import { Button } from '../../../components/ui/button'

type Props = {
  onLinkClick: () => void
}

export const Header = ({ onLinkClick }: Props) => {
  return (
    <header className='flex sm:flex-row flex-col gap-y-5 justify-between items-center pt-5'>
      <div className='w-[200px]'>
        <Logo />
      </div>
      <Button onClick={onLinkClick} width={200} outline rounded='lg'>
        답변하로 가기 <FaArrowRight className='ml-2' />
      </Button>
    </header>
  )
}
