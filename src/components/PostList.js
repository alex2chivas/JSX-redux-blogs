import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

class PostList extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		console.log(this.props.posts)
		return <div>Post List</div>
	};
};

const mapStatetoProps = (state) => {
	return { posts: state.posts.data }
};

export default connect(mapStatetoProps, { fetchPosts })(PostList);



