import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/signin-and-sign-up/signinandsignup";
import Header from "./components/header/header";
import { auth } from "./firebase/firebase-utils";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	// an open conx to watch user auth changes
	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
			console.log(user);
		});
	}

	// sign out user after session ends
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/shop" component={Shop} />
					<Route exact path="/contact" component={() => <h1>contact</h1>} />
					<Route exact path="/signin" component={SignInAndSignUp} />
				</Switch>
			</div>
		);
	}
}

export default App;
