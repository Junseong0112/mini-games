const baseButtonstyle = {
  padding : '14px 27px',
  borderRadius : '30px',
  outline : 'none',
}
const redButton = {
  ...baseButtonstyle,
  backgroundColor : 'red',
}

const blueButton = {
  ...baseButtonstyle,
  backgroundColor : 'blue',
}

function Button ( { children , onClick , color} ){
  const style = color === 'red' ? redButton : blueButton
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;