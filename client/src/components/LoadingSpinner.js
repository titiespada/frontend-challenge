import React from 'react';
import { ClipLoader } from 'react-spinners';
import { Row, Col } from 'react-bootstrap';

const LoadingSpinner = ({isLoading}) =>
    <Row>
		<Col className="loader">
			<ClipLoader color={'#34b7b6'} size={100} loading={isLoading} />
	    </Col>
    </Row>;

export default LoadingSpinner;