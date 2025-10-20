import './Menu.css'
import { connectionContext } from '../../useContext/ConnectionProvider';
import MenuData from '../../data/MenuData';
import MenuIcon from '../../components/MenuIcon/MenuIcon';

type MenuTypes = {
    setValue: (value: string) => void;
}

const Menu = ({setValue}: MenuTypes) => {
    const { loaded, loadingAnimation } = connectionContext();

    const handleOnClick = (value: string) => {
        loadingAnimation();
        setValue(value);
    }

    //Render links
    return(
        <>
            <div className='loading-line' style={{width: loaded ? '100%' : '0'}}></div>
            <div className='menu-parent'>
                <div className='menu'>
                {MenuData.map((linkData, index) => {

                    return(
                        <MenuIcon key={index} linkData={linkData} onClick={handleOnClick}></MenuIcon>
                     )
                })}
                </div>
            </div>
         
        </>
    )

}

export default Menu;