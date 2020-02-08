import React from 'react';
import HomePage from './pages/Homepage/Homepage';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/ShopPage/ShopPage';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
)


function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
    		</Switch>
		</div>
  	);	
}

export default App;
