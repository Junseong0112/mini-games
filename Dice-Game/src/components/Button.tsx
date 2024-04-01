import React from 'react'
import '../styles/Button.css'

interface Props {
  children: React.ReactNode
  onClick: () => void
  color: string
  className: string
  disableClick?: boolean
}

function Button({
  children,
  onClick,
  color = 'orange',
  className = '',
  disableClick,
}: Props) {
  const classNames = `Button ${color} ${className}`
  return (
    <button disabled={disableClick} className={classNames} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
