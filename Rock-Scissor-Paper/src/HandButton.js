import HandIcon from "./HandIcon";
import Purple from './assets/purple.svg'

const baseButtonStyle = {
  width : '166px',
  height : '166px',
  border : 'none',
  outline : 'none',
  textAlign : 'center',
  cursor : 'pointer',
  backgroundColor : 'transparent',
  backgroundRepeat : 'no-repeat',
  backgroundSize : 'contain',
  backgroundPosition : 'center',
  backgroundImage: `url(${Purple})`,
}

function HandButton ({ value, onClick }) {
  const handleClick = () => onClick(value);

  return (
    <button style={baseButtonStyle} onClick={handleClick}>
      <HandIcon value={value} />
    </button>
  )
}

export default HandButton