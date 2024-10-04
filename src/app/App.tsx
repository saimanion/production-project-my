import './styles/index.scss';

import { useTheme } from 'app/providers/ThemeProvider';

import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/SideBar';
import { Suspense, useEffect } from 'react';
import Router from './providers/Router/ui/Router';

function App() {
  const { theme } = useTheme();
  return (
    <div className={ClassNames('app', {}, [theme])}>
      <Suspense fallback="">
        <NavBar />
        <div className="content-page">
          <Sidebar />
          <Router />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
