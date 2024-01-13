
import "./styles/Header.css";


function Header({ winner, imgUrl, descript }) {
  return (
    <header>
      <h1>{winner}</h1>
      <p>규칙 : {descript}</p>
      <img src={imgUrl} alt="logo" />
      <h2>주사위 게임</h2>
    </header>
  );
}

export default Header;
