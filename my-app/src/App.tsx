import { Outlet } from 'react-router';
import './App.css'
import Header from './layout/Header/Header';
import Menu from './layout/Menu/Menu';
import { fetchData } from './api/api';
import { useQuery } from '@tanstack/react-query';

function App() {
  //React querry usage
  const {data} = useQuery({
        queryKey: ['videos'],
        queryFn: fetchData
    })

  return (
    <div className='main'>
      <Header />
      <div className='main-content'>
        <Menu data={data} />
        <Outlet />
      </div>
    </div>
  )
}

export default App;
