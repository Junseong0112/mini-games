
import "./styles/Header.css";


function Header({ winner, imgUrl }) {
  return (
    <header>
      <h1>{winner}</h1>
      <p>50점을 먼저 달성해보세요!</p>
      <img src={imgUrl} alt="logo" />
      <h2>주사위 게임</h2>
    </header>
  );
}

export default Header;
