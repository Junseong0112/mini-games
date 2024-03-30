import React from 'react'
import Reset from '../assets/ic-reset.svg'

interface Props {
  className: string
  onClick: () => void
}

function Button({ className, onClick }: Props) {
  return (
    <button className={className} onClick={onClick}>
      <img src={Reset} alt="Rest" />
    </button>
  )
}

export default Button
