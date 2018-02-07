import React from 'react';
import ComputerSysDescription from './ComputerSysDescription';
import ComputerSysMoreDetails from './ComputerSysMoreDetails';
import {Tabs, Tab } from 'react-bootstrap';
import '../css/style.css';

/**
 * Component to show the selected computer system information.
 */
const ComputerSysContainer = ({data}) => 
	<Tabs defaultActiveKey={1} id="row-container-tabs" className="row-container-tabs">
		<Tab eventKey={1} title="Description">
			<ComputerSysDescription data={data} />
		</Tab>
		<Tab eventKey={2} title="More details">
			<ComputerSysMoreDetails data={data.id} />
		</Tab>
	</Tabs>;

export default ComputerSysContainer;
