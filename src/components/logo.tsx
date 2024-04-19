import { Link } from 'react-router-dom'

type Props = {
  width?: number
  height?: number
  href?: string
}

export const Logo = ({ href = '/' }: Props) => {
  return (
    <Link to={href} className='sm:w-auto w-[266px]'>
      <img src='/logo.png' alt='logo' />
    </Link>
  )
}
