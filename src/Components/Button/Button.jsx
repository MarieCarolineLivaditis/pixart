import './Button.scss';

function Button({ onClick, value, type }) {
    return(
        <button type={type} className="Reset-button" onClick={onClick}>
            {value}
        </button>
    )
}

export default Button;