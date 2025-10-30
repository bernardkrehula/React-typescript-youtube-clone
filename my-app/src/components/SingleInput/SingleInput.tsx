import './SingleInput.css'

type InputTypes = {
    placeholder: string;
    variation: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SingleInput = ({variation, placeholder, onChange, onKeyDown}: InputTypes) =>   {
    return(
        <input className={`basicintput ${variation}`} placeholder={placeholder} onChange={onChange} onKeyDown={onKeyDown}></input>
    )
}

export default SingleInput;