import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Routes as RoutesList } from 'shared/config/routerConfig/RouterConfig';

export const Router = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {Object.values(RoutesList).map(({ path, element }) => (<Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} />))}

    </Routes>
  </Suspense>
);

export default Router;
