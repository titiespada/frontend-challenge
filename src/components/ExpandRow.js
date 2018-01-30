import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';
import '../css/style.css';

var dateAttributes = [ "last_boot", "channels_changed", "created", "modified" ];
var formattedKeys = {
	id: "ID",
	org_id: "Org ID",
	digital_server_id: "Digital Server ID",
	server_arch_id: "Server Arch ID",
	os: "OS",
	release: "Release",
	name: "Name",
	description: "Description",
	info: "Info",
	secret: "Secret",
	creator_id: "Creator ID",
	auto_update: "Auto Update",
	contact_method_id: "Contact Method ID",
	running_kernel: "Running Kernel",
	last_boot: "Last Boot",
	provision_state_id: "Provision State ID",
	channels_changed: "Channels Changed",
	cobbler_id: "Cobbler ID",
	machine_id: "Machine ID",
	hostname: "Hostname",
	created: "Created",
	modified: "Modified"
};

class ExpandRow extends Component {
	render() {
		var computerSystem = this.props.data;
		
		let rows = Object.keys(computerSystem).map(function(key) {
			var formattedKey = formattedKeys[key] || key;
			var value = computerSystem[key];
			if (dateAttributes.includes(key)) {
				return (
					<Row key={key}>
						<Col md={2} className="expand-header">{formattedKey}</Col>
						<Col md={6}>
							<Moment format="YYYY-MM-DD HH:mm" date={ new Date(value) } />
						</Col>
					</Row>
				);
			} else {
				return (
					<Row key={key}>
						<Col md={2} className="expand-header">{formattedKey}</Col>
						<Col md={6}>{value}</Col>
					</Row>
				);
			}
		});

		return (
			<Grid className="expand-row-container">
				{ rows }
			</Grid>
		);
	}
}

export default ExpandRow;
