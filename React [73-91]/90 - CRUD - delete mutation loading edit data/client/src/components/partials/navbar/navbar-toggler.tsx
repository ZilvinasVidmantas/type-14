import React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { extendBr } from './navbar-data';

type NavbarTogglerProps = {
  isDrawerOpen: boolean,
  toggleDrawer: VoidFunction
};

const NavbarToggler: React.FC<NavbarTogglerProps> = ({
  isDrawerOpen,
  toggleDrawer,
}) => {
  const Icon = isDrawerOpen ? CloseIcon : MenuIcon;

  return (
    <IconButton
      sx={{ display: { xs: 'inline-grid', [extendBr]: 'none' } }}
      onClick={toggleDrawer}
      edge="end"
    >
      <Icon sx={{ color: 'common.white', fontSize: 32 }} />
    </IconButton>
  );
};

export default NavbarToggler;
