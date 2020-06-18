import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import './Nav.css'
import * as ReactBootstrap from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <span>
      <ReactBootstrap.Navbar className="color-nav" variant="dark" expand="lg">
      <ReactBootstrap.Navbar.Brand className="navbar-brand" href="/">NFL Draftee Future Value Calculator</ReactBootstrap.Navbar.Brand>
      <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
      <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">
          <ReactBootstrap.Nav.Link href="/">About</ReactBootstrap.Nav.Link>
          <ReactBootstrap.NavDropdown title="Calculator" id="basic-nav-dropdown">
            <ReactBootstrap.NavDropdown.Item href="/quarterback">Quarterback</ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="/outside-linebacker">Outside Linebacker</ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="/wide-receiver">Wide Receiver</ReactBootstrap.NavDropdown.Item>
          </ReactBootstrap.NavDropdown>
          </ReactBootstrap.Nav>
      </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </span>
  );
}

export default Nav;