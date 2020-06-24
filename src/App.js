import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import Header from "./components/header/header";
import "./App.css";

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/shop" component={Shop} />
				<Route exact path="/contact" component={() => <h1>contact</h1>} />
				<Route exact path="/signin" component={() => <h1>Sign in</h1>} />
			</Switch>
		</div>
	);
}

export default App;
