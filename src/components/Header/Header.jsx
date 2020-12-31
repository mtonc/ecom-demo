import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CartIcon  from '../CartIcon/CartIcon'
import CartDropDown from '../CartDropDown/CartDropDown'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer} from './header.styles'
import { signOutStart } from '../../redux/user/user.actions'

const Header = ({currentUser, hidden, signOutStart}) => (
	<HeaderContainer>
		<LogoContainer to='/'>
			<Logo className='logo' />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to='/shop'>
				SHOP
			</OptionLink>
			<OptionLink to='/shop'>
				CONTACT
			</OptionLink>
			{currentUser ? (
				<OptionLink as='div' onClick={signOutStart} >SIGN OUT</OptionLink>
			) : (
				<OptionLink to='/signin'>SIGN IN</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{ 
			hidden ? null : <CartDropDown/>
		}
	</HeaderContainer>
)

const mapDisptachToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart())
})


const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
})

export default connect(mapStateToProps,mapDisptachToProps)(Header)