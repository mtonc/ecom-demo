import React from 'react'
import {
	Arrow,
	CheckoutItemContainer,
	ImageContainer,
	Image,
	Span23,
	Quantity,
	RemoveButton,
	Value
} from './checkoutitem.styles'
import { connect } from 'react-redux'
import { addItem, removeItem, clearItemFromCart } from '../../redux/cart/cart.actions'

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
	const {name, imageUrl, price, quantity } = cartItem
	return (
	<CheckoutItemContainer>
		<ImageContainer>
			<Image src={imageUrl} alt="item" />
		</ImageContainer>
		<Span23>{name}</Span23>
		<Quantity>
			<Arrow onClick={()=>removeItem(cartItem)}>&#10094;</Arrow>
			<Value>{quantity}</Value>
			<Arrow onClick={()=>addItem(cartItem)}>&#10095;</Arrow>
		</Quantity>
		<Span23>{price}</Span23>
		<RemoveButton onClick={() => clearItem(cartItem)}>
			 &#10005;
		</RemoveButton>
	</CheckoutItemContainer>
)}

const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItemFromCart(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)