import { Outlet } from 'react-router';
import './App.css'
import Header from './layout/Header/Header';
import Menu from './layout/Menu/Menu';
import { fetchData } from './api/api';
import { useQuery } from '@tanstack/react-query';
import ConnectionProvider from './useContext/ConnectionProvider';

function App() {
  //React querry usage
  const {data} = useQuery({
        queryKey: ['videos'],
        queryFn: fetchData
    })

  return (
    <div className='main'>
      <Header />
      <ConnectionProvider>
        <div className='main-content'>
          <Menu />
          <Outlet />
        </div>
      </ConnectionProvider>
    </div>
  )
}

export default App;
