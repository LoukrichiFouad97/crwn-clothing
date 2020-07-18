import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/signin-and-sign-up/signinandsignup";
import Header from "./components/header/header";
import CheckoutPage from "./pages/checkout/checkout";

import { auth } from "./firebase/firebase-utils";
import {
	createUserProfileDocument,
} from "./firebase/firebase-utils";
import { setCurrentUser } from "./redux/user/user-actions";
import { selectCurrentUser } from "./redux/user/user-selectors";

class App extends Component {
	unsubscribeFromAuth = null;

	/** componentDidMount function
	 *	[1] keep track of the authenticated user status using: onAuthStateChanged(authenticated user)
	 *	[2] check if user is authenticated
	 *  [3] store the user in firebase && get back his documentReference using:  createUserProfileDocument(user)
	 * 	[4] setup a listener on user snapshot that stores the user in the state
	 */

	// open connection to watch user auth changes
	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
			// if user signed in
			if (user) {
				// get the user documentReference. after, storing it in firestore.
				const userRef = await createUserProfileDocument(user);

				// after db updates with new user
				userRef.onSnapshot((snapshot) => {
					// trigger redux action creator func && set snapshot data as a payload
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data(),
					});
				});
			} else {
				setCurrentUser({ user });
				// addCollectionAndDocuments(
				// 	"collection",
				// 	collectionsArray.map(({ title, items }) => ({ title, items }))
				// );
			}
		});
	}

	// sign out user after session ends
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		const { currentUser } = this.props;
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/shop" component={Shop} />
					<Route exact path="/contact" component={() => <h1>contact</h1>} />
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route
						path="/signin"
						render={() =>
							currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
						}
					/>
				</Switch>
			</div>
		);
	}
}

// Access the current user from the state
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	// collectionsArray: selectCollectionForPreview,
});

// Store the user in the state
const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
