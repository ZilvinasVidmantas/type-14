import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layouts/navbar-layout';
import HomePage from 'pages/home-page';
import HouseFormPage from 'pages/house-form-page';
import SingleHousePage from 'pages/single-house-page/index';
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
        path: routes.SingleHousePage.path,
        element: <SingleHousePage />,
      },
      {
        path: routes.HouseFormPage,
        element: <HouseFormPage />,
      },
      {
        path: routes.UpdateHousePage.path,
        element: <HouseFormPage />,
      },
    ],
  },
]);

export default router;
