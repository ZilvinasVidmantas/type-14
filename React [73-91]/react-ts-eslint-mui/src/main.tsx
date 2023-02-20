import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './navigation/router';

const rootHtmlElement = document.getElementById('root') as HTMLElement;

ReactDOM
  .createRoot(rootHtmlElement)
  .render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
