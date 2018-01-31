import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';
import '../css/style.css';

class RowDescription extends Component {

	render() {
		const computerSystem = this.props.data;
		return (
			<Grid className="row-description">
				<Row>
					<Col md={2} className="row-description-header">ID</Col>
					<Col md={4}>{computerSystem.id || '-'}</Col>
					<Col md={2} className="row-description-header">Org ID</Col>
					<Col md={4}>{computerSystem.org_id || '-'}</Col>
				</Row>
				<Row>
					<Col md={2} className="row-description-header">Digital Server ID</Col>
					<Col md={4}>{computerSystem.digital_server_id || '-'}</Col>
					<Col md={2} className="row-description-header">Server Arch ID</Col>
					<Col md={4}>{computerSystem.server_arch_id || '-'}</Col>
				</Row>
				<Row>
					<Col md={2} className="row-description-header">OS</Col>
					<Col md={4}>{computerSystem.os || '-'}</Col>
					<Col md={2} className="row-description-header">Release</Col>
					<Col md={4}>{computerSystem.release || '-'}</Col>
				</Row>
				<Row>
					<Col md={2} className="row-description-header">Name</Col>
					<Col md={4}>{computerSystem.name || '-'}</Col>
					<Col md={2} className="row-description-header">Description</Col>
					<Col md={4}>{computerSystem.description || '-'}</Col>
				</Row>
				<Row>
					<Col md={2} className="row-description-header">Info</Col>
					<Col md={4}>{computerSystem.info || '-'}</Col>
					<Col md={2} className="row-description-header">Secret</Col>
					<Col md={4}>{computerSystem.secret || '-'}</Col>
				</Row>
				<Row>
					<Col md={2} className="row-description-header">Creator ID</Col>
					<Col md={4}>{computerSystem.creator_id || '-'}</Col>
					<Col md={2} className="row-description-header">Auto Update</Col>
					<Col md={4}>{computerSystem.auto_update || '-'}</Col>
				</Row>
				<Row>
					<Col md={2} className="row-description-header">Contact Method ID</Col>
					<Col md={4}>{computerSystem.contact_method_id || '-'}</Col>
					<Col md={2} className="row-description-header">Running Kernel</Col>
					<Col md={4}>{computerSystem.running_kernel || '-'}</Col>
				</Row>
				<Row>
					<Col md={2} className="row-description-header">Last Boot</Col>
					<Col md={4}>
						<Moment format="YYYY-MM-DD HH:mm" date={ new Date(computerSystem.last_boot) } />
					</Col>
					<Col md={2} className="row-description-header">Provision State ID</Col>
					<Col md={4}>{computerSystem.provision_state_id || '-'}</Col>
				</Row>
				<Row>
					<Col md={2} className="row-description-header">Channels Changed</Col>
					<Col md={4}>
						<Moment format="YYYY-MM-DD HH:mm" date={ new Date(computerSystem.channels_changed) } />
					</Col>
					<Col md={2} className="row-description-header">Cobbler ID</Col>
					<Col md={4}>{computerSystem.cobbler_id || '-'}</Col>
				</Row>
				<Row>
					<Col md={2} className="row-description-header">Machine ID</Col>
					<Col md={4}>{computerSystem.machine_id || '-'}</Col>
					<Col md={2} className="row-description-header">Hostname</Col>
					<Col md={4}>{computerSystem.hostname || '-'}</Col>
				</Row>
				<Row>
					<Col md={2} className="row-description-header">Created</Col>
					<Col md={4}>
						<Moment format="YYYY-MM-DD HH:mm" date={ new Date(computerSystem.created) } />
					</Col>
					<Col md={2} className="row-description-header">Modified</Col>
					<Col md={4}>
						<Moment format="YYYY-MM-DD HH:mm" date={ new Date(computerSystem.modified) } />
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default RowDescription;
