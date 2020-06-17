import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function About() {
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <div className="card">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <h4><b>About Page</b></h4>
          <p>Lorem ipsum etc</p>
        </div>
      </div>
    </div>
  );
}

export default About;