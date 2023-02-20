import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import classes from './navbar-menu-link.module.scss';

type NavbarMenuLinkProps = Omit<NavLinkProps, 'className'>;

const NavbarMenuLink: React.FC<NavbarMenuLinkProps> = ({
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

export default NavbarMenuLink;
