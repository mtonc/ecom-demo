import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect' 

import HomePage from './pages/Homepage/Homepage';
import ShopPage from './pages/ShopPage/ShopPage';
import Login from './pages/Login/Login';
import CheckoutPage from './pages/Checkout/Checkout'
import Header from './components/Header/Header';
import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'

class App extends React.Component {

	unsubcribeFromAuth = null;

	componentDidMount() {
		const { checkUserSession } = this.props
		checkUserSession()
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

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
})

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
