import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends Component {
	componentDidMount () {
		this.props.fetchUser(this.props.userId);
	}

	render () {
		const { user } = this.props;

		if (!user) {
			return <div className='ui active centered inline loader'>...loading</div>;
		}

		return <div className='header'>{user.name}</div>;
	}
}

const mapStateToProps = (state, ownProps) => {
	// Note // state para: is a dispatch and ownProps para: is our own manual props that we passed into UserHeader component
	return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
