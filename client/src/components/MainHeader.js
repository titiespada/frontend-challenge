import React from 'react';
import { PageHeader } from 'react-bootstrap';

/**
 * Display a simple Header information.
 */
const MainHeader = () => 
	<PageHeader bsClass="page-header">
		Computer Systems Listing App
		<br/><small>Simple UI for listing computer systems and their specifications.</small>
	</PageHeader>;

export default MainHeader;
