import { lazy } from 'react';
// @ts-ignore
// eslint-disable-next-line max-len
export const AboutPageAsync = lazy(() => new Promise((resolve) => { setTimeout(() => resolve(import('./AboutPage')), 150000); }));
