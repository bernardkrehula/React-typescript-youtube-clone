import { Outlet } from 'react-router';
import './App.css'
import Header from './layout/Header';
import Menu from './layout/Menu';
import ConnectionProvider from './useContext/ConnectionProvider';
import SingleVideo from './pages/SingleVideo/SingleVideo';

//Instalirati react dev tools

function App() {
  //Dignuti useState u app iz headera
  //Napraviti poseban input za menu filter input
  //Dodaj type alias glavne foldere
  const [ searchValue, setValue ] = useState<string>('');

  return (
    <div className='main'>
      <ConnectionProvider>
      <Header />
        <div className='main-content'>
          <Menu />
          <Outlet />
          <SingleVideo />
        </div>
      </ConnectionProvider>
    </div>
  )
}

export default App;
