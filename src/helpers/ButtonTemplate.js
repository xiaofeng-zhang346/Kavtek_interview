
import './ButtonTemplate.scss'
const ButtonTemplate = ({fn, text}) => {
    const handleClick = (e) => {
        if (fn) {
          fn(e);
        }
    }
    return (
        <button onClick={handleClick} className='btnTemplate'>
            {text}
        </button>
    )
}
export default ButtonTemplate