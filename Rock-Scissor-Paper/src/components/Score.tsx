import React from 'react'
import { ScoreArticle, ScoreBox } from 'styles/Global'

interface Props {
  score: number
  otherScore: number
}

function Score({ score, otherScore }: Props) {
  return (
    <ScoreArticle>
      <ScoreBox>
        <h2>{score}</h2>
        <span>나</span>
      </ScoreBox>
      <p>:</p>
      <ScoreBox>
        <h2>{otherScore}</h2>
        <span>상대</span>
      </ScoreBox>
    </ScoreArticle>
  )
}

export default Score
