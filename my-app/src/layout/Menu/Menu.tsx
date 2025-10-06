import { useState } from 'react';
import Btn from '../../components/Btn/Btn';
import './Menu.css'
import { Link } from 'react-router';

type MenuTypes = {
    data: object;
}

const Menu = ({data}: MenuTypes) => {
    const [ loaded, setloading ] = useState(false);

    const loadCategory = () => {
        console.log(data)
        setloading(true)
    };

    return(
        <>
            <div className='loading-line' style={{width: loaded ? '100%' : '0'}}></div>
            <div className='menu-parent'>
                <div className='menu'>
                <Link to={'/'} onClick={loadCategory}>
                    <div className='single-category' onClick={loadCategory}>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#ffffff"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="homepage-svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
                        <h2>Homepage</h2>
                    </div>
                </Link>
                <Link to={'/Trending'}>
                    <div className='single-category'>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className='trending-svg'><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 17l6 -6l4 4l8 -8" /><path d="M14 7l7 0l0 7" /></svg>
                        <h2>Trending</h2>
                    </div>
                </Link>
                <Link to={'/Coding'}>
                    <div className='single-category'>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className='coding-svg'><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" /><path d="M7 20h4" /><path d="M9 16v4" /><path d="M20 21l2 -2l-2 -2" /><path d="M17 17l-2 2l2 2" /></svg>
                        <h2>Coding</h2>
                    </div></Link>
                <Link to={'/Javascript'}>
                    <div className='single-category'>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className='javascript-svg'><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M3 15h3v4.5a1.5 1.5 0 0 1 -3 0" /><path d="M9 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" /><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1" /></svg>
                        <h2>Javascript</h2>
                    </div></Link>
                <Link to={'/ReactJS'}>
                    <div className='single-category'>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className='react-js-svg'><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" /></svg>
                        <h2>ReactJS</h2>
                    </div></Link>
                <Link to={'/Music'}>
                    <div className='single-category'>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className='music-svg'><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M9 17v-13h10v13" /><path d="M9 8h10" /></svg>
                        <h2>Music</h2>
                    </div></Link>
                <Link to={'/Education'}>
                    <div className='single-category'>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className='education-svg'><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5" /><path d="M13 16h-7a2 2 0 0 0 -2 2" /><path d="M15 19l3 3l3 -3" /><path d="M18 22v-9" /></svg>
                        <h2>Education</h2>
                    </div></Link>
                <Link to={'/Podcast'}>
                    <div className='single-category'>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="microphone-svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 9a1 1 0 0 1 1 1a8 8 0 0 1 -6.999 7.938l-.001 2.062h3a1 1 0 0 1 0 2h-8a1 1 0 0 1 0 -2h3v-2.062a8 8 0 0 1 -7 -7.938a1 1 0 1 1 2 0a6 6 0 0 0 12 0a1 1 0 0 1 1 -1m-7 -8a4 4 0 0 1 4 4v5a4 4 0 1 1 -8 0v-5a4 4 0 0 1 4 -4" /></svg>
                        <h2>Podcast</h2>
                    </div></Link>
                <Link to={'/Movie'}>
                    <div className='single-category'>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="movie-svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 4l0 16" /><path d="M16 4l0 16" /><path d="M4 8l4 0" /><path d="M4 16l4 0" /><path d="M4 12l16 0" /><path d="M16 8l4 0" /><path d="M16 16l4 0" /></svg>
                        <h2>Movie</h2>
                    </div></Link>
                <Link to={'/Gaming'}>
                    <div className='single-category'>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className='game-svg'><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z" /><path d="M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232" /><path d="M8 9v2" /><path d="M7 10h2" /><path d="M14 10h2" /></svg>
                        <h2>Gaming</h2>
                    </div></Link>
                <Link to={'/Live'}>
                    <div className='single-category'>
                        <img className='live-img' src="/images/live.svg"/>
                        <h2>Live</h2>
                    </div></Link>
                <Link to={'/Sport'}>
                    <div className='single-category'>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className='sport-svg'><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12a8 8 0 0 0 8 4" /><path d="M7.5 13.5a12 12 0 0 0 8.5 6.5" /><path d="M12 12a8 8 0 0 0 -7.464 4.928" /><path d="M12.951 7.353a12 12 0 0 0 -9.88 4.111" /><path d="M12 12a8 8 0 0 0 -.536 -8.928" /><path d="M15.549 15.147a12 12 0 0 0 1.38 -10.611" /></svg>
                        <h2>Sport</h2>
                    </div></Link>
                <Link to={'/Fashion'}>
                    <div className='single-category'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='fashion-svg' width="200" height="200" viewBox="0 0 32 32"><g><path d="M16.01 4.62a.51.51 0 1 0 0-1.02a.51.51 0 0 0 0 1.02Z"/><path d="M15.322 29.067a1 1 0 0 0-.587-1.082l1.384-9.697l1.775 9.652a1 1 0 0 0-.716 1.127l.17 1.017a1 1 0 0 0 1.076.832l9.166-.833a1 1 0 0 0 .91-.996v-.996a1 1 0 0 0-.566-.902a3.355 3.355 0 0 0-.033-.566l-3.087-23.06A2.93 2.93 0 0 0 21.918 1H9.95l-.05.002a2.92 2.92 0 0 0-2.76 2.624l-2.492 23.53A1 1 0 0 0 4 28.09v.996a1 1 0 0 0 .91.996l9.166.833a1 1 0 0 0 1.077-.832l.17-1.017Zm10.607-1.843l-6.037.524L17.01 12.07l.134-.061a.851.851 0 0 0 .86-.85l.009-5.146H20c-.023 1.088.33 2.23 1 3.088a5 5 0 0 0 1.833 1.193c.148.056.56.165.897.25L25.92 26.9c.016.108.019.217.01.324ZM15 12h-.003l-2.25 15.76l-6.094-.53l1.783-16.85l.169-.023c.185-.023.38-.047.519-.1A5.001 5.001 0 0 0 10.92 9.08c.688-.849 1.066-1.976 1.07-3.068h5.012v4.732a.26.26 0 0 1-.24.26H15.69s-.7.004-.7.844L15 12ZM8.546 9.35l.353-3.338H11c-.002.855-.294 1.752-.83 2.418a4 4 0 0 1-1.46.92a.547.547 0 0 1-.164 0Zm.46-4.346l.124-1.175a.92.92 0 0 1 .87-.83h11.91a.93.93 0 0 1 .92.82l.159 1.185H9.006Zm14.118 1.008l.46 3.446a8.87 8.87 0 0 1-.311-.081A4 4 0 0 1 21.8 8.45c-.529-.676-.81-1.58-.8-2.438h2.124Z"/></g></svg>
                        <h2>Fashion</h2>
                    </div></Link>
                <Link to={'Beauty'}>
                    <div className='single-category'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='beauty-svg' width="200" height="200" viewBox="0 0 14 14"><g stroke-linecap="round" stroke-linejoin="round"><path d="M1.29 9.71a1 1 0 0 0 0 1.41l2.09 2.09a1 1 0 0 0 1.41 0L8.5 9.5L5 6z"/><path d="M5.54 6.54L11.29.79a1 1 0 0 1 1.09-.21a1 1 0 0 1 .62.92v2.17a.999.999 0 0 1-.29.71L8 9m.04-4.96l2.5 2.5"/></g></svg>
                        <h2>Beauty</h2>
                </div></Link> 
        </div>
            </div>
         
        </>
    )

}

export default Menu;