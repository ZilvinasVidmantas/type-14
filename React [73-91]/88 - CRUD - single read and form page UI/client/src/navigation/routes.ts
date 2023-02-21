const singleHousePageRoot = '/house/';

const routes = {
  HomePage: '/',
  SingleHousePage: {
    path: `${singleHousePageRoot}:id`,
    createLink: (id: string | number) => `${singleHousePageRoot}${id}`,
  },
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
