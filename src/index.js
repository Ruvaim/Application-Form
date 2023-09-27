import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import TempFormProvider from './Context/TempFormProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TempFormProvider>
        <App />
      </TempFormProvider>
    </BrowserRouter>
  </React.StrictMode>
);
