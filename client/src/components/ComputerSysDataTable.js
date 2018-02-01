import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Moment from 'react-moment';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../css/style.css';

/**
 * Component to display a datatable with all computer systems.
 */
class ComputerSysDataTable extends Component {

	/**
	 * Format a Date element from the datatable.
	 * @param int cell 
	 * @param object row 
	 */
	tableDateFormat(cell, row) {
		return (
			<Moment format="YYYY-MM-DD HH:mm" date={ new Date(cell) } />
		);
	};

	/**
	 * Handle the selection of a row.
	 */
	onRowSelect = (row, isSelected, e) => {
		this.props.callbackFromParent(isSelected, row);
	};

	render() {
		const computerSystems = this.props.data;
		if (computerSystems == null) {
			return null;
		}
		const tableOptions = {
			noDataText: 'There are no computer systems available!',
			defaultSortName: 'id',
			defaultSortOrder: 'asc',
			sizePerPageList: [
				{text: '5', value: 5},
				{text: '10', value: 10},
				{text: '50', value: 50}
			],
			sizePerPage: 5,
			pageStartIndex: 1,
			paginationSize: 3,
			prePage: 'Prev',
			nextPage: 'Next',
			firstPage: 'First',
			lastPage: 'Last'
		};
		
		const selectRowProp = {
			mode: 'radio',
			bgColor: '#f5f5f5',
			clickToSelect: true,
			onSelect: this.onRowSelect
		};

	return (
			<BootstrapTable
				data={computerSystems}
				options={tableOptions}
				selectRow={selectRowProp}
				hover pagination search>
					<TableHeaderColumn width='100' dataField='id' isKey dataSort>ID</TableHeaderColumn>
					<TableHeaderColumn width='85' dataField='org_id' dataSort>Org ID</TableHeaderColumn>
					<TableHeaderColumn width='150' dataField='digital_server_id' dataSort>Digital Server ID</TableHeaderColumn>
					<TableHeaderColumn width='150' dataField='server_arch_id' dataSort>Server Arch ID</TableHeaderColumn>
					<TableHeaderColumn width='100' dataField='os' dataSort>OS</TableHeaderColumn>
					<TableHeaderColumn width='100' dataField='release' dataSort>Release</TableHeaderColumn>
					<TableHeaderColumn width='200' dataField='name' dataSort>Name</TableHeaderColumn>
					<TableHeaderColumn width='300' dataField='description' dataSort>Description</TableHeaderColumn>
					<TableHeaderColumn width='70' dataField='info' dataSort>Info</TableHeaderColumn>
					<TableHeaderColumn width='300' dataField='secret' dataSort>Secret</TableHeaderColumn>
					<TableHeaderColumn width='110' dataField='creator_id' dataSort>Creator ID</TableHeaderColumn>
					<TableHeaderColumn width='150' dataField='auto_update' dataSort>Auto Update</TableHeaderColumn>
					<TableHeaderColumn width='200' dataField='contact_method_id' dataSort>Contact Method ID</TableHeaderColumn>
					<TableHeaderColumn width='150' dataField='running_kernel' dataSort>Running Kernel</TableHeaderColumn>
					<TableHeaderColumn width='130' dataField='last_boot' dataFormat={this.tableDateFormat} dataSort>Last Boot</TableHeaderColumn>
					<TableHeaderColumn width='160' dataField='provision_state_id' dataSort>Provision State ID</TableHeaderColumn>
					<TableHeaderColumn width='170' dataField='channels_changed' dataFormat={this.tableDateFormat} dataSort>Channels Changed</TableHeaderColumn>
					<TableHeaderColumn width='130' dataField='cobbler_id' dataSort>Cobbler ID</TableHeaderColumn>
					<TableHeaderColumn width='200' dataField='machine_id' dataSort>Machine ID</TableHeaderColumn>
					<TableHeaderColumn width='150' dataField='hostname' dataSort>Hostname</TableHeaderColumn>
					<TableHeaderColumn width='130' dataField='created' dataFormat={this.tableDateFormat} dataSort>Created</TableHeaderColumn>
					<TableHeaderColumn width='130' dataField='modified' dataFormat={this.tableDateFormat} dataSort>Modified</TableHeaderColumn>
			</BootstrapTable>
		);
	}
}

export default ComputerSysDataTable;
