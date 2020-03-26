import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts');

	dispatch({
		type    : 'FETCH_POSTS',
		payload : response.data
	});
};

export const fetchUser = id => async disptach => {
	const response = await jsonPlaceholder.get(`./users/${id}`);

	disptach({
		type    : 'FETCH_USER',
		payload : response.data
	});
};

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

/* Totally fine to make additional action creators besides the one on the top.
export const selectPost = () => {
    return {
        type: 'SLECTED_POSTS',
        payload: {
            payment: 20,
            balance: 100
        }
    }
}

*/
