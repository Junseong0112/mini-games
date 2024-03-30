import React from 'react'
import { ModalOverlay, ModalDiv } from 'styles/Global'

interface Props {
  closeModal: () => void
}

function Modal({ closeModal }: Props) {
  return (
    <ModalOverlay>
      <ModalDiv>
        <h2>게임설명</h2>
        <ul>
          <li>1. 50점을 먼저 달성해보세요!</li>
          <li>2. 배점을 수정해서 진행해보세요!</li>
          <li>3. 가볍게 즐겨주시면 감사하겠습니다!</li>
        </ul>
        <button onClick={closeModal}>닫기</button>
      </ModalDiv>
    </ModalOverlay>
  )
}

export default Modal
