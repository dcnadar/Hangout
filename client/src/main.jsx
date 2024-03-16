import React from 'react'
import ReactDOM from 'react-dom/client'
import authReducer from './states/index.js'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'


import App from './App.jsx'
import './index.css';
const store = configureStore({
  reducer:authReducer
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <App />

  </Provider>
)
