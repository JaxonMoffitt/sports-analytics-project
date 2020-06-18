import React from 'react';
import headerImage from '../photos/tackle.jpg';
import receptions from '../photos/av-game-rec.png';
import weight from '../photos/av-game-weight.png';
import passAtt from '../photos/av-pass-att.png';
import passYd from '../photos/av-pass-yd.png';
import tack from '../photos/av-tack.png';
import defl from '../photos/av-pass-defl.png';
import olbDist from '../photos/dist-olb.png';
import qbDist from '../photos/dist-qb.png';
import wrDist from '../photos/dist-wr.png';

import './About.css'

function About() {
  return (
    <span>
        <div style={{display: 'flex',  justifyContent:'center'}} >
            <h1>Navigating the NFL Draft With Data Science</h1>
        </div>

        <div style={{display: 'flex', justifyContent:'center'}} >
            <h4>Calculating a college player's future value in the NFL</h4>
        </div>

        <div style={{display: 'flex', justifyContent:'center'}} >
            <p className="line"></p>
        </div>

        <div style={{display: 'flex', justifyContent:'center', paddingBottom:'15px'}} >
            <h6>By: Scott Gill | Jaxon Moffitt | Ryan Skalla</h6>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <img src={headerImage} className="App-logo align" alt="logo" width='100%' height='50%'/>
        </div>

        {/* INTRODUCTION */}
        <div style={{display: 'flex',  justifyContent:'center'}} >
            <h2 className="header-text">Introduction</h2>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            As April rolls around every year, NFL team general managers and owners begin to sweat for many reasons: How should they approach free agency? How will they afford to re-sign their current players? And perhaps most importantly, who should they select in the upcoming NFL draft? Among a sea of prospects to choose from, it can be impossible at times to determine who has separated themselves from the pack of premier athletes. We decided to tackle the question ourselves and analyze how incoming draft picks’ college statistics and measurements at the NFL Combine could predict their value to their future team. While many teams utilize advanced statistics within their organizational decision-making, we figured few teams had actually built models using the available data to judge which players might have the brightest futures. Using statistical modeling, we would try to identify trends within our past data to see if there were any specific indicators of certain statistics to heavily weigh within a team’s choice of draft pick.
            </p>
        </div>

        {/* METHODOLOGY */}
        <div style={{display: 'flex',  justifyContent:'center'}} >
            <h2 className="header-text">Methodology</h2>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
                The definition of a successful player is often a very arbitrary matter within the NFL, so we decided to utilize a well-respected site’s definition: Pro-Football-Reference.com’s metric of Average Value. Their formula consists of a few different levels, but essentially assigns a value to each player based on the points, yards, and possessions they are responsible for within a game. It serves a similar purpose to the win shares statistic that has become prevalent in some of the other major sports.        
            </p>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
                If you want to learn more about the Average Value metric, check out <a href="https://www.pro-football-reference.com/blog/index37a8.html">Pro Football Reference's Writeup</a> explaining the nitty gritty details about the metric and how it's calculated.
            </p>
        </div>
        


        {/* GATHERING THE DATA */}
        <div style={{display: 'flex',  justifyContent:'center'}} >
            <h2 className="header-text">Gathering the Data</h2>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
                A quick google search will return more football data than most people would ever care to look through. The problem we ran into wasn’t finding the data, but transforming it into clean and usable files. We used Pro-Football-Reference.com to get our data, and then used Python to create a web-scraper that pulled it into neatly organized csv files. 
            </p>
        </div>
        
        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
                Due to the nature of our data, we decided to focus our analysis on three position groups: quarterback, the widely-believed most valuable position to any team; wide receiver, a random skill-position player from the offense; lastly outside linebacker, a random skill-position player from the defense. Keying in on these three position groups allowed for a deeper analysis since each group would require a different model to predict their average value.
            </p>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            The distributions for each of the position groups’ career average value were all extremely right skewed. This makes sense, because according to the NFL Players’ Association the average career length of an NFL player is 3.3 years. This meant that most players fizzle out of the league before being able to greatly contribute to a team and record a higher average value for their career. With that being said, we decided to branch from that metric and create our own: Average Value per games played. This allowed us to meet more of our assumptions for linear regression and not perform as many transformations upon the data. To the right are the associated distributions for each position group:            </p>
        </div>

        {/* DISTRIBUTION IMAGES */}

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <img src={qbDist} className="inline-image-3 align" alt="logo" width='100%' height='50%'/>
            <img src={wrDist} className="inline-image-3 align" alt="logo" width='100%' height='50%'/>
            <img src={olbDist} className="inline-image-3 align" alt="logo" width='100%' height='50%'/>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            The mean average value is clearly different for each position group, along with the spread. As they do on the field, a few players distanced themselves from the histogram: Patrick Mahomes, Michael Thomas, Julio Jones, and Von Miller all are classified as the cream of the crop at their respective position, and it was represented within our analysis.            </p>
        </div>


        {/* ANALYSIS */}

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <h2 className="header-text">Analysis</h2>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            Using multivariable linear regression and variable selection methods, we were able to determine which college statistics and NFL Combine metrics were most useful in predicting a player’s NFL average value. There were over 70 variables we collected, and using sequential replacement and the best subset method, R extracted the most accurate linear model for each position. From there, we built confidence and prediction intervals to help visualize the relationships between the most significant variables and our response variable. The associated analysis for each position group is displayed below:
            </p>
        </div>


        {/* QUARTERBACKS */}
        <div style={{display: 'flex',  justifyContent:'center'}} >
            <h3 className="subheader-text">Quarterbacks</h3>
        </div>

        {/* IMAGES */}
        <div style={{display: 'flex',  justifyContent:'center'}} >
            <img src={passAtt} className="inline-image-2 align" alt="logo" width='100%' height='50%'/>
            <img src={passYd} className="inline-image-2 align" alt="logo" width='100%' height='50%'/>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <h3 className="subsubheader-text">Model</h3>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            -	Predictor Variables: Pass yds/att., adj. pass yds/att., total passing yards            
            </p>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            -	Metrics: .763 adjusted R-squared, 5.66 mean squared error            
            </p>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <h3 className="subsubheader-text">Takeaways</h3>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            -	We were pleased to discover this model within our data since yards per attempt is often the most used statistic to evaluate and compare quarterbacks            
            </p>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            -	Passing yards produced a wide prediction band, indicating that there are many quarterbacks who threw for tons of yards in college most likely due to playing in pass-heavy systems            
            </p>
        </div>


        {/* WIDE RECEIVERS */}
                <div style={{display: 'flex',  justifyContent:'center'}} >
            <h3 className="subheader-text">Wide Receivers</h3>
        </div>

        {/* IMAGES */}
        <div style={{display: 'flex',  justifyContent:'center'}} >
            <img src={weight} className="inline-image-2 align" alt="logo" width='100%' height='50%'/>
            <img src={receptions} className="inline-image-2 align" alt="logo" width='100%' height='50%'/>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <h3 className="subsubheader-text">Model</h3>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            -	Predictor Variables: Receptions (most significant), weight, vertical
            </p>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            -	Metrics: .769 adjusted R-squared, .77 mean squared error
            </p>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <h3 className="subsubheader-text">Takeaways</h3>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            -	Wide receiver is often discussed as the most volatile position group to select when drafting.         
            </p>
            </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            -	While receptions may be a strong predictor in our model, one would not be wise to select a certain receiver over another because they x amount of receptions
            </p>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            -	Weight and vertical were both included in the model, however were not as significant in developing a strong relationship
            </p>
        </div>
       

        {/* OUTSIDE LINEBACKERS */}
        <div style={{display: 'flex',  justifyContent:'center'}} >
            <h3 className="subheader-text">Outside Linebackers</h3>
        </div>

        {/* IMAGES */}
        <div style={{display: 'flex',  justifyContent:'center'}} >
            <img src={tack} className="inline-image-2 align" alt="logo" width='100%' height='50%'/>
            <img src={defl} className="inline-image-2 align" alt="logo" width='100%' height='50%'/>
        </div>


        <div style={{display: 'flex',  justifyContent:'center'}} >
            <h3 className="subsubheader-text">Model</h3>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            -	Predictor Variables: tackles for loss (most significant), pass deflections, and solo tackles            </p>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            -	Metrics: .572 adjusted R-squared, 1.87 mean squared error
            </p>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <h3 className="subsubheader-text">Takeaways</h3>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            -	Tackles for loss and pass deflections were by far the two most significant raw statistics to weigh when viewing linebackers            </p>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            -	Due to the nature of outside linebackers shifting playstyle, but we were pleased to discover three versatile indicators of what predicts higher average value            </p>
        </div>



        {/* LIMITATIONS */}

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <h2 className="header-text">Limitations</h2>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            Before beginning our analysis, we recognized there would be several limitations to overcome:            
            </p>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            1.	Pro Football Reference’s average value metric isn’t perfect. There is no definitive proof that a player with a higher average value than another is factually better than the other.            </p>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            2.	Due to the nature of football and its diversity of players and position groups, it is virtually unfeasible to normalize the data between position groups. For example, you can’t compare the statistics between a cornerback and an offensive lineman and assert who is better in a vacuum.            </p>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            3.	The data we collected would ignore much of the context that goes into making a draft pick. Oftentimes a player is selected based on where they played in college, how they performed in big games, and what a team needs by position. We would just be using raw statistics to evaluate how a player performed during their college careers.            </p>
        </div>


        {/* CONCLUSIONS */}

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <h2 className="header-text">Conclusions</h2>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            We started this project with the ambitious goal of building a tool to help any given NFL team determine which player out of the draft pool would be the most beneficial to their team, according to their needs and strengths of the players. Given more time, we would have loved to accomplish that goal. While the scope of the project changed throughout our research, we feel our analysis makes significant headway towards that original vision. We were able to identify positive correlations between college and combine statistics and their future performance in the NFL, and we were able to identify which of those statistics are the most important for 3 key position groups.             
            </p>
        </div>
        
        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            Using our analysis of the data, we were able to put together a calculator that will predict a Quarterback, Wide Receiver or Outside Linebacker’s success in the NFL before they play a single game. This can be used by general managers and coaches to compare two potential prospects in a new way, and to identify possible factors they might not have considered as heavily. It can also give fans the chance to see how their teams pick will perform in the future. Click on the links in the navbar above to test the calculator!
            </p>
        </div>

        <div style={{display: 'flex',  justifyContent:'center'}} >
            <p className="body-text">
            While we can’t guarantee 100% accuracy of our models, we are proud of our results and feel that they are valuable in the conversation about potential NFL draft picks, and that our analysis represents the beginning of the potential for much more in-depth analysis of what makes a “good draft pick”            </p>
        </div>
        
        <div style={{display: 'flex',  justifyContent:'center', height: '500px'}} >
            <p></p>
        </div>
    </span>
  );
}

export default About;