import React, { Component } from 'react';
import logo from '../logo.svg';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css';
import '../App.css';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar inverse fixedTop collapseOnSelect className="App-navbar">
        <Navbar.Header>
          <Navbar.Brand>
              <a href="#brand" className="App-brand-link">
                  <img src={logo} width="30" height="30" className="App-logo" alt="" />
                  Computer-System
              </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
              <NavItem eventKey={1} href="https://github.com/titiespada/frontend-challenge" className="App-github">  
                Git Hub
                <FontAwesome className="super-crazy-colors" name='external-link' />
              </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
