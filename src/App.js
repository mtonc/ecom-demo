import React from 'react';
import HomePage from './pages/Homepage/Homepage';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import { auth} from './firebase/firebase.utils';


class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		}
	}

	unsubcribeFromAuth = null;

	componentDidMount() {
		auth.onAuthStateChanged(user => {
			this.setState({currentUser: user});
		});
	}

	componentWillUnmount() {
		this.unsubcribeFromAuth();
	}

	render() {
		return (
			<div>
			<Header currentUser={this.state.currentUser}/>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/shop' component={ShopPage} />
					<Route exact path='/signin' component={Login} />
				</Switch>
			</div>
	  	);	
	}
}

export default App;
