import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import CartItem from '../CartItem/CartItem'
import {
	CartDropdownContainer,
	CartItemsContainer,
	EmptyMessageContainer,
	CheckoutButtonContainer
} from './cartdropdown.styles'

import {selectCartItems} from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropDown = ({cartItems, history, dispatch}) => (
	<CartDropdownContainer>
		<CartItemsContainer>
			{
				cartItems.length ? (
					cartItems.map(cartItem => (
						<CartItem key={cartItem.id} item={cartItem} /> 
					)) 
				) : (
					<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
				)
			}
		</CartItemsContainer>
		<CheckoutButtonContainer onClick={() => {
			history.push('/checkout')
			dispatch(toggleCartHidden())
		}}>GO TO CHECKOUT</CheckoutButtonContainer>
	</CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown))