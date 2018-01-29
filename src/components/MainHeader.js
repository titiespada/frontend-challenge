import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import '../App.css';

class MainHeader extends Component {
  render() {
    return (
      <Grid bsClass="App-main-header">
        <Row>
          <Col md={12}>
            <PageHeader bsClass="App-main-page-header">
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
