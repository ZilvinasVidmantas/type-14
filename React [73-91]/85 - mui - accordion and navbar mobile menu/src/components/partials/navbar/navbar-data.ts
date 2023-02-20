import routes, { type RouteLink } from 'navigation/routes';
import { Breakpoint } from '@mui/material';

export type Link = {
  to: RouteLink,
  text: string
};

export type LinksGroup = {
  title: string,
  links: Link[]
};

export const mainLinks: Link[] = [
  { to: routes.HomePage, text: 'Home' },
];

export const linksGroups: LinksGroup[] = [
  {
    title: 'Lesson 1 components',
    links: [
      { to: routes.TypographyPage, text: 'Typography' },
      { to: routes.LinkPage, text: 'Link' },
      { to: routes.BreadcrumbsPage, text: 'Breadcrumbs' },
      { to: routes.SpeedDialPage, text: 'Speed Dial' },
      { to: routes.AvatarPage, text: 'Avatar' },
      { to: routes.RatingPage, text: 'Rating' },
      { to: routes.ButtonPage, text: 'Button' },
      { to: routes.TextFieldPage, text: 'Text Field' },
      { to: routes.SelectPage, text: 'Select' },
      { to: routes.RadioButtonPage, text: 'Radios' },
    ],
  },
  {
    title: 'Lesson 2 components',
    links: [
      { to: routes.CheckboxPage, text: 'Checkbox' },
      { to: routes.AutoCompletePage, text: 'AutoComplete' },
      { to: routes.SwitchPage, text: 'Switch' },
      { to: routes.BoxPage, text: 'Box' },
      { to: routes.CardPage, text: 'Card' },
      { to: routes.ImageListPage, text: 'Image List' },
      { to: routes.DrawerPage, text: 'Drawer' },
      { to: routes.NavbarPage, text: 'Navbar' },
      { to: routes.BottomNavigationPage, text: 'Bottom Navigation' },
      { to: routes.AccordionPage, text: 'Accordion' },
    ],
  },
];

export const extendBr: Breakpoint = 'md';
