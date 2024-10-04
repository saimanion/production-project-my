import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig/RouterConfig';
import { PageLoader } from 'widgets/PageLoader';

export const Router = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {Object.values(routerConfig)
        .map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}

    </Routes>
  </Suspense>
);

export default Router;
