import React from 'react'
import ReactDOM from 'react-dom/client'

import reportWebVitals from './reportWebVitals'

import ThemeProvider from './components/ThemeProvider'
import FontAwesomeProvider from './components/FontAwesomeProvider'
import WebSocketProvider from './components/WebSocketProvider'
import SolanaProvider from './components/SolanaProvider'

import { store } from './store'
import { Provider } from 'react-redux'

import './index.css' // typos

import App from './App'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// TODO: Fontawesome CSS Provider
// TODO: Mui Theme Provider 

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <FontAwesomeProvider>
          <SolanaProvider>
            <WebSocketProvider>
              <App />
            </WebSocketProvider>
          </SolanaProvider>
        </FontAwesomeProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
