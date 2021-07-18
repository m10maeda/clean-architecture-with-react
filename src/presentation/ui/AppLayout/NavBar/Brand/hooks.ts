import { useRouteMatch as useRouteMatchWithRouter } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export const useRouteMatch = (): { isHome: boolean } => {
  const match = useRouteMatchWithRouter({
    path: '/',
    strict: true,
    sensitive: true,
  });

  return {
    isHome: match?.isExact === true,
  };
};
