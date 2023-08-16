import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@mui/material'
import router from './App.routes';
import AuthLayout from './components/layouts/AuthLayout/AuthLayout'
import { RouterProvider } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID
    };

    console.log(firebaseConfig);
  },[])
  return (
    <>
          <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
