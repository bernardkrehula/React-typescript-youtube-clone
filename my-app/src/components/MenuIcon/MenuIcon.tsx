import parse from "html-react-parser";
import { Link } from "react-router";
import './MenuIcon.css'

type MenuIcon = {
    linkData: LinkDataType;
    onClick?: (value: string) => void;
    activeLink: boolean;
}
type LinkDataType = {
    title: string;
    path: string;
    icon: string;
}

const MenuIcon = ({linkData, onClick, activeLink}: MenuIcon) => {
    const { title, path, icon } = linkData;

    const handleOnClick = () => {
        //Send route for api call
        if(onClick) onClick(title);
    }
   

    return(
        <Link to={path} onClick={handleOnClick} style={{backgroundColor: activeLink ? '#252525' : ''}}>
            <div className='single-category'>
                 {parse(icon)}
                <h2>{title}</h2>
            </div>
        </Link>
    )
}

export default MenuIcon;