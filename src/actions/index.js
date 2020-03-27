//import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostAndUsers = () => async dispatch => {
	console.log('About to fetch posts');
	await dispatch(fetchPosts());
	console.log('fetched post!');
};

export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts');

	dispatch({
		type    : 'FETCH_POSTS',
		payload : response.data
	});
};

export const fetchUser = id => async dispatch => {
	const response = await jsonPlaceholder.get(`./users/${id}`);

	dispatch({
		type    : 'FETCH_USER',
		payload : response.data
	});
};

// Note
// This version of the code is the one with the _.memoize from lodash to only make a single call
/*

export const fetchUser = id => dispatch => _fectchUser(id, dispatch);

const _fectchUser = _.memoize(async (id, dispatch) => {
	const response = await jsonPlaceholder.get(`./users/${id}`);

	dispatch({
		type    : 'FETCH_USER',
		payload : response.data
	});
});export const fetchUser = id => dispatch => _fectchUser(id, dispatch);

const _fectchUser = _.memoize(async (id, dispatch) => {
	const response = await jsonPlaceholder.get(`./users/${id}`);

	dispatch({
		type    : 'FETCH_USER',
		payload : response.data
	});
});


*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// This will not work
/*
export const fetchUser = function (id) {
	return _.memoize(async function (disptach) {
		const response = await jsonPlaceholder.get(`./users/${id}`);

		disptach({
			type    : 'FETCH_USER',
			payload : response.data
		});
	});
}; */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* This is the same as the function sytax on the top
export const fetchPosts = () => {
	return async (dispatch) => {
		const response = await jsonPlaceholder.get('/posts');

		dispatch({
			type: 'FETCH_POSTS',
			paylaod: response
		});
	};
}; */
