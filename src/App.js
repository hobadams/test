import React from 'react';
import './App.css';
import 'h8k-components';
import PoleManager from './components/PollManager';

const title = "Pole Manager";

function App() {
  return (
    <div className="App">
      <h8k-navbar header={title} data-testId="navbar"></h8k-navbar>
      <PoleManager />
    </div>
  );
}

export default App;
