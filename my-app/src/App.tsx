import { Outlet } from 'react-router';
import './App.css'
import Header from './layout/Header/Header';
import Menu from './layout/Menu/Menu';
import AppContext from './api/contextApi';

function App() {

  return (
    <div className='main'>
      <Header />
      <div className='main-content'>
        <Menu />
        <Outlet />
        <AppContext />
      </div>
    </div>
  )
}

export default App;
