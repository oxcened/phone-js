import React from 'react';
import './App.css';
import Frame from './features/Frame/Frame';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from './core/models/AppRoute';
import FullScreenSpinner from './features/Spinner/FullScreenSpinner';

const Home = React.lazy(() => import('./features/Home/Home'));
const Notes = React.lazy(() => import('./features/Notes/Notes'));

function App() {
  return (
    <div className='app'>
      <Frame>
        <React.Suspense fallback={<FullScreenSpinner />}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path={AppRoute.NOTES} element={<Notes />} />
            </Routes>
          </BrowserRouter>
        </React.Suspense>
      </Frame>
    </div>
  );
}

export default App;
