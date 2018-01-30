import React, { Component } from 'react';
import logo from '../static/logo.svg';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css';
import '../css/style.css';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar inverse fixedTop collapseOnSelect className="navigation-bar">
        <Navbar.Header>
          <Navbar.Brand>
              <a href="#brand" className="brand-link">
                  <img src={logo} width="30" height="30" className="logo" alt="" />
                  Computer-System
              </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
              <NavItem eventKey={1} href="https://github.com/titiespada/frontend-challenge" className="github">  
                Git Hub
                <FontAwesome name='external-link' />
              </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
