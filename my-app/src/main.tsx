import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from './routes.tsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//React querry usage

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>  
    </QueryClientProvider>   
  </StrictMode>,
)

//Trebam zamijeniti app sa routerProvider i naprvaiti myRoute u kojem cu iskoristiti react querry