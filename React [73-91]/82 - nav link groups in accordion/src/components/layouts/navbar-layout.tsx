import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../partials/navbar';

const NavbarLayout = () => (
  <>
    <Navbar />
    <main>
      <Outlet />
    </main>
  </>
);

export default NavbarLayout;
