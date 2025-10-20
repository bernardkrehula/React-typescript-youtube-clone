import parse from "html-react-parser";
import { Link } from "react-router";
import './MenuIcon.css'
import SearchMenu from "../SearchMenu/SearchMenu";

type MenuIcon = {
    linkData: LinkDataType;
    onClick?: (value: string) => void;
}
type LinkDataType = {
    title: string;
    path: string;
    icon: string;
}

const MenuIcon = ({linkData, onClick}: MenuIcon) => {
    const { title, path, icon } = linkData;

    const handleOnClick = () => {
        if(onClick) onClick(title);
    }
   

    return(
        <Link to={path} onClick={handleOnClick}>
            <div className='single-category'>
                 {parse(icon)}
                <h2>{title}</h2>
            </div>
        </Link>
    )
}

export default MenuIcon;