import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css';

const SomethingWentWrongError = () =>
	<Row>
		<Col className="loader">
			<FontAwesome className="loader-error" name='exclamation-circle' size='5x' />
				<br/>
				<strong>Oops! Something went wrong.</strong>
			</Col>
	</Row>;

export default SomethingWentWrongError;