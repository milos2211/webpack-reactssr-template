import React, { useState } from 'react'
import PureImage from './PureImage';

const ImageComponent = ({ url = "/icons/missing_picture.svg", brokenImage, onLoad, classes, loading, title, alt, ...rest }) => {
	
	const [imgUrl, setImgUrl] = useState(url);
	const [broken, setBroken] = useState("");
	
	const handleError = (e) => {
		setImgUrl(brokenImage || "/icons/broken_picture.svg")
		setBroken("broken-image")
	}
	
	classes +=" img-wrap";

	return (
		<div {...({ className: classes })} >
			<PureImage url={imgUrl} onLoad={onLoad} title={title} loading={loading} alt={alt} {...rest}  handleError={handleError} classes={broken} />
		</div>
	)
}

export default ImageComponent
