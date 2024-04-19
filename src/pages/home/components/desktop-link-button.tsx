import { FaArrowRight } from 'react-icons/fa'
import { Button } from '../../../components/ui/button'
import { Link } from 'react-router-dom'

export const DesktopLinkButton = () => {
  return (
    <header className='sm:flex hidden justify-end pt-10 xl:mr-20 mr-10'>
      <Link to='/list'>
        <Button width={200} outline rounded='lg'>
          질문하로가기
          <FaArrowRight className='ml-2' />
        </Button>
      </Link>
    </header>
  )
}
