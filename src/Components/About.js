import React from 'react';
import football_icon from '../photos/football_icon.png';
import '../App.css';

function About() {
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}} >
      <div className="card" style={{ alignItems:'center', padding:'10px' }} >
        <img src={football_icon} className="App-logo" alt="logo" width="10%" height="10%" />
        <div className="container">
          <h4><b>About Page</b></h4>
          <p>Lorem ipsum etc</p>
        </div>
      </div>
    </div>
  );
}

export default About;