import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/signin-and-sign-up/signinandsignup";
import Header from "./components/header/header";
import { auth } from "./firebase/firebase-utils";
import { createUserProfileDocument } from "./firebase/firebase-utils";
import { setCurrentUser } from "./redux/user/user-actions";

class App extends Component {
	unsubscribeFromAuth = null;

	// open connection to watch user auth changes
	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
			// if user signed in
			if (user) {
				// get the user obj
				const userRef = await createUserProfileDocument(user);

				// after db updates with new user
				userRef.onSnapshot((snapshot) => {
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data(),
					});
					console.log(this.state);
				});
			} else {
				setCurrentUser({ user });
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
				<Header />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/shop" component={Shop} />
					<Route exact path="/contact" component={() => <h1>contact</h1>} />
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
						}
					/>
					<Route component={() => <h1>404 Not Found</h1>} />
				</Switch>
			</div>
		);
	}
}

// access to state
const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser,
});

// set state
const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
