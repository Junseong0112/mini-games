
function Score ({ score, otherScore }) {
  return (
    <article>
      <div>
        <h2>{score}</h2>
        <span>나</span>
      </div>
      <div>
        <h2>{otherScore}</h2>
        <span>상대</span>
      </div>
    </article>
  )
}

export default Score