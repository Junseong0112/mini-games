import React from 'react'
import HandIcon from './HandIcon'
import '../styles/HandButton.css'

interface Props {
  value: string
  onClick: (value: string) => void
}

function HandButton({ value, onClick }: Props) {
  const handleClick = () => onClick(value)

  return (
    <button className="HandButton" onClick={handleClick}>
      <HandIcon className="HandButton-icon" value={value} />
    </button>
  )
}

export default HandButton
