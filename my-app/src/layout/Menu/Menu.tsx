import './Menu.css'
import { connectionContext } from '../../useContext/ConnectionProvider';
import MenuData from '../../data/MenuData';
import MenuIcon from '../../components/MenuIcon/MenuIcon';
const Menu = () => {
    const { isHidden, loaded, loadingAnimation } = connectionContext();

    //Render links
    if(isHidden) return(
        <>
            <div className='loading-line' style={{width: loaded ? '100%' : '0'}}></div>
            <div className='menu-parent'>
                <div className='menu'>
                {MenuData.map((linkData, index) => {

                    return(
                        <MenuIcon key={index} linkData={linkData} onClick={loadingAnimation}></MenuIcon>
                     )
                })}
                </div>
            </div>
         
        </>
    )

}

export default Menu;