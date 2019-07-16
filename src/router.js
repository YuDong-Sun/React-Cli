import React from 'react';
//router
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';


const RouterLink = ()=>{
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Header}></Route>
				<Route path="/home" exact component={Home}></Route>
				<Route path="/contact" exact component={Contact}></Route>
				<Route path="/about" exact component={About}></Route>
				<Redirect to="/"/>
			</Switch>
		</BrowserRouter>
	)
}
export default RouterLink;