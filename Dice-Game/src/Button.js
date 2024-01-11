import './styles/Button.css'

function Button ( { children , onClick , color = 'orange', className = '' , disableClick} ){
  const classNames = `Button ${color} ${className}`;
  return (
    <button disabled={disableClick} className={classNames} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;