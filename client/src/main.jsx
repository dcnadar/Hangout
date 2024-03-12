import React from 'react'

import ReactDOM from 'react-dom/client'
import authReducer from './states'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  REGISTER,
  PURGE,
  persistReducer
}
from 'redux-persist'


import App from './App.jsx'
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
