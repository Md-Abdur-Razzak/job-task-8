import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, Routes} from 'react-router-dom'
import { Router } from './components/Router/Router'
import AuthProvider from './components/Router/AuthProvider'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={Router} />
        <ToastContainer></ToastContainer>
    </AuthProvider>
   
  </React.StrictMode>,
)
