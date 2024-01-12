import './styles/Modal.css'

function Modal () {
  return (
    <article>
      <div>
        <h3>옵션을 선택해주세요!</h3>
        <ul>
          <li>
            <label>50점 이상 승리</label>
            <input type='radio' value={1} />
          </li>
          <li>
            <label>1부터 6까지 다모으면 승리</label>
            <input type='radio' value={2} />
          </li>
        </ul>
      </div>
    </article>
  )
}

export default Modal; 