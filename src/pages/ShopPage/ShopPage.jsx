import React from 'react';
import {SHOP_DATA} from './data';
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection';

class ShopPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: SHOP_DATA
		}
	}
	render() {
		const collections = this.state.collections;
		return (
			<div className="shop-page">
				{
					collections.map(({id, ...otherProps}) => (
						<PreviewCollection key={id} {...otherProps} />
					) )
				}
			</div>
		)
	}
}

export default ShopPage;