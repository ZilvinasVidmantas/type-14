import React from 'react';
import NavbarDesktopMenuLink from './navbar-desktop-menu-link';
import classes from './index.module.scss';
import type NavbarLinkData from '../types/navbar-link-data';

type NavbarDesktopMenuProps = {
  linksData: NavbarLinkData[],
};

const NavbarDesktopMenu: React.FC<NavbarDesktopMenuProps> = ({
  linksData,
}) => (
  <div className={classes.links}>
    {linksData.map(({ to, text }) => (
      <NavbarDesktopMenuLink
        key={to}
        to={to}
      >
        {text}
      </NavbarDesktopMenuLink>
    ))}
  </div>
);

export default NavbarDesktopMenu;
