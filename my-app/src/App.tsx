import { Outlet } from 'react-router';
import './App.css'
import Header from './layout/Header';
import Menu from './layout/Menu';
import ConnectionProvider from './useContext/ConnectionProvider';
import SingleVideo from './pages/SingleVideo/SingleVideo';
import { useEffect, useState } from 'react';
import { useDataApi } from './api/getDataApi';

function App() {
  
  const [ searchValue, setValue ] = useState<string>('');
  const { data, isFetched } = useDataApi(searchValue);
 
  return (
    <div className='main'>
      <ConnectionProvider>
      <Header setValue={setValue} />
        <div className='main-content'>
          <Menu setValue={setValue}/>
          <Outlet context={{data, isFetched}}/>
          <SingleVideo />
        </div>
      </ConnectionProvider>
    </div>
  )
}

export default App;
