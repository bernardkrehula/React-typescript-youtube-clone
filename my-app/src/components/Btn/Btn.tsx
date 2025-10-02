import './Btn.css'

type BtnType = {
    onClick: () => void;
    variation: string;
    children: string;
}

const Btn = ({onClick, variation, children}: BtnType) => {

    return(
        <button onClick={onClick} className={`btn ${variation}`}>{children}</button>
    )

}
export default Btn;