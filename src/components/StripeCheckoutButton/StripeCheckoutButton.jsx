import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100
	const publishableKey = 'pk_test_VCYuatLK44BB07reWHuU1ydO00pMKIX3Zr'

	const onToken = token => {
		console.log(token);
		alert('Payment Successful')
	}

	return (
		<StripeCheckout
			label="Pay Now"
			name='ecom demo'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panellabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
}

export default StripeCheckoutButton