import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import { OLB_tile } from './Components/OLB_tile';
import { QB_tile } from './Components/QB_tile';
import { WR_tile } from './Components/WR_tile';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Route exact path='/' component={About} />
  <Route path='/outside-linebacker' render={(props) => <OLB_tile {...props} />} />
      <Route path='/quarterback' render={(props) => <QB_tile {...props} />} />
      <Route path='/wide-receiver' render={(props) => <WR_tile {...props} />} />
    </BrowserRouter>
  );
}

export default App;
