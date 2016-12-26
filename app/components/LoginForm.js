import React, { PropTypes } from 'react';
import types from '../actions/types';

const LoginForm = ({ auth, login, router }) =>{
	let email, password;
	return (
		<div>
			<form onSubmit={ (event) => { 
				event.preventDefault();
				login({
					router: router,
					email: email.value,
					password: password.value
				});
			 } }>
				<label>
					Email:
					<input ref={ (node) => { email = node; } } type="text" />
				</label>

				<label>
					Password:
					<input ref={ (node) => { password = node; } } type="password" />
				</label>
				
				<input type="submit" value="Submit" />

				<br />
				
				{ auth.loading && 
					'Loading....'
				}
				{ auth.type === types.LOGIN_OK && 
					'LoggedIn'
				}

				<pre>{ !!auth.me && 
					JSON.stringify(auth.me, null, '  ')
				}</pre>

				{
					!!auth.error &&
					auth.error
				}

			</form>

		</div>
	);
}

LoginForm.contextTypes = {
    router: PropTypes.object
};

LoginForm.propTypes = {
	auth: PropTypes.object,
	login: PropTypes.func
};

export default LoginForm;
