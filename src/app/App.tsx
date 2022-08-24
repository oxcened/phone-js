import React from 'react';
import './App.css';
import Frame from './features/Frame/Frame';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from './core/models/AppRoute';
import FullScreenSpinner from './features/Spinner/FullScreenSpinner';
import StatusBar from './features/StatusBar/StatusBar';
import NoteDetail from './features/Notes/NoteDetail';

const Home = React.lazy(() => import('./features/Home/Home'));
const Notes = React.lazy(() => import('./features/Notes/Notes'));

function App() {
  return (
    <div className='app'>
      <Frame>
        <StatusBar />
        <React.Suspense fallback={<FullScreenSpinner />}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path={AppRoute.NOTES} element={<Notes />} />
              <Route path={AppRoute.NOTE_DETAIL_NEW} element={<NoteDetail />} />
              <Route path={AppRoute.NOTE_DETAIL_EDIT} element={<NoteDetail />} />
            </Routes>
          </BrowserRouter>
        </React.Suspense>
      </Frame>
    </div>
  );
}

export default App;
