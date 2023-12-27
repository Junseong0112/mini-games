import Reset from './assets/ic-reset.svg'

function Button ({ className, onClick }) {
  return (
    <button className={className} onClick={onClick}><img src={Reset} alt='Rest' /></button>
  )
};

export default Button;