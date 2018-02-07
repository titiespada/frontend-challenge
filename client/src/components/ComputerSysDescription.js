import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PrettyKeyValue from './PrettyKeyValue';
import '../css/style.css';

/**
 * Component responsible to present the basic information of the selected computer system.
 */
const ComputerSysDescription = ({data}) => {

	/**
	 * Render some of the details
	 * @param object details 
	 * @param int from 
	 * @param int to 
	 */
	const renderFragment = (computerSystem, from, to) => {
		return Object.keys(computerSystem).map(function(key, index) {
			if (index >= from && index < to) {
				return (<PrettyKeyValue key={key} dataKey={key} dataValue={computerSystem[key]} />);
			} else {
				return null;
			}
		});
	}

	const length = Object.keys(data).length;
	const splitIndex = length/2;
	return (
		<Grid className="row-description">
			<Row>
				<Col sm={6} md={6}>{renderFragment(data, 0, splitIndex)}</Col>
				<Col sm={6} md={6}>{renderFragment(data, splitIndex, length)}</Col>
			</Row>
		</Grid>
	);
}

export default ComputerSysDescription;
