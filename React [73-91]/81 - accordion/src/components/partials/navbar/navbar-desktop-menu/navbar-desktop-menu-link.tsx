import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import classes from './navbar-desktop-menu-link.module.scss';

type NavbarDesktopMenuLinkProps = Omit<NavLinkProps, 'className'>;

const NavbarDesktopMenuLink: React.FC<NavbarDesktopMenuLinkProps> = ({
  children,
  ...props
}) => (
  <NavLink
    className={({ isActive }) => {
      const classList = [classes.link];
      if (isActive) classList.push(classes.active);

      return classList.join(' ');
    }}
    {...props}
  >
    {children}

  </NavLink>
);

export default NavbarDesktopMenuLink;
