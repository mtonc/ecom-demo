import React from 'react'
import { connect } from 'react-redux'

import { selectCollection } from '../../redux/shop/shop.selector'

import CollectionItem from '../../components/CollectionItem/CollectionItem'

import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItems
} from './Collection.styles'


const Collection = ({ collection }) => {
	const { title, items } = collection
	return (
		<CollectionPageContainer>
			<CollectionTitle>{title}</CollectionTitle>
			<CollectionItems>
				{items.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
			</CollectionItems>
		</CollectionPageContainer>
	)
}

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection)