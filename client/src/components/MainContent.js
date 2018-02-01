import React, { Component } from 'react';
import ComputerSysDataTable from './ComputerSysDataTable';
import ComputerSysContainer from './ComputerSysContainer';
import { Grid, Row, Col } from 'react-bootstrap';
import '../css/style.css';

/**
 * Main component to display the application content.
 */
class MainContent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isRowSelected: false,
			row: null
		};    
	};
	
	/**
	 * Handle the selection of a row in the ComputerSysDataTable component. By transfering this 
	 * data we can then load the ComputerSysContainer component.
	 */
	onRowSelectCallback = (isRowSelected, row) => {
		this.setState({
			isRowSelected: isRowSelected,
			row: row
		});
	};

	render() {
		const computerSystems = this.props.data;
		return (
			<Grid bsClass="main-content">
					<Row>
						<Col mdOffset={1} md={10}>
							<ComputerSysDataTable data={computerSystems} callbackFromParent={this.onRowSelectCallback} />
						</Col>
					</Row>
					<Row>
						<Col mdOffset={1} md={10}>
							{this.state.isRowSelected ? <ComputerSysContainer data={this.state.row} /> : <strong>Select a computer system from the above table.</strong>}
						</Col>
					</Row>
			</Grid>
		);
  }
}

export default MainContent;
