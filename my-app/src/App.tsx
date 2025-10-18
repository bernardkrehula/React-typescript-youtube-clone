import { Outlet } from 'react-router';
import './App.css'
import Header from './layout/Header';
import Menu from './layout/Menu';
import ConnectionProvider from './useContext/ConnectionProvider';
import SingleVideo from './pages/SingleVideo/SingleVideo';
import { useEffect, useState } from 'react';
import { useDataApi } from './api/getDataApi';

//Instalirati react dev tools

function App() {
  //Dignuti useState u app iz headera
  //Napraviti poseban input za menu filter input
  //Dodaj type alias glavne foldere
  const [ searchValue, setValue ] = useState<string>('');
  const { data, isLoading, isPending } = useDataApi(searchValue);

  return (
    <div className='main'>
      <ConnectionProvider>
      <Header setValue={setValue} />
        <div className='main-content'>
          <Menu />
          <Outlet context={{data}}/>
          <SingleVideo />
        </div>
      </ConnectionProvider>
    </div>
  )
}

export default App;
