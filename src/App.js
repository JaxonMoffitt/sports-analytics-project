import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import OLB_tile from './Components/OLB_tile';
import QB_tile from './Components/QB_tile';
import WR_tile from './Components/WR_tile';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Route path='/about' component={About} />
      <Route path='/offensive-linebacker' component={OLB_tile} />
      <Route path='/quarterback' component={QB_tile} />
      <Route path='/wide-receiver' component={WR_tile} />
    </BrowserRouter>
  );
}

export default App;
