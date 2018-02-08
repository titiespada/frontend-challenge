import React, { Component } from 'react';
import LoadingSpinner from './LoadingSpinner';
import SomethingWentWrongError from './SomethingWentWrongError';
import Websocket from 'react-websocket';
import ComputerSysDataTable from './ComputerSysDataTable';
import ComputerSysContainer from './ComputerSysContainer';
import { WS_URL, fetchAllComputerSystems } from '../js/ApiHelper';
import { Grid, Row, Col } from 'react-bootstrap';
import { chartColors, getProvisionStateInfo } from '../js/ProvisionStateChartUtil';
import rd3 from 'rd3';
import moment from 'moment';

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
		var lastUpdate = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
		if (this.state.isRowSelected) {
			this.setState({computerSystems: results[0].systems, updateSelectedRow: true, lastUpdate: lastUpdate});
		} else {
			this.setState({computerSystems: results[0].systems, updateSelectedRow: false, lastUpdate: lastUpdate});
		}
	}

	render() {
		const {status, computerSystems, isLoading, updateSelectedRow, lastUpdate} = this.state;

		let pageContent = null;
		if (isLoading) {
			pageContent = <LoadingSpinner isLoading={isLoading} />;
		} else if (status === 'success') {
			pageContent =
				<div>
					<Row name="pieChart">
						<Col mdOffset={1} md={10} className="last-update-info">
							<strong>Last update: </strong>{lastUpdate}
						</Col>
					</Row>
					<Websocket url={WS_URL} onMessage={this.handleData.bind(this)} reconnect={true}/>
					<Row>
						<Col className="provision-state-chart">
							<PieChart data={getProvisionStateInfo(computerSystems)} width={450} height={400} radius={150} innerRadius={90} sectorBorderColor="white" colors={chartColors} />
						</Col>
					</Row>
					<Row name="dataTable">
						<Col mdOffset={1} md={10}>
							<ComputerSysDataTable data={computerSystems} callbackFromParent={this.onRowSelectCallback} updateSelectedRow={updateSelectedRow} />
						</Col>
					</Row>
					<Row name="moreInfo">
						<Col mdOffset={1} md={10}>
							{this.state.isRowSelected ? <ComputerSysContainer data={this.state.row} /> : <strong>Select a computer system from the above table.</strong>}
						</Col>
					</Row>
				</div>;
		} else {
			pageContent = <SomethingWentWrongError />;
		}

		return (
			<Grid bsClass="main-content" id="mainContent">
				{pageContent}
			</Grid>
		);
  	}
}

export default MainContent;
