import './SingleInput.css'

type InputTypes = {
    placeholder: string;
    variation: string;
    onChange: () => void;
}

const SingleInput = ({variation, placeholder, onChange}: InputTypes) =>   {
    return(
        <input className={`basicintput ${variation}`} placeholder={placeholder} onChange={onChange}></input>
    )
}

export default SingleInput;