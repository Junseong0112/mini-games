import Logo from "./assets/lol.svg";
import './styles/Header.css'

function Header() {
  return (
    <header>
      <img src={Logo} alt="logo" />
      <h1>주사위 게임</h1>
    </header>
  );
}

export default Header;
