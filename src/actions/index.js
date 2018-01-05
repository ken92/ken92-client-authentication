import axios from 'axios';
import {browserHistory} from 'react-router';
import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR
} from './types';

const API_URL = 'http://localhost:3090';


export function signinUser({email, password}) {
	return dispatch => {
		axios.post(`${API_URL}/signin`, {email, password})
		.then(response => {
			// update the state to show user is authenticated
			dispatch({type: AUTH_USER});

			// save the JWT token
			localStorage.setItem('token', response.data.token);

			// redirect user to '/feature' route
			browserHistory.push('/feature');
		})
		.catch(error => {
			// show error to user
			dispatch(authError('Bad login info'));
		});
	};
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	};
}

export function signoutUser() {
	localStorage.removeItem('token');
	return {
		type: UNAUTH_USER
	};
}
