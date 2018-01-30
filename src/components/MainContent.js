import React, { Component } from 'react';
import ExpandRow from './ExpandRow';
import { Grid, Row, Col } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Moment from 'react-moment';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../css/style.css';
import jsonComputerSystems from '../static/systems-short-list.json';

var computerSystems = jsonComputerSystems[0].systems;

class MainContent extends Component {

	tableDateFormat(cell, row) {
		return (
			<Moment format="YYYY-MM-DD HH:mm" date={ new Date(cell) } />
		);
	};

	isExpandableRow(row) {
    	return true;
  	};

	expandComponent(row) {
    	return (
      		<ExpandRow data={ row } />
    	);
	};
	  
	expandColumnComponent({ isExpandableRow, isExpanded }) {	
		if (isExpandableRow) {
			if (isExpanded) {
				return (
					<FontAwesome className="expand-minimize-btn" name='minus' />
				);
			} else {
				return (
					<FontAwesome className="expand-minimize-btn" name='plus' />
				);
			}
		}
	  }

	render() {
    	const tableOptions = {
      		noDataText: 'There are no computer systems available!',
			defaultSortName: 'id',
			defaultSortOrder: 'asc',
      		sizePerPageList: [
				{text: '5', value: 5},
				{text: '10', value: 10},
				{text: 'All', value: computerSystems.length}
			],
      		sizePerPage: 5,
      		pageStartIndex: 0,
      		paginationSize: 3,
      		prePage: 'Prev',
      		nextPage: 'Next',
      		firstPage: 'First',
			lastPage: 'Last',
			expandRowBgColor: '#34b7b6'
    	};

    	return (
      		<Grid bsClass="main-content">
				<Row>
					<Col mdOffset={1} md={10}>
						<BootstrapTable
							data={ computerSystems }
							options={ tableOptions }
							expandableRow={ this.isExpandableRow }
							expandComponent={ this.expandComponent }
							expandColumnOptions={ {
								expandColumnVisible: true,
								expandColumnComponent: this.expandColumnComponent,
								columnWidth: 30
							  } }
							pagination search>
							<TableHeaderColumn width='75' dataField='id' isKey dataSort>ID</TableHeaderColumn>
							<TableHeaderColumn width='75' dataField='release' dataSort>Release</TableHeaderColumn>
							<TableHeaderColumn width='150' dataField='name' dataSort>Name</TableHeaderColumn>
							<TableHeaderColumn width='250' dataField='description' dataSort>Description</TableHeaderColumn>
							<TableHeaderColumn width='150' dataField='hostname' dataSort>Hostname</TableHeaderColumn>
							<TableHeaderColumn width='100' dataField='created' dataFormat={ this.tableDateFormat } dataSort>Created</TableHeaderColumn>
							<TableHeaderColumn width='100' dataField='modified' dataFormat={ this.tableDateFormat } dataSort>Modified</TableHeaderColumn>
						</BootstrapTable>
					</Col>
				</Row>
      		</Grid>
    	);
  	}
}

export default MainContent;
