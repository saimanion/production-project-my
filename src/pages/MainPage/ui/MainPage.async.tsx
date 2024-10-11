import { lazy } from 'react';
// @ts-ignore
// eslint-disable-next-line max-len
export const MainPageAsync = lazy(() => new Promise((resolve) => { setTimeout(() => resolve(import('./MainPage')), 150000); }));
