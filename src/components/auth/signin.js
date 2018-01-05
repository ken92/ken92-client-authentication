import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {
	handleFormSubmit({email, password}) {
		console.log("email ",email);
		console.log("password ",password);
		this.props.signinUser({email, password});
	}


	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					<strong>Oops!</strong> {this.props.errorMessage}
				</div>
			);
		}
	}

	render() {
		const {handleSubmit} = this.props;
		const renderInput = field => (
			<div>
				<input {...field.input} type={field.type || 'text'} className="form-control" />
				{field.meta.touched && field.meta.error &&
					<span>{field.meta.error}</span>}
			</div>
		);

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label>Email:</label>
					<Field name="email" component={renderInput} />
				</fieldset>
				<fieldset className="form-group">
					<label>Password:</label>
					<Field name="password" component={renderInput} type="password" />
				</fieldset>
				{this.renderAlert()}
				<button action="submit" className="btn btn-primary">Sign in</button>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return {
		errorMessage: state.auth.error
	};
}

const ConnectedSigninForm = connect(mapStateToProps, actions)(Signin);

const SigninReduxForm = reduxForm({
	form: 'signin',
	fields: ['email', 'password']
})(ConnectedSigninForm);

export default SigninReduxForm;
