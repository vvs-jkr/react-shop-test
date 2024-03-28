import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {MainProvider} from "./context/MainContext";
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Router>
    <MainProvider>
      <App />
    </MainProvider>
  </Router>
)
