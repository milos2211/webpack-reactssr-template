import React from 'react';
import { Helmet } from "react-helmet"

const Seo = ({
	location = "/",
	title = "Template React SSR",
	imageUrl = "",
	description = "Template for Webpack React SSR with isomorphic-style-loader and react-router",
	keywords = "react, react-router, react-router-config, isomorphic-style-loader, webpack, redux, react-helmet, seo"
}) => {
	return (
		<Helmet>
			<title>{title}</title>
			<link rel="canonical" href={process.env.ROOT_URL + location} />
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<meta property="og:title" content={title} />
			<meta property="og:site_name" content="Template React SSR" />
			<meta property="og:type" content="website" />
			<meta property="og:image" content={imageUrl} />
			<meta property="og:url" content={process.env.ROOT_URL} />
			<meta property="og:description"
				content={description} />
			<meta name="twitter:card" content={`${title}`} />
			<meta property="twitter:image" content={imageUrl} />
			<meta property="twitter:description"
				content={description} />
		</Helmet>
	)
}

export default Seo