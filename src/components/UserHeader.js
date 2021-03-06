import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
	render () {
		const { user } = this.props;

		if (!user) {
			return <div className='ui active centered inline loader'>...</div>;
		}

		return <div className='header'>{user.name}</div>;
	}
}

const mapStateToProps = (state, ownProps) => {
	// Note // state para: is a dispatch and ownProps para: is our own manual props that we passed into UserHeader component
	// Lodash // memoize is good for calling api's
	return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
