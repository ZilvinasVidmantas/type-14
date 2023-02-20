import React from 'react';
import classes from './navbar-mobile-menu-accordion.module.scss';
import NavbarMobileMenuItem from './navbar-mobile-menu-item';

type NavbarMobileMenuAccordionProps = {
  title: string,
  children: React.ReactNode
};

const NavbarMobileMenuAccordion: React.FC<NavbarMobileMenuAccordionProps> = ({
  title,
  children,
}) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const accordionWrapperClasses = [classes.accordion];
  if (open) accordionWrapperClasses.push(classes.open);

  return (
    <NavbarMobileMenuItem>
      <div
        className={accordionWrapperClasses.join(' ')}
        onClick={() => setOpen(!open)}
      >
        <div className={classes.header}>
          <span>{title}</span>
          <i className={`bi bi-caret-${open ? 'up' : 'down'}-fill`} />
        </div>
        <div className={classes.content}>
          {children}
        </div>
      </div>
    </NavbarMobileMenuItem>
  );
};

export default NavbarMobileMenuAccordion;
