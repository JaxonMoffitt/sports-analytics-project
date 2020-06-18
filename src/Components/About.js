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
        <div style={{display: 'flex',  justifyContent:'center'}} >
            <h2 className="header-text">Introduction</h2>
        </div>
        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            As April rolls around every year, NFL team general managers and owners begin to sweat for many reasons: How should they approach free agency? How will they afford to re-sign their current players? And perhaps most importantly, who should they select in the upcoming NFL draft? Among a sea of prospects to choose from, it can be impossible at times to determine who has separated themselves from the pack of premier athletes. We decided to tackle the question ourselves and analyze how incoming draft picks’ college statistics and measurements at the NFL Combine could predict their value to their future team. While many teams utilize advanced statistics within their organizational decision-making, we figured few teams had actually built models using the available data to judge which players might have the brightest futures. Using statistical modeling, we would try to identify trends within our past data to see if there were any specific indicators of certain statistics to heavily weigh within a team’s choice of draft pick.
            </p>
        </div>



        <div style={{display: 'flex',  justifyContent:'center', height: '500px'}} >
            <p></p>
        </div>
    </span>
  );
}

export default About;