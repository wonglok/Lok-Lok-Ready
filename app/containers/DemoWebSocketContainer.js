import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DemoWebSocket from '../components/DemoWebSocket';

import * as actions from '../actions';

class DemoWebSocketContainer extends React.Component {
    componentWillMount() {
        this.props.load();
    }
    render(){
    	return ( <DemoWebSocket { ...this.props } /> );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        status: state.wsdemo.status,
        ask: state.wsdemo.ask,
        ans: state.wsdemo.ans,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        load: () => {
            dispatch(actions.wsPING('Wish you do well' + Math.random()));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DemoWebSocketContainer);
