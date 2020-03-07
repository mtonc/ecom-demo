import React from 'react';
import HomePage from './pages/Homepage/Homepage';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import { auth, createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'

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
					<Route exact path='/shop' component={ShopPage} />
					<Route exact path='/signin' component={Login} />
				</Switch>
			</div>
	  	);	
	}
}

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App)
