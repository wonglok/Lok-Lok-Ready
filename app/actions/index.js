import * as types from './types';
import { browserHistory } from 'react-router';
import 'whatwg-fetch';
// import fetch from "isomorphic-fetch";
import restful, { fetchBackend } from 'restful.js';
// import * as Cookies from "js-cookie";
import rest from "./rest";
import socket from '../store/socket';

var fetchAdapter = function(input, init) {
	init = init || {};
	init.credentials = 'include';
	return window.fetch(input, init);
};

const api = restful('/api', fetchBackend( fetchAdapter ));


export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}


export function wsPING(toSrv){
	return {
        type: types.WS_PING,
        data: toSrv
    };
}


export function login(credentials){
	return (dispatch, getState) => {
		
		dispatch({
			type: types.LOGIN_REQ
		});
		const signin = api.custom('signin');
		signin.post({
			email: credentials.email,
			password: credentials.password
		})
		.then((response) => {
			var data = response.body().data();


			socket.disconnect();
			socket.connect();
			dispatch({
				type: types.LOGIN_OK,
				me: data.me,
			});
		

		}, (response) => {
			console.log(response);
			dispatch({
				type: types.LOGIN_FAIL,
				error: 'Email password mismatch'
			});
		});


	};
}


export function logout(){
	return (dispatch, getState) => {

		dispatch({
			type: types.LOGOUT_REQ
		});

		const signout = api.custom('signout');
		signout.post()
		.then( (response) => {
			var data = response.body().data();
			// console.log(data);
			
			socket.disconnect();
			socket.connect();
			dispatch({
				type: types.LOGOUT_OK
			});


		}, () => {
			// dispatch({
			// 	type: types.LOGIN_FAIL,
			// 	error: 'Email password mismatch'
			// });
		});


	};
}



export function me(){
	return (dispatch, getState) => {

		dispatch({
			type: types.ME_REQ
		});

		const me = api.custom('me');
		me.get()
		.then((response) => {
			var data = response.body().data();
			// console.log(data);

			dispatch({
				type: types.ME_OK,
				me: data.me,
			});

		}, (response) => {
			console.log(response);
			dispatch({
				type: types.ME_FAIL
			});
		});

	};
}



