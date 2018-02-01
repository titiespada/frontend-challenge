import React, { Component } from 'react';
import { fetchComputerSystemDetails } from '../js/ApiHelper';
import { Grid, Row, Col } from 'react-bootstrap';
import PrettyKeyValue from './PrettyKeyValue';
import { ClipLoader } from 'react-spinners';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css';
import '../css/style.css';

/**
 * Component to display the additional details of the selected computer system.
 */
class ComputerSysMoreDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			details: [],
			isLoading: false
		};    
	}

	/**
	 * First requests the server to grab the computer system details.
	 */
	componentDidMount() {
		this.setState({isLoading: true});
		this.getComputerSystemDetails(this.props.data);
	}

	/**
	 * Following requests the server to grab the computer system details.
	 */
	componentWillReceiveProps(nextProps) {
		if (nextProps.data !== this.props.data) {
			this.setState({isLoading: true});
			this.getComputerSystemDetails(nextProps.data);
		}
	}

	/**
	 * Fetch the computer system details.
	 * @param string id 
	 */
	getComputerSystemDetails(id) {
		fetchComputerSystemDetails(id)
			.then(data => this.setState({status: 'success', details: data, isLoading: false}))
			.catch(error => this.setState({status: 'error', details: [], isLoading: false}));
	}

	/**
	 * Render some of the details
	 * @param object details 
	 * @param int from 
	 * @param int to 
	 */
	renderFragment(details, from, to) {
		return Object.keys(details).map(function(key, index) {
			if (index >= from && index < to) {
				return (<PrettyKeyValue key={key} dataKey={key} dataValue={details[key]} />);
			} else {
				return null;
			}
		});
	}

	render() {
		const {status, details, isLoading} = this.state;

		if (isLoading) {
			return (
				<Grid bsClass="row-additional-details">
					<Row>
						<Col className="loader">
							<ClipLoader color={'#34b7b6'} size={100} loading={isLoading} />
						</Col>
					</Row>
				</Grid>
			);
		}
		if (status === 'error') {
			return (
				<Grid bsClass="row-additional-details">
					<Row>
						<Col className="loader">
							<FontAwesome className="loader-error" name='exclamation-circle' size='5x' />
							<br/>
							<strong>Oops! Something went wrong.</strong>
						</Col>
					</Row>
				</Grid>
			);
		}
		if (Object.keys(details).length === 0) {
			return (
				<Grid>
					<Row >
						<Col xsOffset={1} smOffset={1} mdOffset={1} className="row-additional-details">
							<strong>No additional information found!</strong>
						</Col>
					</Row>
				</Grid>
			);
		}

		const detailsLength = Object.keys(details).length;
		const splitIndex = detailsLength/2;
		return (
			<Grid className="row-additional-details">
				<Row>
					<Col sm={6} md={6}>{this.renderFragment(details, 0, splitIndex)}</Col>
					<Col sm={6} md={6}>{this.renderFragment(details, splitIndex, detailsLength)}</Col>
				</Row>
			</Grid>
		);
	}
}

export default ComputerSysMoreDetails;
