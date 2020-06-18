import React from 'react';
import headerImage from '../photos/tackle.jpg';
import './About.css'

function About() {
  return (
    <span>
        <div style={{display: 'flex',  justifyContent:'center'}} >
            <h1>Navigating the NFL Draft Through Data Science</h1>
        </div>
        <div style={{display: 'flex', justifyContent:'center'}} >
            <h4>How to calculate a college player's future value in the NFL</h4>
        </div>
        <div style={{display: 'flex', justifyContent:'center'}} >
            <p className="line"></p>
        </div>
        <div style={{display: 'flex', justifyContent:'center', paddingBottom:'15px'}} >
            <h6>By: Scott Gill | Jaxon Moffitt | Ryan Skalla</h6>
        </div>
        <div style={{display: 'flex',  justifyContent:'center'}} >
            <img src={headerImage} className="App-logo align" alt="logo" width='100%' height='100%'/>
        </div>
        <div style={{display: 'flex',  justifyContent:'center', height: '500px'}} >
            <p></p>
        </div>
    </span>
  );
}

export default About;