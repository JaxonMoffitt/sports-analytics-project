import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <div className="card">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <h4><b>John Doe</b></h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    </div>
  );
}

export default App;
