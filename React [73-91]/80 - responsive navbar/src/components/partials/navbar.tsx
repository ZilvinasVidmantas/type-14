import React from 'react';
import classes from './navbar.module.scss';
import NavbarLink from './navbar-link';
import routes from '../../navigation/routes';
import NavbarMenuLink from './navbar-menu-link';

const breakpoint = Number(classes.breakpoint.slice(0, -2));

const linksData = [
  { to: routes.HomePage, text: 'Home' },
  { to: routes.ApartmentsPage, text: 'Apartments' },
  { to: routes.CounterManagerPage, text: 'Counter' },
  { to: routes.ColorManagerPage, text: 'Color Manager' },
  { to: routes.FullnameManagerPage, text: 'Fullname Manager' },
  { to: routes.SleepStateManagerPage, text: 'Sleep State Manager' },
  { to: routes.TwoWayBindingExamplePage, text: 'Two way binding example' },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState<boolean>(false);
  const [isTogglerLayout, setIsTogglerLayout] = React.useState(false);

  const navbarMenuClassList = [classes.navbarMenu];
  if (isTogglerLayout && navbarOpen) navbarMenuClassList.push(classes.open);

  React.useEffect(() => {
    const handleScreenSizeChange = () => setIsTogglerLayout(window.innerWidth < breakpoint);
    handleScreenSizeChange();

    window.addEventListener('resize', handleScreenSizeChange);

    return () => {
      window.removeEventListener('resize', handleScreenSizeChange);
    };
  }, []);

  return (
    <>
      <header className={classes.navbar}>
        <div className={classes.links}>
          {linksData.map(({ to, text }) => <NavbarLink key={to} to={to}>{text}</NavbarLink>)}
        </div>
        <i
          className={['bi', navbarOpen ? 'bi-x' : 'bi-list', classes.toggler].join(' ')}
          onClick={() => setNavbarOpen(!navbarOpen)}
        />
      </header>
      <div className={navbarMenuClassList.join(' ')}>
        {linksData.map(({ to, text }) => (
          <NavbarMenuLink
            key={to}
            to={to}
            onClick={() => setNavbarOpen(false)}
          >
            {text}
          </NavbarMenuLink>
        ))}
      </div>
    </>
  );
};

export default Navbar;
