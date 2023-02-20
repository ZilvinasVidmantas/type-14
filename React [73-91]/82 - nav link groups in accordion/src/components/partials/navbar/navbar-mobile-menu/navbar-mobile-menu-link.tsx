import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import NavbarMobileMenuItem from './navbar-mobile-menu-item';
import classes from './navbar-mobile-menu-link.module.scss';

type NavbarMobileMenuLinkProps = {
  to: string,
  children: React.ReactNode,
  isChild?: boolean,
  onClick: NavLinkProps['onClick'],
};

const NavbarMobileMenuLink: React.FC<NavbarMobileMenuLinkProps> = ({
  to,
  children,
  isChild = false,
  onClick,
}) => (
  <NavbarMobileMenuItem>
    <NavLink
      className={({ isActive }) => {
        const classList = [classes.link];
        if (isActive) classList.push(classes.active);
        if (isChild) classList.push(classes.child);

        return classList.join(' ');
      }}
      to={to}
      onClick={onClick}
    >
      {children}
    </NavLink>
  </NavbarMobileMenuItem>
);

export default NavbarMobileMenuLink;
