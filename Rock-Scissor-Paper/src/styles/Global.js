import styled from 'styled-components'

// Modal
export const ModalOverlay = styled.article`
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

export const ModalDiv = styled.div`
  background-color: #fff;
  padding: 1.25rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 43.75rem;
  min-height: 31.25rem;
  color: #222;
  display: flex;
  flex-direction: column;

  > h2 {
    font-size: 2.625rem;
    border-bottom: 1px solid #444;
    margin: 0 0 1.5625rem;
  }
  > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  > ul > li {
    font-size: 1.25rem;
  }
  > button {
    width: 9.375rem;
    border: 0;
    border-radius: 20px;
    padding: 0.9375rem 0;
    background-color: #cf55ed;
    margin: auto auto 0;
    color: #fff;
    font-size: 1.125rem;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #ff69b4;
    }
  }
`

// Score
export const ScoreArticle = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    margin: 0 0.75rem;
    color: #fff;
    font-size: 64px;
  }
`
export const ScoreBox = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  background-color: #ff69b4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  border-radius: 20px;
  box-shadow: inset 0px -2px 5px 1px #ff66b4, 0px 2px 5px #fd69b4;

  > h2 {
    font-size: 2rem;
    font-weight: 800;
  }
`
