import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';
import '../css/style.css';

var dateAttributes = ["last_boot", "channels_changed", "created", "modified"];

/**
 * This component allows displaying JSON key:value pairs into readable label value HTML format.
 */
class PrettyKeyValue extends Component {

	/**
	 * Format a key by removing underscores and changing each first letter of each word uppercase.
	 * @param string key 
	 */
	formatKey(key) {
		key = key.replace(/_/g, ' ');

		return key.toLowerCase().split(' ').map(function(word) {
			return word[0].toUpperCase() + word.substr(1);
		}).join(' ');
	};

	/**
	 * Render the key:value pairs into more readable HTML format
	 * @param string key 
	 * @param object value Can be a string, array or object
	 * @param int level Indicator of what is the level of identation to be presented
	 */
	renderKeyValue(key, value, level) {
		if (value instanceof Array) {
			if (value.length === 1 && value[0] instanceof Object) {
				return (
					<Row key={key} className="pretty-key-value">
						<Col xs={4} sm={4} md={4} className={"pretty-key-value-label-"+level}>{this.formatKey(key)}:</Col>
						<br/>
						{ Object.keys(value[0]).map(k =>  this.renderKeyValue(k, value[0][k], level+1)) }
					</Row>
				);
			} else {
				var valueArrStr = value.join(', ');
				return (
					<Row key={key} className="pretty-key-value">
						<Col xs={4} sm={4} md={4} className={"pretty-key-value-label-"+level}>{this.formatKey(key)}:</Col>
						<Col xs={8} sm={8} md={8}>{valueArrStr || '-'}</Col>
					</Row>
				);
			}
		} else if (value instanceof Object) {
			return (
				<Row key={key} className="pretty-key-value">
					<Col xs={4} sm={4} md={4} className={"pretty-key-value-label-"+level}>{this.formatKey(key)}:</Col>
					<br/>
					{ Object.keys(value).map(k =>  this.renderKeyValue(k, value[k], level+1)) }
				</Row>
			);
		} 
		else {
			if (dateAttributes.includes(key)) {
				return (
					<Row key={key} className="pretty-key-value">
						<Col xs={4} sm={4} md={4} className={"pretty-key-value-label-"+level}>{this.formatKey(key)}:</Col>
						<Col xs={8} sm={8} md={8}><Moment format="YYYY-MM-DD HH:mm" date={ new Date(value) } /></Col>
					</Row>
				);
			} else {
				return (
					<Row key={key} className="pretty-key-value">
						<Col xs={4} sm={4} md={4} className={"pretty-key-value-label-"+level}>{this.formatKey(key)}:</Col>
						<Col xs={8} sm={8} md={8}>{value || '-'}</Col>
					</Row>
				);
			}
		}
	};

	render() {
		const key = this.props.dataKey;
		const value = this.props.dataValue;
		return this.renderKeyValue(key, value, 0);
	}
}

export default PrettyKeyValue;
