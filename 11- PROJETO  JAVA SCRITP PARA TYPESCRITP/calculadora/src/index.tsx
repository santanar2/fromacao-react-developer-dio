import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { CalculatorProvider } from './context/CalculatorContext.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <CalculatorProvider>
      <App />
    </CalculatorProvider>
  </React.StrictMode>
);