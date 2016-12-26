import React, { PropTypes } from 'react';
// import { Link } from 'react-router';

const Post = ({ post }) => {
	return (
		<div>
	    	<h1>{ post.title }</h1>
	    	<pre>{ JSON.stringify(post, null, '  ') }</pre>
	    </div>
	);
}


Post.propTypes = {
    post: PropTypes.object
};

export default Post;
