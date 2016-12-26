import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import LogoutButton from './LogoutButton';

export default class AuthLayout extends React.Component {
    render(){
        return (
            <div>
                <LoginForm auth={this.props.auth} login={this.props.login} />
                <LogoutButton logout={this.props.logout}></LogoutButton>
            </div>
        );
    }
}


