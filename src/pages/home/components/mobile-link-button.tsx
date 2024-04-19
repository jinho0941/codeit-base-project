import { FaArrowRight } from 'react-icons/fa'
import { Button } from '../../../components/ui/button'
import { Link } from 'react-router-dom'

export const MobileLinkButton = () => {
  return (
    <div className='mt-10 sm:hidden align-middle'>
      <Link to='/list'>
        <Button outline rounded='lg' size='sm'>
          질문하러 가기 <FaArrowRight className='ml-2' />
        </Button>
      </Link>
    </div>
  )
}
