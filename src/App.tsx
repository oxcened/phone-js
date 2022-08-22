import React from 'react';
import './App.css';
import Frame from './app/components/Frame/Frame';
import Home from './app/components/Home/Home';

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
