import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import router from 'navigation/router';
import theme from 'theme';

const rootHtmlElement = document.getElementById('root') as HTMLElement;

ReactDOM
  .createRoot(rootHtmlElement)
  .render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>,
  );
