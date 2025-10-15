import parse from "html-react-parser";
import { Link } from "react-router";
import './MenuIcon.css'

type MenuIcon = {
    linkData: LinkDataType;
    onClick?: () => void;
}
type LinkDataType = {
    title: string;
    path: string;
    icon: string;
}

const MenuIcon = ({linkData, onClick}: MenuIcon) => {
    const { title, path, icon } = linkData;

    return(
        <Link to={path} onClick={onClick}>
            <div className='single-category'>
                 {parse(icon)}
                <h2>{title}</h2>
            </div>
        </Link>
    )
}

export default MenuIcon;