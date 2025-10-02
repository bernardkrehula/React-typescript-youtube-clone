import './SingleInput.css'

type InputTypes = {
    placeholder: string;
    variation: string
}

const SingleInput = ({variation, placeholder}: InputTypes) =>   {
    return(
        <input className={`basicintput ${variation}`} placeholder={placeholder}></input>
    )
}

export default SingleInput;