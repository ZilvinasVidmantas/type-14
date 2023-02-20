import React from 'react';
import type NavbarLinkData from '../types/navbar-link-data';
import classes from './index.module.scss';
import NavbarMobileMenuLink from './navbar-mobile-menu-link';
import NavbarMobileMenuAccordion from './navbar-mobile-menu-accordion';

type NavbarMobileMenuProps = {
  breakpoint: number,
  navbarOpen: boolean,
  linksData: NavbarLinkData[],
  linksGroups: ({ title: string, linksData: NavbarLinkData[] })[]
  onClick: VoidFunction,
};

const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = ({
  breakpoint,
  navbarOpen,
  linksData,
  linksGroups,
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
      {linksData.map(({ text, to }) => (
        <NavbarMobileMenuLink key={to} to={to} onClick={onClick}>
          {text}
        </NavbarMobileMenuLink>
      ))}

      {linksGroups.map((linksGroup) => (
        <NavbarMobileMenuAccordion title={linksGroup.title}>
          {linksGroup.linksData.map(({ text, to }) => (
            <NavbarMobileMenuLink key={to} to={to} onClick={onClick} isChild>
              {text}
            </NavbarMobileMenuLink>
          ))}
        </NavbarMobileMenuAccordion>
      ))}

    </div>
  );
};

export default NavbarMobileMenu;
