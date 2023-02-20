import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from 'pages/home-page';
import routes from './routes';

const router = createBrowserRouter([
  {
    path: routes.HomePage,
    element: <HomePage />,
  },
]);

export default router;
