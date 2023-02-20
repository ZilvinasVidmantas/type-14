import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ColorManagerPage from '../pages/color-manager-page';
import CountManagerPage from '../pages/count-manager-page';
import FullnameManagerPage from '../pages/fullname-manager-page';
import TwoWayBindingPage from '../pages/two-way-binding-page';
import SleepStateManagerPage from '../pages/sleep-state-manager-page';
import HomePage from '../pages/home-page';
import ApartmentsPage from '../pages/apartment-page';
import NavbarLayout from '../components/layouts/navbar-layout';
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
        path: routes.ApartmentsPage,
        element: <ApartmentsPage />,
      },
      {
        path: routes.CounterManagerPage,
        element: <CountManagerPage />,
      },
      {
        path: routes.ColorManagerPage,
        element: <ColorManagerPage />,
      },
      {
        path: routes.FullnameManagerPage,
        element: <FullnameManagerPage />,
      },
      {
        path: routes.SleepStateManagerPage,
        element: <SleepStateManagerPage />,
      },
      {
        path: routes.TwoWayBindingExamplePage,
        element: <TwoWayBindingPage />,
      },
    ],
  },

]);

export default router;
