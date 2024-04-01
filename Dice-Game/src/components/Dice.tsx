import React from 'react'
import diceOrange01 from '../assets/dice-orange-1.svg'
import diceOrange02 from '../assets/dice-orange-2.svg'
import diceOrange03 from '../assets/dice-orange-3.svg'
import diceOrange04 from '../assets/dice-orange-4.svg'
import diceOrange05 from '../assets/dice-orange-5.svg'
import diceOrange06 from '../assets/dice-orange-6.svg'
import diceGreen01 from '../assets/dice-green-1.svg'
import diceGreen02 from '../assets/dice-green-2.svg'
import diceGreen03 from '../assets/dice-green-3.svg'
import diceGreen04 from '../assets/dice-green-4.svg'
import diceGreen05 from '../assets/dice-green-5.svg'
import diceGreen06 from '../assets/dice-green-6.svg'

interface Dice {
  [key: string]: string[]
}

interface Props {
  color: string
  num: number
}

const DICE_IMAGES: Dice = {
  orange: [
    diceOrange01,
    diceOrange02,
    diceOrange03,
    diceOrange04,
    diceOrange05,
    diceOrange06,
  ],
  green: [
    diceGreen01,
    diceGreen02,
    diceGreen03,
    diceGreen04,
    diceGreen05,
    diceGreen06,
  ],
}

function Dice({ color = 'orange', num = 1 }: Props) {
  const src = DICE_IMAGES[color][num - 1]
  const alt = `${color} ${num}`

  return <img src={src} alt={alt} />
}

export default Dice
