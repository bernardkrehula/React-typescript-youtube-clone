import './SingleInput.css'

type InputTypes = {
    placeholder: string;
    variation: string;
    onChange: () => void;
    onKeydown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SingleInput = ({variation, placeholder, onChange, onKeydown}: InputTypes) =>   {
    return(
        <input className={`basicintput ${variation}`} placeholder={placeholder} onChange={onChange} onKeyDown={onKeydown}></input>
    )
}

export default SingleInput;