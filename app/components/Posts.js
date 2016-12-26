import React, { PropTypes } from 'react';
// import { Link } from 'react-router'; 
import Post from './Post';

const Posts = ({ restPosts }) => {

	var postlist = (restPosts.data = restPosts.data || []).map((item) => {
		return (
			<Post key={ item._id } post={item} />
		);
	});

	return (
		<div>
			{ restPosts.syncing && 'Loading...' }<br />
			{ postlist }
			{/*
				<pre>{ JSON.stringify(restPosts, null, '\t') }</pre>
			*/}
		</div>
	);

}

Posts.propTypes = {
    restPosts: PropTypes.object
};

export default Posts;
