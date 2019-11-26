export const FETCH_POSTS = "FETCH_POSTS"
export const GET_POST = "GET_POST"

const data = [
	{ url: "Lorem", text: "Lorem ipsum dolor sit amet." },
	{ url: "Vestibulum", text: "Vestibulum consectetur sit amet ligula." },
	{ url: "Fusce", text: "Fusce ut ex lobortis, luctus." }
]

export const fetchPosts = () => dispatch => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			dispatch({
				type: FETCH_POSTS,
				posts: data
			})
			resolve()
		}, 200);
	})
}

export const getPost = (param) => dispatch => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(param)
			const post = data.find(x => x.url == param.url)
			if (post) {
				dispatch({
					type: GET_POST,
					post
				})
			}
			resolve()
		}, 200);
	})
}