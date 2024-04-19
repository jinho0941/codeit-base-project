import { IconType } from 'react-icons'

type Props = {
  type?: string
  value: string
  placeholder?: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  disabled?: boolean
  size?: 'sm' | 'lg'
  rounded?: 'lg' | 'xl' | 'full'
  icon?: IconType
}

export const Input = ({
  type = 'text',
  value,
  placeholder,
  onChange,
  disabled,
  size,
  rounded,
  icon: Icon,
}: Props) => {
  return (
    <div className='relative w-full'>
      {Icon && (
        <Icon className='h-6 w-6 absolute top-1/2 -translate-y-1/2 left-3 text-gray-600' />
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-4 py-2 outline-none border border-gray-600 text-gray-600 disabled:cursor-not-allowed disabled:bg-slate-200
        ${Icon && 'pl-10'}
        ${size === 'sm' && 'px-2 py-1'}
        ${size === 'lg' && 'px-6 py-4'}
        ${rounded === 'lg' && 'rounded-lg'}
        ${rounded === 'xl' && 'rounded-xl'}
        ${rounded === 'full' && 'rounded-full'}
        `}
      />
    </div>
  )
}
