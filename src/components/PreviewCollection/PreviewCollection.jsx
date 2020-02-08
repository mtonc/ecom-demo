import React from 'react';
import CollectionItem from "../CollectionItem/CollectionItem";

import './previewcollection.scss';

const PreviewCollection = ({title, items }) => (
	<div className="preview-collection">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{items
				.filter((item, idx) => idx < 4)
				.map(({id, ...otherProps}) => (
						<CollectionItem key={id} {...otherProps}/>
					)
				)
			}
		</div>
	</div>
)

export default PreviewCollection;