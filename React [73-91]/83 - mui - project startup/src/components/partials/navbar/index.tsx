import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import NavbarDesktopLink from './navbar-desktop-link';
import { mainLinks } from './links-data';

const Navbar = () => (
  <AppBar position="sticky">
    <Toolbar>
      {mainLinks.map(({ to, text }) => (
        <NavbarDesktopLink key={to} to={to}>
          {text}
        </NavbarDesktopLink>
      ))}
    </Toolbar>
  </AppBar>
);

export default Navbar;
