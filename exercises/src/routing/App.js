import React from "react";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import InvalidRoute from "./InvalidRoute";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/shop">
						<Shop />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/">
						<InvalidRoute />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}