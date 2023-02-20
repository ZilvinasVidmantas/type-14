import React from 'react';
import NavbarMobileMenuItem from './navbar-mobile-menu-item';
import type NavbarLinkData from '../types/navbar-link-data';
import classes from './index.module.scss';

type NavbarMobileMenuProps = {
  breakpoint: number,
  navbarOpen: boolean,
  linksData: NavbarLinkData[],
  onClick: VoidFunction,
};

const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = ({
  breakpoint,
  navbarOpen,
  linksData,
  onClick,
}) => {
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
    <div className={navbarMenuClassList.join(' ')}>
      {linksData.map(({ to, text }) => (
        <NavbarMobileMenuItem
          key={to}
          to={to}
          onClick={onClick}
        >
          {text}
        </NavbarMobileMenuItem>
      ))}
      <NavbarMobileMenuItem accordion={{ title: 'Nuorodų grupė' }}>
        {linksData.map(({ to, text }) => (
          <NavbarMobileMenuItem
            key={to}
            to={to}
            onClick={onClick}
          >
            {text}
          </NavbarMobileMenuItem>
        ))}
      </NavbarMobileMenuItem>
    </div>
  );
};

export default NavbarMobileMenu;
