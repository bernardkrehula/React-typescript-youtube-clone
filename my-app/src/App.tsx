import { Outlet } from 'react-router';
import './App.css'
import Header from './layout/Header/Header';
import Menu from './layout/Menu/Menu';
import ConnectionProvider from './useContext/ConnectionProvider';
import SingleVideo from './pages/SingleVideo/SingleVideo';

//Instalirati react dev tools

function App() {

  return (
    <div className='main'>
      <Header />
      <ConnectionProvider>
        <div className='main-content'>
          {/* <Menu />
          <Outlet /> */}
          <SingleVideo />
        </div>
      </ConnectionProvider>
    </div>
  )
}

export default App;
