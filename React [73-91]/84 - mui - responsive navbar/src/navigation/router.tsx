import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from 'pages/home-page';
import TypographyPage from 'pages/typography-page';
import NavbarLayout from 'components/layouts/navbar-layout';
import routes from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.TypographyPage,
        element: <TypographyPage />,
      },
    ],
  },
]);

export default router;
