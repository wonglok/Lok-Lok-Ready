import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AuthLayout from '../components/AuthLayout';
import * as actions from '../actions';

class Auth extends React.Component {
    componentWillMount() {
        this.props.loadMe();
    }
    render(){
        return (
            <AuthLayout { ...this.props } />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth

        // children: ownProps.children,
        // ask: state.status.ask,
        // ans: state.status.ans,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadMe: (data) => {
            dispatch(actions.me());
        },
        login: (data) => {
            dispatch(actions.login(data));
        },
        logout: (data) => {
            dispatch(actions.logout(data));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);
