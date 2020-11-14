import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection';
import {CollectionsOverviewContainer} from './CollectionsOverview.styles'

const CollectionsOverview = ({ collections, match}) => (
	<CollectionsOverviewContainer>
		{collections.map(({id, routeName, ...otherProps}) => (
			<PreviewCollection key={id} {...otherProps} linkUrl={`${match.url}/${routeName}`}/>
		))}
	</CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionsOverview)