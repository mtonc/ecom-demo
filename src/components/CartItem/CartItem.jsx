import React from 'react'
import { CartItemContainer, ImageContainer, ItemDetailsContainer, NameSpan} from './cartitem.styles'

const CartItem = ({ item: { imageUrl, price, name, quantity}}) => (
	<CartItemContainer>
		<ImageContainer src={imageUrl} alt='item'/>
		<ItemDetailsContainer>
			<NameSpan>{name}</NameSpan>
			<span className="price">${price}</span>
			 {quantity} x {price}
		</ItemDetailsContainer>
	</CartItemContainer>
)

export default CartItem