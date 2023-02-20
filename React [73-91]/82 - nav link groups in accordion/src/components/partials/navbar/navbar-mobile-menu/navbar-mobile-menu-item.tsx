import React from 'react';
import classes from './navbar-mobile-menu-item.module.scss';

type NavbarMobileMenuItemProps = {
  children: React.ReactNode,
};

const NavbarMobileMenuItem: React.FC<NavbarMobileMenuItemProps> = ({
  children,
}) => (
  <div className={classes.item}>{children}</div>
);

export default NavbarMobileMenuItem;
