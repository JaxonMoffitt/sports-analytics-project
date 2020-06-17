import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="card">
      <img src={logo} className="App-logo" alt="logo" style="width:100%" />
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
}

export default App;
