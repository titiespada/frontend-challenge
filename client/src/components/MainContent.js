import React, { Component } from 'react';
import ComputerSysDataTable from './ComputerSysDataTable';
import ComputerSysContainer from './ComputerSysContainer';
import { fetchAllComputerSystems } from '../js/ApiHelper';
import { Grid, Row, Col } from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css';
import '../css/style.css';

/**
 * Main component to display the application content.
 */
class MainContent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			computerSystems: [],
			isLoading: false,
			isRowSelected: false,
			row: null
		};    
	};

	/**
	 * Requests the server to grab the computer systems list.
	 */
	componentDidMount() {
		this.setState({isLoading: true});

		fetchAllComputerSystems()
			.then(data => this.setState({status: 'success', computerSystems: data[0].systems, isLoading: false}))
			.catch(error => this.setState({status: 'error', isLoading: false}));
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
		const {status, computerSystems, isLoading} = this.state;

		if (isLoading) {
			return (
				<Grid bsClass="main-content">
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
				<Grid bsClass="main-content">
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
