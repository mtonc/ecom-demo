import React from 'react'
import { connect } from 'react-redux'

import Button from '../Button/Button'

import './cartdropdown.scss'

const CartDropDown = ({cartItems}) => (
	<div className='cart-dropdown'>
		<div className='cart-items' />
		{cartItems}
		<Button>GO TO CHECKOUT</Button>
	</div>
)

const mapStateToProps = state => ({
	cartItems: state.cartItems
})

export default CartDropDown