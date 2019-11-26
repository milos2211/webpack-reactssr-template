import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import StyleContext from 'isomorphic-style-loader/StyleContext'
import Routes from '../client/Routes';

export default (req, store, data = {}) => {
	const css = new Set()
	const insertCss = (...styles) => {
		// eslint-disable-next-line no-underscore-dangle
		styles.forEach(style => css.add(style._getCss()));
	};

	const context = {}

	const content = renderToString(
		<StyleContext.Provider value={{ insertCss }}>
			<Provider store={store}>
				<StaticRouter location={req.path} context={context}>
					{renderRoutes(Routes)}
				</StaticRouter>
			</Provider>
		</StyleContext.Provider>
	);

	const helmet = Helmet.renderStatic();
	return `<!DOCTYPE html>
<html lang="en">
	<head>
		${helmet.title.toString()}
		${helmet.link.toString()}
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<meta name="fragment" content="!" />
		<meta property="og:title" content="Template React SSR" />
		<meta property="og:site_name" content="Template React SSR" />
		<meta property="og:type" content="website" />
		<meta property="og:description" content="Template for Webpack React SSR with isomorphic-style-loader and react-router" />
		<meta name="twitter:card" content="Template React SSR" />
		<meta name="twitter:creator" content="Template React SSR" />
		<meta property="twitter:title" content="Template React SSR" />
		<meta property="twitter:description" content="Template for Webpack React SSR with isomorphic-style-loader and react-router" />
		${helmet.meta.toString()}
		${data.js}
		<style id="css" type="text/css">${[...css].join('')}</style>
		<noscript>
			This website needs js to run.
		</noscript>
	</head>
	<body>
			<div id="app">${content}</div>
			<script>window.__PRELOADED_STATE__ = ${serialize(store.getState()).replace(/</g, '\\u003c')}</script>
	</body>
</html>`;
};
