import React, { Fragment } from 'react'
import Seo from "../../components/Seo/Seo.js"
import withStyles from 'isomorphic-style-loader/withStyles'
import s from './Offline.less'

const Offline = (props) => {
	return (
		<Fragment>
			<Seo title={`Offline`} description="Template offline" location={`/offline`} />
			<div className="page-content">
				<div className="background background-offline"></div>
				<div className="section-header">
					<h1>Offline</h1>
					<p>Check your connection</p>
				</div>
			</div>
		</Fragment>
	)
}

export default {
	component: withStyles(s)(Offline)
}
