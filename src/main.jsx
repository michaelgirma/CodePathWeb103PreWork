import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('home')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)