import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { extendBr } from './navbar-data';
import NavbarDesktopMenu from './navbar-desktop-menu';
import NavbarMobileMenu from './navbar-mobile-menu';
import NavbarToggler from './navbar-toggler';

const Navbar = () => {
  const [isDrawerOpen, setIsDrowerOpen] = React.useState(false);
  const closeDrawer = () => setIsDrowerOpen(false);
  const toggleDrawer = () => setIsDrowerOpen(!isDrawerOpen);

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: { xs: 'flex-end', [extendBr]: 'flex-start' } }}>
        <NavbarDesktopMenu />
        <NavbarToggler isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <NavbarMobileMenu isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
