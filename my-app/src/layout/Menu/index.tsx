import './Menu.css'
import { connectionContext } from '../../useContext/ConnectionProvider';
import MenuData from '../../data/MenuData';
import MenuIcon from '../../components/MenuIcon/MenuIcon';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

type MenuTypes = {
    setValue: (value: string) => void;
}

const Menu = ({setValue}: MenuTypes) => {
    const { loaded, loadingAnimation, hideMenu, isHidden } = connectionContext();
    const [ activeLink, setActiveLink ] = useState<string>('Homepage');
    const navigate = useNavigate();

    const handleOnClick = (value: string) => {
        loadingAnimation();
        setValue(value);
        setActiveLink(value);
        hideMenu(false);
    }
    //Load homepage videos on after first loading
    useEffect(() => {
        handleOnClick(activeLink);
        navigate('/Homepage');
    /*         hideMenu(true)  */
    },[]) 

    //Render links
    if(!isHidden) return(
        <>
            <div className='loading-line' style={{width: loaded ? '100%' : '0'}}></div>
            <div className='menu-parent'>
                <div className='menu'>
                {MenuData.map((linkData, index) => {
                    const { title } = linkData;

                    return(
                        <MenuIcon key={index} linkData={linkData} onClick={handleOnClick} activeLink={activeLink === title ? true : false}></MenuIcon>
                     )
                })}
                </div>
            </div>
        </>
    )

}

export default Menu;