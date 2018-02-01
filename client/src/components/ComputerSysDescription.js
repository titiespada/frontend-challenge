import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PrettyKeyValue from './PrettyKeyValue';
import '../css/style.css';

/**
 * Component responsible to present the basic information of the selected computer system.
 */
class ComputerSysDescription extends Component {

	/**
	 * Render some of the details
	 * @param object details 
	 * @param int from 
	 * @param int to 
	 */
	renderFragment(computerSystem, from, to) {
		return Object.keys(computerSystem).map(function(key, index) {
			if (index >= from && index < to) {
				return (<PrettyKeyValue key={key} dataKey={key} dataValue={computerSystem[key]} />);
			} else {
				return null;
			}
		});
	}

	render() {
		const computerSystem = this.props.data;
		const length = Object.keys(computerSystem).length;
		const splitIndex = length/2;
		return (
			<Grid className="row-description">
				<Row>
					<Col sm={6} md={6}>{this.renderFragment(computerSystem, 0, splitIndex)}</Col>
					<Col sm={6} md={6}>{this.renderFragment(computerSystem, splitIndex, length)}</Col>
				</Row>
			</Grid>
		);
	}
}

export default ComputerSysDescription;
