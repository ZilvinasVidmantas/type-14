import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ColorManagerPage from '../pages/color-manager-page';
import CountManagerPage from '../pages/count-manager-page';
import FullnameManagerPage from '../pages/fullname-manager-page';
import TwoWayBindingPage from '../pages/two-way-binding-page';
import SleepStateManagerPage from '../pages/sleep-state-manager-page';
import HomePage from '../pages/home-page';
import ApartmentsPage from '../pages/apartments-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/apartments',
    element: <ApartmentsPage />,
  },
  {
    path: '/count-manager',
    element: <CountManagerPage />,
  },
  {
    path: '/color-manager',
    element: <ColorManagerPage />,
  },
  {
    path: '/fullname-manager',
    element: <FullnameManagerPage />,
  },
  {
    path: '/sleep-state-manager',
    element: <SleepStateManagerPage />,
  },
  {
    path: '/two-way-binding-example',
    element: <TwoWayBindingPage />,
  },
]);

export default router;
