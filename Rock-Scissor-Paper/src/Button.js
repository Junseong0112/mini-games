import Reset from './assets/ic-reset.svg'

function Button ({ onClick }) {
  return (
    <button onClick={onClick}><img src={Reset} alt='Rest' /></button>
  )
};

export default Button;