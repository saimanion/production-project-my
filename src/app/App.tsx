import './styles/index.scss';

import { useTheme } from 'app/providers/ThemeProvider';

import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/SideBar';
import { Suspense } from 'react';
import Router from './providers/Router/ui/Router';

function App() {
  const { theme } = useTheme();
  return (
    <div className={ClassNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <Router />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
