import './Menu.css'
import { connectionContext } from '../../useContext/ConnectionProvider';
import MenuData from '../../data/MenuData';
import MenuIcon from '../../components/MenuIcon/MenuIcon';
import { useEffect, useState } from 'react';

type MenuTypes = {
    setValue: (value: string) => void;
}

const Menu = ({setValue}: MenuTypes) => {
    const { loaded, loadingAnimation } = connectionContext();
    const [ activeLink, setActiveLink ] = useState<string>('Homepage');

    const handleOnClick = (value: string) => {
        loadingAnimation();
        setValue(value);
        setActiveLink(value);
    }
    //Load homepage videos on after first loading
    useEffect(() => {
        handleOnClick(activeLink);
    },[]) 

    //Render links
    return(
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