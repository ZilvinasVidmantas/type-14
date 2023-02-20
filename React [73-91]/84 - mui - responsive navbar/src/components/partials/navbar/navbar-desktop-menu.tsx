import React from 'react';
import { Box } from '@mui/material';
import NavbarDesktopLink from './navbar-desktop-link';
import { extendBr, mainLinks } from './navbar-data';

const NavbarDesktopMenu = () => (
  <Box sx={{
    display: { xs: 'none', [extendBr]: 'flex' },
    alignSelf: 'stretch',
  }}
  >
    {mainLinks.map(({ to, text }) => (
      <NavbarDesktopLink key={to} to={to}>
        {text}
      </NavbarDesktopLink>
    ))}
  </Box>
);

export default NavbarDesktopMenu;
