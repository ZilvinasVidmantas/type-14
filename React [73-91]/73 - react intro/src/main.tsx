import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app';
import './main.css';

const rootHtmlElement = document.getElementById('root') as HTMLElement

ReactDOM
  .createRoot(rootHtmlElement)
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
