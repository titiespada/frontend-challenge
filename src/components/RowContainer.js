import React, { Component } from 'react';
import RowDescription from './RowDescription';
import {Tabs, Tab } from 'react-bootstrap';
import '../css/style.css';

class RowContainer extends Component {

	render() {
		const row = this.props.data;
    return (
      <Tabs defaultActiveKey={1} className="row-container-tabs">
  			<Tab eventKey={1} title="Description">
					<RowDescription data={row} />
  			</Tab>
  			<Tab eventKey={2} title="More details">
    			Tab 2 content
  			</Tab>
			</Tabs>
    );
  }
}

export default RowContainer;
