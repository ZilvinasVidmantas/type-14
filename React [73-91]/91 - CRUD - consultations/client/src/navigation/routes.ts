const singleHousePageRoot = '/house/';
const updateHousePageRoot = '/update-house/';

const staticRoutes = {
  HomePage: '/',
  HouseFormPage: '/create-house',
} as const;

const dynamicRoutes = {
  SingleHousePage: {
    path: `${singleHousePageRoot}:id`,
    createLink: (id: string | number) => `${singleHousePageRoot}${id}`,
  },
  UpdateHousePage: {
    path: `${updateHousePageRoot}:id`,
    createLink: (id: string | number) => `${updateHousePageRoot}${id}`,
  },
} as const;

const routes = {
  ...staticRoutes,
  ...dynamicRoutes,
} as const;

// export type Routes = typeof routes;
// export type RouteLink = {
//   [Key in keyof Routes]: Routes[Key] extends string ? Routes[Key] : never
// }[keyof Routes];

export type Routes = typeof staticRoutes;
export type RouteLink = Routes[keyof Routes];

export default routes;
