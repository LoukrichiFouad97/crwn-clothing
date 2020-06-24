import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import "./App.css";

function App() {
	return (
		<div>
			<Link to="/">Home</Link>
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/shop" component={Shop} />
			</Switch>
		</div>
	);
}

export default App;
