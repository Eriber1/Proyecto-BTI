import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App.jsx'
import './index.css'

import { BrowserRouter  } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <StyledEngineProvider injectFirst>
    <App />
    </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
