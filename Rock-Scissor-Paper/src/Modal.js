import styled from "styled-components";

const ModalOverlay = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`

const ModalDiv = styled.div`
  background-color: #fff;
  padding: 1.25rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 43.75rem;
  min-height: 31.25rem;
  color: #222;
  display: flex;
  flex-direction: column;
  
  >h2{
    font-size: 2.625rem;
    border-bottom: 1px solid #444;
    margin: 0 0 1.5625rem;
  }
  >ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  >ul > li{
    font-size: 1.25rem;
    
  }
  >button{
    width: 9.375rem;
    border: 0;
    border-radius: 20px;
    padding: .9375rem 0;
    background-color: #CF55ED;
    margin: auto auto 0;
    color: #fff;
    font-size: 1.125rem;
    transition: .3s;
    cursor: pointer;

    &:hover{
      background-color: #FF69B4;
    }
  }
`

function Modal ({ closeModal }) {
  return(
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

export default Modal;