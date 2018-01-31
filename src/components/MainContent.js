import React, { Component } from 'react';
import DataTable from './DataTable';
import RowContainer from './RowContainer';
import { Grid, Row, Col } from 'react-bootstrap';
import '../css/style.css';

class MainContent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isRowSelected: false,
			row: null
		};    
	};
	
	myCallback = (isRowSelected, row) => {
		this.setState({
			isRowSelected: isRowSelected,
			row: row
		});
	};

	render() {
		const computerSystems = this.props.data;
    return (
      <Grid bsClass="main-content">
				<Row>
					<Col mdOffset={1} md={10}>
						<DataTable data={computerSystems} callbackFromParent={this.myCallback} />
					</Col>
				</Row>
				<Row>
					<Col mdOffset={1} md={10}>
						{this.state.isRowSelected ? <RowContainer data={this.state.row} /> : <strong>Select a computer system from the above table.</strong>}
					</Col>
				</Row>
      </Grid>
    );
  }
}

export default MainContent;
