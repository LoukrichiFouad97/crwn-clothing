import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyA-QEk5O5d44Bmm6M_G7XwS0X0OWKaI0xg",
	authDomain: "crwn-db-5c1d6.firebaseapp.com",
	databaseURL: "https://crwn-db-5c1d6.firebaseio.com",
	projectId: "crwn-db-5c1d6",
	storageBucket: "crwn-db-5c1d6.appspot.com",
	messagingSenderId: "456086254095",
	appId: "1:456086254095:web:fbf3749b07c0e521a1a97a",
	measurementId: "G-7XQPKT0V80",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

/** createUserProfileDocument Function
 * [1] get the user && any additional data parameters
 * [2] check if user is authenticated or not
 * [3] get the user documentReference && get userSnapshot
 * [4]
 *
 */

export const createUserProfileDocument = async (
	userAuth /* authenticated user */,
	...additionalData
) => {
	if (!userAuth) return;

	// Request user document reference object
	const userRef = firestore.doc(`users/${userAuth.uid}`);

	console.log(userRef);
	// get user document snapshot obj using user document reference
	const snapshot = await userRef.get();
	console.log(snapshot);

	// // if user is not registered
	// if (!snapshot.exists) {
	// 	// Get displayName and email from the authenticated user
	// 	const { displayName, email } = userAuth;
	// 	const createdAt = new Date();

	// 	// Create user document && account
	// 	try {
	// 		await userRef.set({
	// 			displayName,
	// 			email,
	// 			createdAt,
	// 			...additionalData,
	// 		});
	// 	} catch (err) {
	// 		console.log("Error registering user", err.message);
	// 	}
	// }

	// return userRef;
};

// Use google as an authentication provider
const googleProvider = new firebase.auth.GoogleAuthProvider();

// trigger auth pop up
googleProvider.setCustomParameters({ prompet: "select_account" });

// Use pop-up as a way of authenticating
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
