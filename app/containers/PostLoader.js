import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Posts from '../components/Posts';
import rest from '../actions/rest';
import * as actions from '../actions';

class PostLoader extends React.Component {
    componentWillMount() {
        this.props.load();
    }
    render(){
		{/*
		<pre onClick={ () => { console.log(this.props); } }>{ JSON.stringify(this.props, null, '\t') }</pre>
    	*/}

    	return (
    		<Posts { ...this.props } />
		);
    }
}

// PostLoader.propTypes = {
// 	posts: PropTypes.shape({
//       loading: PropTypes.bool,
//       data: PropTypes.shape({
//         title: PropTypes.string
//       })
//     })
// };

const mapStateToProps = (state, ownProps) => {
    return {
    	restPosts: state.posts,
        // children: ownProps.children,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        load: () => {
            dispatch(rest.actions.posts.sync());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostLoader);
