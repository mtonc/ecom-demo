import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import StripeCheckoutButton from '../../components/StripeCheckoutButton/StripeCheckoutButton'

import {
	CheckoutPageContainer,
	CheckoutHeaderContainer,
	CheckoutHeaderBlock,
	CheckoutTotalContainer,
	TestWarningContainer
} from './Checkout.styles'

const CheckoutPage = ({cartItems, total}) => (
	<CheckoutPageContainer>
		<CheckoutHeaderContainer>
			<CheckoutHeaderBlock>
				<span>Product</span>
			</CheckoutHeaderBlock>
			<CheckoutHeaderBlock>
				<span>Description</span>
			</CheckoutHeaderBlock>
			<CheckoutHeaderBlock>
				<span>Quantity</span>
			</CheckoutHeaderBlock>
			<CheckoutHeaderBlock>
				<span>Price</span>
			</CheckoutHeaderBlock>
			<CheckoutHeaderBlock>
				<span>Remove</span>
			</CheckoutHeaderBlock>
		</CheckoutHeaderContainer>
		{
			cartItems.map(cartItem => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))
		}
		<TestWarningContainer>
			*Please use the following test credit card number for payments*<br/>
			4242 4242 4242 4242 - Exp: any future date CVV: 123
		</TestWarningContainer>
		<CheckoutTotalContainer>TOTAL: ${total}</CheckoutTotalContainer>
		<StripeCheckoutButton price={total} />
	</CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)