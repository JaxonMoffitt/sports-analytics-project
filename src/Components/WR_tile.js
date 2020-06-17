import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function WR_tile() {
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <div className="card">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <h4><b>John Doe</b></h4>
          <p>Wide Receiver</p>
        </div>
      </div>
    </div>
  );
}

export default WR_tile;