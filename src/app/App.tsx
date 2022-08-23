import React from 'react';
import './App.css';
import Frame from './features/Frame/Frame';
import Home from './features/Home/Home';

function App() {
  return (
    <div className='app'>
      <Frame>
        <Home />
      </Frame>
    </div>
  );
}

export default App;
