import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import '../css/style.css';

class MainHeader extends Component {
  render() {
    return (
      <Grid bsClass="main-header">
        <Row>
          <Col md={12}>
            <PageHeader bsClass="page-header">
              Computer Systems Listing App
              <br/><small>Simple UI for listing computer systems and their specifications.</small>
            </PageHeader>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default MainHeader;
