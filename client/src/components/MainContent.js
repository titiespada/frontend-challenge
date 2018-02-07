import React, { Component } from 'react';
import Websocket from 'react-websocket';
import ComputerSysDataTable from './ComputerSysDataTable';
import ComputerSysContainer from './ComputerSysContainer';
import { WS_URL, fetchAllComputerSystems } from '../js/ApiHelper';
import { Grid, Row, Col } from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';
import { chartColors, getProvisionStateInfo } from '../js/ProvisionStateChartUtil';
import rd3 from 'rd3';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css';
import '../css/style.css';

const PieChart = rd3.PieChart;

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
			row: null,
			updateSelectedRow: false
		};    
	}

	/**
	 * Requests the server to grab the computer systems list.
	 */
	componentDidMount() {
		this.setState({isLoading: true});

		fetchAllComputerSystems(
			(data) => this.setState({status: 'success', computerSystems: data[0].systems, isLoading: false}),
			(error) => this.setState({status: 'error', isLoading: false}));
	}
	
	/**
	 * Handle the selection of a row in the ComputerSysDataTable component. By transfering this 
	 * data we can then load the ComputerSysContainer component.
	 */
	onRowSelectCallback = (isRowSelected, row) => {
		this.setState({
			isRowSelected: isRowSelected,
			row: row,
			updateSelectedRow: false
		});
	}

	handleData(data) {
		const results = JSON.parse(data);
		if (this.state.isRowSelected) {
			this.setState({computerSystems: results[0].systems, updateSelectedRow: true});
		} else {
			this.setState({computerSystems: results[0].systems, updateSelectedRow: false});
		}
	}

	render() {
		const {status, computerSystems, isLoading, updateSelectedRow} = this.state;

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
				<Websocket url={WS_URL} onMessage={this.handleData.bind(this)}/>
				<Row>
					<Col className="provision-state-chart">
						<PieChart data={getProvisionStateInfo(computerSystems)} width={450} height={400} radius={150} innerRadius={90} sectorBorderColor="white" colors={chartColors} />
					</Col>
				</Row>
				<Row>
					<Col mdOffset={1} md={10}>
						<ComputerSysDataTable data={computerSystems} callbackFromParent={this.onRowSelectCallback} updateSelectedRow={updateSelectedRow} />
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
