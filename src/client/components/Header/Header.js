import React from 'react';
import useStyles from "isomorphic-style-loader/useStyles"

import s from "./Header.less"

const Header = () => {
	useStyles(s)
	return (
		<nav className={s.root}>
		</nav>
	)
}

export default Header