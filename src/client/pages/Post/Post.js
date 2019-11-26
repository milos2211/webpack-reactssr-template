import React from 'react';
import { connect } from "react-redux"
import { getPost } from "../../actions/posts"
import { withRouter } from "react-router-dom"

const Post = ({ post, match }) => {
	console.log(post)
	return (
		<div>{post.text}</div>
	)
}

const loadData = (store, param) => {
	return store.dispatch(getPost(param))
}

export default {
	component: connect(({ posts }) => ({ post: posts.post }))(Post),
	loadData
}