import styled from "styled-components"

const ScoreAtricle = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  >p{
    margin: 0 .75rem;
    color: #fff;
    font-size: 64px;
  }
`
const ScoreBox = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  background-color: #f97f7f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .625rem;
  border-radius: 20px;
  box-shadow: inset 0px -2px 5px 1px #9c4e4e, 0px 2px 5px #944e4e;

  >h2{
    font-size: 2rem;
    font-weight: 800;
  }
`

function Score ({ score, otherScore }) {
  return (
    <ScoreAtricle>
      <ScoreBox>
        <h2>{score}</h2>
        <span>나</span>
      </ScoreBox>
      <p>:</p>
      <ScoreBox>
        <h2>{otherScore}</h2>
        <span>상대</span>
      </ScoreBox>
    </ScoreAtricle>
  )
}

export default Score