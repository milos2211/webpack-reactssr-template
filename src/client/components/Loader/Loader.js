import React from 'react'
import useStyles from "isomorphic-style-loader/useStyles"
import s from "./Loader.less"


const Loader = props => {
	useStyles(s);
	return (
		<div className={s.loadWrap}>
			<div className={s.loading}></div>
		</div>
	)
}

const LoaderItem = props => {
	useStyles(s);
	return (
		<div className={`${s.loading} ${s.loadingItem}`}></div>
	)
}

export { Loader, LoaderItem }