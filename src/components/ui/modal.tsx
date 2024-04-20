type Props = {
  children: React.ReactNode
  onClose: () => void
}

export const Modal = ({ children, onClose }: Props) => {
  return (
    <div onClick={onClose} className='fixed inset-0 bg-black/40 z-50'>
      {children}
    </div>
  )
}
