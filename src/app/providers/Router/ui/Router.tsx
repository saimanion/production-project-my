import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import path from "path";
import {Routes as RoutesList} from 'shared/config/routerConfig/RouterConfig'
//{['/']: {path: '/', element: <MainPage /> }, [/about]: {path: '/about', element: <AboutPage /> }}
// [{path: '/', element: <MainPage /> },{path: '/about', element: <AboutPage /> }]

export const Router = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
            {Object.values(RoutesList).map(({path, element}) => {
                return (<Route key={path} path={path} element={<div className='page-wrapper'>{element}</div>}/>)
            })}

            </Routes>
        </Suspense>
    );
};

export default Router;
