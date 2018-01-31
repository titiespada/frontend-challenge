import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import '../css/style.css';

/**
 * Display a simple Header information.
 */
class MainHeader extends Component {
  render() {
    return (
      <PageHeader bsClass="page-header">
        Computer Systems Listing App
        <br/><small>Simple UI for listing computer systems and their specifications.</small>
      </PageHeader>
    );
  }
}

export default MainHeader;
