import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyBO13n_rkDRkh_s-AIE0KoL4IjVLyYg9CM",
	authDomain: "ecom-demo-6022e.firebaseapp.com",
	databaseURL: "https://ecom-demo-6022e.firebaseio.com",
	projectId: "ecom-demo-6022e",
	storageBucket: "ecom-demo-6022e.appspot.com",
	messagingSenderId: "634670845600",
	appId: "1:634670845600:web:3a020669f6b31f8518c3c5",
	measurementId: "G-E7Y8QDE1XN"
	};

export const createUserProfileDocument = async (userAuth, data) => {
	if (!userAuth) return

	console.log(userAuth);
	
	const userRef = firestore.doc(`/users/${userAuth.uid}`)

	const snapShot = await userRef.get()

	if (!snapShot.exists) {
		const { displayName, email, data } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...data
			})
		} catch (err) {
			console.log('error creating user', err.message)
		}
	}
	return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;