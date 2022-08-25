import React, { useMemo } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FullScreenSpinner from './structural/Spinner/FullScreenSpinner';
import Phone from './structural/Phone/Phone';
import { AppRoute } from './AppRoute';
import phoneApps from './phoneApps/phoneApps';

const Home = React.lazy(() => import('./structural/Home/Home'));

function App() {
  const phoneAppsRoutes = useMemo(() => {
    return phoneApps.map(app => {
      const Element = app.element;
      return (
        <Route key={app.id} path={app.route} element={<Element />} />
      );
    });
  }, []);

  return (
    <div className='app'>
      <React.Suspense fallback={<FullScreenSpinner />}>
        <BrowserRouter>
          <Routes>
            <Route path={AppRoute.ROOT} element={<Phone />}>
              <Route index element={<Home />} />
              {phoneAppsRoutes}
            </Route>
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </div>
  );
}

export default App;
