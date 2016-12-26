import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import App from '../components/App';

import * as actions from '../actions';

class AppContainer extends React.Component {
    componentWillMount() {
        // this.props.load();
    }
    render(){
        return (<App { ...this.props } />);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        children: ownProps.children,
        // ask: state.status.ask,
        // ans: state.status.ans,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // load: () => {
        //     dispatch(actions.wsPING('wish you do well' + Math.random()));
        // }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
