import React from 'react'

const PureImage = ({ url, onLoad, classes, loading = "auto", title = "Picture", alt = "Picture", brokenImage, handleError, ...rest }) => {
	return (
		<img {...(classes && { className: classes })} src={url} onLoad={onLoad} title={title} loading={loading} alt={alt} onError={handleError} {...rest} />
	)
}

export default PureImage
