import React from 'react';
import logo from '../static/logo.svg';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css';
import Scroll from 'react-scroll';

var Link = Scroll.Link;

/**
 * Create the navigation bar.
 */
const NavigationBar = () =>
	<Navbar inverse fixedTop collapseOnSelect className="navigation-bar">
		<Navbar.Header>
			<Navbar.Brand>
				<a href="#brand" className="brand-link">
					<img src={logo} width="30" height="30" className="logo" alt="" />
					Computer-Systems
				</a>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<ul className="nav navbar-nav">
				<li className="navigation-link"><Link to="pieChart" spy={true} smooth={true} duration={250} offset={-60}>Pie Chart</Link></li>
				<li className="navigation-link"><Link to="dataTable" spy={true} smooth={true} duration={250} offset={-60}>Data Table</Link></li>
				<li className="navigation-link"><Link to="moreInfo" spy={true} smooth={true} duration={250} offset={-60}>More Info</Link></li>
			</ul>
			<Nav pullRight>
				<NavItem eventKey={1} href="https://github.com/titiespada/frontend-challenge" className="github">  
					Git Hub
					<FontAwesome name='external-link' />
				</NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>;

export default NavigationBar;
