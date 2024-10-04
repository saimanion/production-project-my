import AboutPage from 'pages/AboutPage/ui/AboutPage';
import MainPage from 'pages/MainPage/ui/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
enum AppRoutes {
  // eslint-disable-next-line no-unused-vars
    MAIN = 'main',
    // eslint-disable-next-line no-unused-vars
    ABOUT = 'about',
    // eslint-disable-next-line no-unused-vars
    NOTFOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOTFOUND]: '/*',
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,

  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,

  },
  [AppRoutes.NOTFOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,

  },
};
