import React from 'react';
import {
  AppBar, Toolbar, Container, TextField, Button,
} from '@mui/material';
import ApiService from 'services/api-service';
import { extendBr } from './navbar-data';
import NavbarDesktopMenu from './navbar-desktop-menu';
import NavbarMobileMenu from './navbar-mobile-menu';
import NavbarToggler from './navbar-toggler';

const Navbar = () => {
  const [isDrawerOpen, setIsDrowerOpen] = React.useState(false);
  const closeDrawer = () => setIsDrowerOpen(false);
  const toggleDrawer = () => setIsDrowerOpen(!isDrawerOpen);

  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleLogin = async () => {
    await ApiService.login({ email, password });
  };

  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar sx={{
          justifyContent: { xs: 'flex-end', [extendBr]: 'flex-start' },
          p: { xs: 0, sm: 0 },
        }}
        >
          <NavbarDesktopMenu />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="filled"
          />
          <TextField
            type="email"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="filled"
          />
          <Button onClick={handleLogin} variant="contained" color="success">Login</Button>
          <NavbarToggler isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
          <NavbarMobileMenu isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
