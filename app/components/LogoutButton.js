import React, { PropTypes } from 'react';

const LogoutButton = ({ logout }) =>{
	return (
		<button onClick={ logout }>Logout</button>
	);
}


LogoutButton.propTypes = {
	logout: PropTypes.func
};

export default LogoutButton;
