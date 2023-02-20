import React from 'react';
import {
  Toolbar,
  Drawer,
  MenuList,
  type AccordionProps,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import NavbarMobileLink from './navbar-mobile-link';
import { extendBr, linksGroups, mainLinks } from '../navbar-data';
import NavbarMobileAccordion from './navbar-mobile-accordion';
import { getActiveLinksGroupTitle } from '../helpers';

type NavbarMobileMenuProps = {
  isDrawerOpen: boolean,
  closeDrawer: VoidFunction
};

const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = ({
  isDrawerOpen,
  closeDrawer,
}) => {
  const { pathname } = useLocation();
  const activeLinksGroupTitle = getActiveLinksGroupTitle(pathname);
  const [openedAccordion, setOpenedAccordion] = React.useState(activeLinksGroupTitle);

  const createAccordionChangeHandler = (title: string): AccordionProps['onChange'] => (
    _,
    shouldOpen,
  ) => setOpenedAccordion(shouldOpen ? title : null);

  const handleMainLinkClick = () => {
    closeDrawer();
    setOpenedAccordion(null);
  };

  return (
    <Drawer
      sx={{ display: { xs: 'block', [extendBr]: 'none' } }}
      anchor="top"
      open={isDrawerOpen}
      onClose={closeDrawer}
    >
      <Toolbar />
      <MenuList sx={{ p: 0 }}>
        {mainLinks.map(({ to, text }) => (
          <NavbarMobileLink key={to} to={to} onClick={handleMainLinkClick}>{text}</NavbarMobileLink>
        ))}
        {linksGroups.map(({ title, links }) => (
          <NavbarMobileAccordion
            key={title}
            title={title}
            links={links}
            closeDrawer={closeDrawer}
            expanded={title === openedAccordion}
            hasActiveLink={title === activeLinksGroupTitle}
            onChange={createAccordionChangeHandler(title)}
          />
        ))}
      </MenuList>
    </Drawer>
  );
};

export default NavbarMobileMenu;
