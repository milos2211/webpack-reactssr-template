import React, { useEffect } from 'react';
import { connect } from "react-redux"
import { getPost } from "../../actions/posts"
import { withRouter } from "react-router-dom"

const Post = ({ post, match, dispatch }) => {
	useEffect(() => {
		dispatch(getPost(match.params))
	}, [])
	return (
		<div>{post && post.text}</div>
	)
}

const loadData = (store, param) => {
	return store.dispatch(getPost(param))
}

export default {
	component: connect(({ posts }) => ({ post: posts.post }))(Post),
	loadData
}