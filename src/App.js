import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/signin-and-sign-up/signinandsignup";
import Header from "./components/header/header";
import { auth } from "./firebase/firebase-utils";
import { createUserProfileDocument } from "./firebase/firebase-utils";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	// open conx to watch user auth changes
	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
			// if user signed in
			if (user) {
				// get the user obj
				const userRef = await createUserProfileDocument(user);

				// after db updates with new user
				userRef.onSnapshot((snapshot) => {
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data(),
						},
					});
					console.log(this.state);
				});
			} else {
				this.setState({ currentUser: user });
			}
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
					<Route component={() => <h1>404 Not Found</h1>} />
				</Switch>
			</div>
		);
	}
}

export default App;
