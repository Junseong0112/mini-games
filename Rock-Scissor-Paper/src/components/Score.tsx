import { ScoreArticle, ScoreBox } from 'styles/Global'

function Score({ score, otherScore }) {
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
