import React from 'react';
import HomePage from './pages/Homepage/Homepage';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
)


function App() {
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

export default App;
