import './SingleInput.css'

type InputTypes = {
    placeholder: string;
}

const SingleInput = ({placeholder}: InputTypes) =>   {
    return(
        <input className='basicintput ' placeholder={placeholder}></input>
    )
}

export default SingleInput;