import React from 'react'
import '../styles/Header.css'

interface Props {
  winner: string
  imgUrl: string
  description: string
}

function Header({ winner, imgUrl, description }: Props) {
  return (
    <header>
      <h1>{winner}</h1>
      <p>규칙 : {description}</p>
      <img src={imgUrl} alt="logo" />
      <h2>주사위 게임</h2>
    </header>
  )
}

export default Header
