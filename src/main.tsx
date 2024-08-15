import { SDKProvider } from '@tma.js/sdk-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ModalContextProvider } from './context/ModalContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SDKProvider acceptCustomStyles>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </SDKProvider>
  </React.StrictMode>,
);
