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

export const createUserProfileDocument = async (
	userAuth,
	...additionalData
) => {
	if (!userAuth) return;

	// access to user document
	const userRef = firestore.doc(`users/${userAuth.uid}`);

	// get user snapshot
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		// Get displayName and email
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		// store user data into collection
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (err) {
			console.log("Error registering user", err.message);
		}
	}

	return userRef;
};

// set up google authentication
const googleProvider = new firebase.auth.GoogleAuthProvider();

// trigger auth pop up
googleProvider.setCustomParameters({ prompet: "select_account" });

// sign in with auth provider pop up
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
