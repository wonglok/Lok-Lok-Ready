import React, { PropTypes } from 'react';

const DemoWebSocket = ({ ans, ask, load, status }) =>
    <div>
    	<h1 onClick={ load }>Load</h1>
        <p>{ ask }</p>
        <p>{ ans }</p>
        <p>{ status }</p>
    </div>;

DemoWebSocket.propTypes = {
	status: PropTypes.string,
    load: PropTypes.func,
	ask: PropTypes.string,
    ans: PropTypes.string,
};

export default DemoWebSocket;
