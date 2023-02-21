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

export const linksGroups: LinksGroup[] = [];

export const extendBr: Breakpoint = 'sm';
