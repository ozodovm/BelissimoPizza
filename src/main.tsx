import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      retry:1,
      refetchOnWindowFocus:false,
      staleTime:1000 * 30 * 5,
      // @ts-ignore
      casheTime:1000 * 30 * 10
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <BrowserRouter future={{v7_relativeSplatPath:true, v7_startTransition:true}}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
  

)
