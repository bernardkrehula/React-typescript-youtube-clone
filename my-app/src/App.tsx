import { Outlet } from 'react-router';
import './App.css'
import Header from './layout/Header/Header';
import Menu from './layout/Menu/Menu';

function App() {

  return (
    <div className='main'>
      <Header />
      <Menu />
      <Outlet />
    </div>
  )
}

export default App;
