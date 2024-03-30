import React from 'react'
import rockImg from './assets/rock.svg'
import scissorImg from './assets/scissor.svg'
import paperImg from './assets/paper.svg'

interface Props {
  value: string
  className: string
}

const RANDOMIMGS: {
  [key: string]: string
} = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
}

function HandIcon({ value, className = '' }: Props) {
  const src = RANDOMIMGS[value]

  return <img className={className} src={src} alt={value} />
}

export default HandIcon
