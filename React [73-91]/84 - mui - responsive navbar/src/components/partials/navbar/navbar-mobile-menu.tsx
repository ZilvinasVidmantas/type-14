import React from 'react';
import { Toolbar, Drawer, MenuList } from '@mui/material';
import NavbarMobileLink from './navbar-mobile-link';
import { extendBr, mainLinks } from './navbar-data';

type NavbarMobileMenuProps = {
  isDrawerOpen: boolean,
  closeDrawer: VoidFunction
};

const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = ({
  isDrawerOpen,
  closeDrawer,
}) => (
  <Drawer
    sx={{ display: { xs: 'block', [extendBr]: 'none' } }}
    anchor="top"
    open={isDrawerOpen}
    onClose={closeDrawer}
  >
    <Toolbar />
    <MenuList>
      {mainLinks.map(({ to, text }) => (
        <NavbarMobileLink key={to} to={to} onClick={closeDrawer}>{text}</NavbarMobileLink>
      ))}
    </MenuList>
  </Drawer>
);

export default NavbarMobileMenu;
