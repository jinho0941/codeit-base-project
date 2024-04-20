type Props = {
  children: React.ReactNode
  outline?: boolean
  rounded?: 'lg' | 'xl' | 'full'
  size?: 'sm' | 'lg'
  disabled?: boolean
  width?: number
  onClick?: () => void
}

export const Button = ({
  children,
  outline = false,
  rounded,
  size,
  disabled,
  width,
  onClick,
}: Props) => {
  let dynamicStyle = {}

  if (rounded === 'lg') {
    dynamicStyle = { borderRadius: '0.375rem' }
  } else if (rounded === 'xl') {
    dynamicStyle = { borderRadius: '0.5rem' }
  } else if (rounded === 'full') {
    dynamicStyle = { borderRadius: '9999px' }
  }

  if (size === 'sm') {
    dynamicStyle = { ...dynamicStyle, padding: '0.25rem 0.5rem' }
  } else if (size === 'lg') {
    dynamicStyle = { ...dynamicStyle, padding: '0.75rem 1.25rem' }
  }

  return (
    <button
      style={{
        width: width ? `${width}px` : '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem 1rem',
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...(outline
          ? {
              border: '1px solid #fbbf24',
              backgroundColor: '#ffffff',
              color: '#fbbf24',
              ':hover': {
                backgroundColor: '#d1d5db',
              },
              ':disabled': {
                backgroundColor: '#e5e7eb',
              },
            }
          : {
              backgroundColor: '#fbbf24',
              color: '#ffffff',
              ':hover': {
                backgroundColor: '#f59e0b',
              },
              ':disabled': {
                backgroundColor: 'rgba(251, 191, 24, 0.4)',
              },
            }),
        ...dynamicStyle,
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
