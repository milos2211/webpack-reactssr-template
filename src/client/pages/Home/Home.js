import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { fetchPosts } from '../../actions/posts'

import withStyles from 'isomorphic-style-loader/withStyles'
import Seo from "../../components/Seo/Seo.js"
import { Loader } from '../../components/Loader/Loader';

import s from './Home.less'

const Home = ({ fetchPosts: loadPosts, posts }) => {
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		loadPosts()
			.then(() => {
				setLoading(false)
			}).catch(error => {
				console.error(error)
				setLoading(false)
			})
	}, [loadPosts]);

	return isLoading ? (
		<Loader />
	) : (
			<React.Fragment>
				<Seo title={"Home"} description="Template for Webpack React SSR with isomorphic-style-loader and react-router" />
				<div className={s.root}>
					<h1>Home</h1>
					<div className={s.posts}>
						{posts.map(({ text, url }, index) => (
							<Link key={index} to={`posts/${url}`}>{text}</Link>
						))}
					</div>
				</div>
			</React.Fragment >
		)
}

const loadData = (store, param) => {
	return store.dispatch(fetchPosts(param));
}

export default {
	component: connect(
		({ posts }) => ({ posts: posts.posts }),
		{ fetchPosts }
	)(withStyles(s)(Home)),
	loadData
}
