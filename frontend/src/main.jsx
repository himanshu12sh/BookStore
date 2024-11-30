import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import AuthProvider from './context/AuthProvider.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
    <App />
  </AuthProvider>
  </BrowserRouter>
)
