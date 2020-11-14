import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemCount } from '../../redux/cart/cart.selectors'
import { CartIconContainer, ShoppingIconContainer, ItemCount} from './carticon.styles'
import { createStructuredSelector } from 'reselect'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<CartIconContainer onClick={toggleCartHidden}>
		<ShoppingIconContainer/>
		<ItemCount>{itemCount}</ItemCount>
	</CartIconContainer>
)

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemCount
})

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);