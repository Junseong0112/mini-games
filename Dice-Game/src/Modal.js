import './styles/Modal.css'

function Modal ({closeModal, onChange}) {
  return (
    <article className='Modal'>
      <div className='Modal-box'>
        <h3>옵션을 선택해주세요!</h3>
        <ul>
          <li>
            <label>50점 이상 승리</label>
            <input onChange={() => onChange(1)} type='radio' value={1} />
          </li>
          <li>
            <label>1부터 6까지 다모으면 승리</label>
            <input onChange={() => onChange(2)} type='radio' value={2} />
          </li>
        </ul>
      <button onClick={closeModal}>확인</button>
      </div>
    </article>
  )
}

export default Modal; 