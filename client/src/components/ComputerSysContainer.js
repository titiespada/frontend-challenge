import React, { Component } from 'react';
import ComputerSysDescription from './ComputerSysDescription';
import ComputerSysMoreDetails from './ComputerSysMoreDetails';
import {Tabs, Tab } from 'react-bootstrap';
import '../css/style.css';

/**
 * Component to show the selected computer system information.
 */
class ComputerSysContainer extends Component {

	render() {
		const row = this.props.data;
		return (
			<Tabs defaultActiveKey={1} id="row-container-tabs" className="row-container-tabs">
				<Tab eventKey={1} title="Description">
					<ComputerSysDescription data={row} />
				</Tab>
				<Tab eventKey={2} title="More details">
					<ComputerSysMoreDetails data={row.id} />
				</Tab>
			</Tabs>
		);
	}
}

export default ComputerSysContainer;
