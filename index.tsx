
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ScribeProvider } from './contexts/ScribeContext';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ScribeProvider>
        <App />
      </ScribeProvider>
    </React.StrictMode>
  );
}
