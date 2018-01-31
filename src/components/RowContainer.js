import React, { Component } from 'react';
import RowDescription from './RowDescription';
import RowAdditionalDetails from './RowAdditionalDetails';
import {Tabs, Tab } from 'react-bootstrap';
import '../css/style.css';

class RowContainer extends Component {

	render() {
		const row = this.props.data;
    return (
      <Tabs defaultActiveKey={1} id="row-container-tabs" className="row-container-tabs">
  			<Tab eventKey={1} title="Description">
					<RowDescription data={row} />
  			</Tab>
  			<Tab eventKey={2} title="More details">
    			<RowAdditionalDetails data={row.id} />
  			</Tab>
			</Tabs>
    );
  }
}

export default RowContainer;
