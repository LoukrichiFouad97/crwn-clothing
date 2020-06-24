import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/signin-and-sign-up/signinandsignup";
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
				<Route exact path="/signin" component={SignInAndSignUp} />
			</Switch>
		</div>
	);
}

export default App;
