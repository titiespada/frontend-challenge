import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PrettyKeyValue from './PrettyKeyValue';
import '../css/style.css';

class RowDescription extends Component {

	renderFragment(computerSystem, from, to) {
		return Object.keys(computerSystem).map(function(key, index) {
			if (index >= from && index < to) {
				return (<PrettyKeyValue key={key} dataKey={key} dataValue={computerSystem[key]} />);
			} else {
				return null;
			}
		});
	};

	render() {
		const computerSystem = this.props.data;
		const length = Object.keys(computerSystem).length;
		const splitIndex = length/2;
		return (
			<Grid className="row-description">
				<Row>
					<Col md={6}>{this.renderFragment(computerSystem, 0, splitIndex)}</Col>
					<Col md={6}>{this.renderFragment(computerSystem, splitIndex, length)}</Col>
				</Row>
			</Grid>
		);
	}
}

export default RowDescription;
