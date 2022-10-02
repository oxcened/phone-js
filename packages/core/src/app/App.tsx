import React, { useMemo } from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import FullScreenSpinner from './features/Spinner/FullScreenSpinner';
import Phone from './features/Phone/Phone';
import phoneApps from './features/PhoneApp/phoneApps';

const Home = React.lazy(() => import('./features/Home/Home'));

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
      <Phone>
        <React.Suspense fallback={<FullScreenSpinner />}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              {phoneAppsRoutes}
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </BrowserRouter>
        </React.Suspense>
      </Phone>
    </div>
  );
}

export default App;
