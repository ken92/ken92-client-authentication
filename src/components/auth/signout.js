import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
	componentWillMount() {
		this.props.signoutUser();
	}

	render() {
		return (
			<div>Hope to see you again soon!</div>
		);
	}
}

export default connect(null, actions)(Signout);
