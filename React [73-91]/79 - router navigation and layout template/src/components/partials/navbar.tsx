import React from 'react';
import classes from './navbar.module.scss';
import NavbarLink from './navbar-link';
import routes from '../../navigation/routes';

const linksData = [
  { to: routes.HomePage, text: 'Home' },
  { to: routes.ApartmentsPage, text: 'Apartments' },
  { to: routes.CounterManagerPage, text: 'Counter' },
  { to: routes.ColorManagerPage, text: 'Color Manager' },
  { to: routes.FullnameManagerPage, text: 'Fullname Manager' },
  { to: routes.SleepStateManagerPage, text: 'Sleep State Manager' },
  { to: routes.TwoWayBindingExamplePage, text: 'Two way binding example' },
];

const Navbar = () => (
  <header className={classes.navbar}>
    {linksData.map(({ to, text }) => <NavbarLink key={to} to={to}>{text}</NavbarLink>)}
  </header>
);

export default Navbar;
