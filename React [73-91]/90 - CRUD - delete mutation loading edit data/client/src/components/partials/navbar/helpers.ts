import { linksGroups } from './navbar-data';

export const getActiveLinksGroupTitle = (urlPath: string) => {
  for (let i = 0; i < linksGroups.length; i += 1) {
    const hasActiveLink = linksGroups[i].links.some(({ to }) => to === urlPath);
    if (hasActiveLink) return linksGroups[i].title;
  }
  return null;
};
