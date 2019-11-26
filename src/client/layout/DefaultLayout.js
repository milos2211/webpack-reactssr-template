import React from 'react'
import { renderRoutes } from "react-router-config"
import withStyles from "isomorphic-style-loader/withStyles"

import Header from "../components/Header/Header"

import s from "./Layout.less"


const DefaultLayout = ({ route }) => {
	return (
		<div className={s.root}>
			<Header />
			<div className="page-wrap">
				{renderRoutes(route.routes)}
			</div>
		</div>
	)
}

export default {
	component: withStyles(s)(DefaultLayout)
}
