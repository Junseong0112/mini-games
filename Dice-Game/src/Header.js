import Logo from "./assets/lol.svg";
import "./styles/Header.css";

function Header({ winner }) {
  return (
    <header>
      <h1>{winner}</h1>
      <img src={Logo} alt="logo" />
      <h2>주사위 게임</h2>
    </header>
  );
}

export default Header;
