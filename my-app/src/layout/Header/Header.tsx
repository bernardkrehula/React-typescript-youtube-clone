import './Header.css'
import Btn from '../../components/Btn/Btn'
import SingleInput from '../../components/SingleInput/SingleInput'

const Header = () => {

    return(
        <div className='header'>
            <Btn>
                <svg  xmlns="http://www.w3.org/2000/svg"  strokeWidth="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="show-menu-icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h16" /><path d="M4 12h16" /><path d="M4 4h16" /></svg>
            </Btn>
            <Btn>
                <div className='youtube-btn-content'>
                    <svg  xmlns="http://www.w3.org/2000/svg"  strokeWidth="24"  height="24"  viewBox="0 0 24 24"  fill="#ff0000"  className="youtube-icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" /></svg>
                    <h1>YouTube</h1>
                </div>
            </Btn>
            <div className='search-bar'>
                <SingleInput variation='search-bar-input' placeholder='Search'></SingleInput>
                <Btn variation='search-btn'>
                    <svg  xmlns="http://www.w3.org/2000/svg"  strokeWidth="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#ffffff"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                </Btn>
            </div>
            <img className='logo' src='./images/user-logo.jpg'></img>
        </div>
    )
}

export default Header;