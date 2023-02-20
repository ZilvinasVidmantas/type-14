import React from 'react';
import classes from './navbar-toggler.module.scss';

type NavbarTogglerProps = {
  isOpen: boolean,
  onClick: VoidFunction
};

const NavbarToggler: React.FC<NavbarTogglerProps> = ({
  isOpen,
  onClick,
}) => (
  <i
    className={['bi', isOpen ? 'bi-x' : 'bi-list', classes.toggler].join(' ')}
    onClick={onClick}
  />
);

export default NavbarToggler;
