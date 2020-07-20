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
 * [4] check if snapshot exists or not
 *
 *
 */

export const createUserProfileDocument = async (
	userAuth /* authenticated user */,
	...additionalData
) => {
	if (!userAuth) return;

	// Request user document reference object
	const userRef = firestore.doc(`users/${userAuth.uid}`);

	// get user document snapshot obj using user document reference
	const snapshot = await userRef.get();

	// if user is not registered
	if (!snapshot.exists) {
		// Get displayName and email from the authenticated user
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		// Create user document && account
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

/** addCollectionAndDocuments func
 * [1] get the collection key && the document to be added
 * [2] get the reference of the collection
 * [3] make sure to use firestore.batch() to avoid half fail errors (all success || all fail)
 * [4] loop through the documents to add && create documentReferences for each document
 * [5] bind each document with documentReference using batch.set() func
 * [6] don't forget to commit batches
 */

export const addCollectionAndDocuments = async (
	collectionKey,
	documentsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	documentsToAdd.forEach((document) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, document);
	});

	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map((doc) => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		};
	});

	/**
	 * get an object that has each collection title as key & a collection as value
	 */
	return transformedCollection.reduce((acc, collection) => {
		acc[collection.title.toLowerCase()] = collection;
		return acc;
	}, {});
};

// Use google as an authentication provider
const googleProvider = new firebase.auth.GoogleAuthProvider();

// trigger auth pop up
googleProvider.setCustomParameters({ prompt: "select_account" });

// Use pop-up as a way of authenticating
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
