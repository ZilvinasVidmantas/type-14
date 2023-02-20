import React from 'react';
import routes from '../../../navigation/routes';
import type NavbarLinkData from './types/navbar-link-data';
import NavbarMobileMenu from './navbar-mobile-menu';
import NavbarDesktopMenu from './navbar-desktop-menu';
import NavbarToggler from './navbar-toggler';
import classes from './index.module.scss';

const breakpoint = Number(classes.breakpoint.slice(0, -2));

const linksData: NavbarLinkData[] = [
  { to: routes.HomePage, text: 'Home' },
  { to: routes.ApartmentsPage, text: 'Apartments' },
];

const linksGroups = [
  {
    title: 'State managers',
    linksData: [
      { to: routes.CounterManagerPage, text: 'Counter' },
      { to: routes.ColorManagerPage, text: 'Color Manager' },
      { to: routes.FullnameManagerPage, text: 'Fullname Manager' },
      { to: routes.SleepStateManagerPage, text: 'Sleep State Manager' },
    ],
  },
  {
    title: 'Examples',
    linksData: [
      { to: routes.TwoWayBindingExamplePage, text: 'Two way binding example' },
    ],
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState<boolean>(false);

  return (
    <>
      <header className={classes.navbar}>
        <NavbarDesktopMenu linksData={linksData} />
        <NavbarToggler
          isOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        />
      </header>
      <NavbarMobileMenu
        breakpoint={breakpoint}
        navbarOpen={navbarOpen}
        linksData={linksData}
        onClick={() => setNavbarOpen(false)}
        linksGroups={linksGroups}
      />
    </>
  );
};

export default Navbar;
