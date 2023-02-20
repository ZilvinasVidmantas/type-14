const routes = {
  HomePage: '/',
  TypographyPage: '/typography',
  ButtonPage: '/button',
  TextFieldPage: '/textField',
  SelectPage: '/select',
  RadioButtonPage: '/radios',
  CheckboxPage: '/checkbox',
  SwitchPage: '/switch',
  RatingPage: '/rating',
  AutoCompletePage: '/autoComplete',
  BoxPage: '/box',
  CardPage: '/card',
  AccordionPage: '/accordion',
  ImageListPage: '/imageList',
  NavbarPage: '/navbar',
  LinkPage: '/link',
  BreadcrumbsPage: '/breadcrumbs',
  DrawerPage: '/drawer',
  SpeedDialPage: '/speedDial',
  BottomNavigationPage: '/bottomNavigation',
  AvatarPage: '/avatar',
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
