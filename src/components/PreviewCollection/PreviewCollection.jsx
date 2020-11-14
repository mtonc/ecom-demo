import React from 'react';
import { withRouter } from 'react-router-dom'
import CollectionItem from '../CollectionItem/CollectionItem';

import {
	PreviewCollectionContainer,
	CollectionTitle,
	CollectionPreview
} from './PreviewCollection.styles'

const PreviewCollection = ({title, items, history, linkUrl}) => (
	<PreviewCollectionContainer>
		<CollectionTitle
		onClick={() => history.push(`${linkUrl}`)}
		>{title.toUpperCase()}</CollectionTitle>
		<CollectionPreview>
			{items
				.filter((item, idx) => idx < 4)
				.map( item => (
						<CollectionItem key={item.id} item={item}/>
					)
				)
			}
		</CollectionPreview>
	</PreviewCollectionContainer>
)

export default withRouter(PreviewCollection)

;