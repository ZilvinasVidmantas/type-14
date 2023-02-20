import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import classes from './navbar-link.module.scss';

type NavbarlinkProp = Omit<NavLinkProps, 'className'>;

const NavbarLink: React.FC<NavbarlinkProp> = ({
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

export default NavbarLink;
