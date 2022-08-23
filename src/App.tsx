import React from 'react';
import './App.css';
import Frame from './components/Frame/Frame';
import Home from './components/Home/Home';

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
