import './Btn.css'



const Btn = ({onClick, variation, children}) => {

    return(
        <button onClick={onClick} className={`btn ${variation}`}>{children}</button>
    )

}
export default Btn;