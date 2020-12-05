import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument} from './firebase/firebase.utils';

import HomePage from './pages/Homepage/Homepage';
import ShopPage from './pages/ShopPage/ShopPage';
import Login from './pages/Login/Login';
import CheckoutPage from './pages/Checkout/Checkout'
import Header from './components/Header/Header';

import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'
import { createStructuredSelector } from 'reselect' 
class App extends React.Component {

	unsubcribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props
		this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				
				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					})
				})
			}

			setCurrentUser(userAuth)
		});
	}

	componentWillUnmount() {
		this.unsubcribeFromAuth();
	}

	render() {
		return (
			<div>
			<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route exact path='/checkout' component={CheckoutPage} />
					<Route 
						exact
						path='/signin'
						render={() => 
							this.props.currentUser ? (
								<Redirect to='/'/>
							) : (
								<Login/>
							)} />
				</Switch>
			</div>
	  	);	
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
