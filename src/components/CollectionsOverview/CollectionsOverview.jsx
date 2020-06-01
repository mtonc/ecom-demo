import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import PreviewCollection from '../../components/PreviewCollection/PreviewCollection';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'

import './collections-overview.scss'

const CollectionsOverview = ({ collections}) => (
	<div className='collections-overview'>
		{collections.map(({id, ...otherProps}) => (
			<PreviewCollection key={id} {...otherProps} />
		))}
	</div>
)

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)