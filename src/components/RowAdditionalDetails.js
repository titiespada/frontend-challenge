import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PrettyKeyValue from './PrettyKeyValue';
import '../css/style.css';
import jsonAdditionalDetails from '../static/system-details.json';

class RowAdditionalDetails extends Component {

	renderFragment(details, from, to) {
		return Object.keys(details).map(function(key, index) {
			if (index >= from && index < to) {
				return (<PrettyKeyValue key={key} dataKey={key} dataValue={details[key]} />);
			} else {
				return null;
			}
		});
	};

	render() {
    	const rowId = this.props.data;
		const addDetails = jsonAdditionalDetails.return.find(function(obj) {
			return obj[rowId] !== undefined;
		});
		if (addDetails === undefined) {
			return (
				<Grid>
					<Row >
						<Col xsOffset={1} smOffset={1} mdOffset={1} className="row-additional-details">
							<strong>No additional information found!</strong>
						</Col>
					</Row>
				</Grid>
			);
		} else {
			const detailsLength = Object.keys(addDetails[rowId]).length;
			const splitIndex = detailsLength/2;
			return (
				<Grid className="row-additional-details">
					<Row>
						<Col sm={6} md={6}>{this.renderFragment(addDetails[rowId], 0, splitIndex)}</Col>
						<Col sm={6} md={6}>{this.renderFragment(addDetails[rowId], splitIndex, detailsLength)}</Col>
					</Row>
				</Grid>
			);
		}
	}
}

export default RowAdditionalDetails;
