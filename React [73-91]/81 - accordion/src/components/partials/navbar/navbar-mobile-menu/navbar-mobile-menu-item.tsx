import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import classes from './navbar-mobile-menu-item.module.scss';

type NavbarMobileMenuItemProps = {
  to?: NavLinkProps['to'],
  children: React.ReactNode,
  onClick?: VoidFunction,
  accordion?: {
    title: string
  },
};

const NavbarMobileMenuItem: React.FC<NavbarMobileMenuItemProps> = ({
  children,
  to,
  onClick,
  accordion,
}) => {
  const [accordionOpen, setAccordionOpen] = React.useState<boolean>(false);

  if (to !== undefined) {
    return (
      <NavLink
        className={({ isActive }) => {
          const classList = [classes.item];
          if (isActive) classList.push(classes.active);

          return classList.join(' ');
        }}
        to={to}
        onClick={onClick}
      >
        {children}
      </NavLink>
    );
  }

  const accordionWrapperClasses = [classes.accordionWrapper];
  if (accordionOpen) accordionWrapperClasses.push(classes.open);

  if (accordion !== undefined) {
    return (
      <div
        className={accordionWrapperClasses.join(' ')}
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <div className={classes.item}>
          <span>{accordion.title}</span>
          <span className={classes.accordionCaret}>
            {accordionOpen
              ? <i className="bi bi-caret-up-fill" />
              : <i className="bi bi-caret-down-fill" />}
          </span>
        </div>
        <div className={classes.accordionContent}>
          {children}
        </div>
      </div>
    );
  }

  return <div className={classes.item}>{children}</div>;
};

export default NavbarMobileMenuItem;
